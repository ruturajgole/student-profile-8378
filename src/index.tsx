import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { init, Message, State, subscriptions, update } from "./state";
import { AppView } from "./view";
import { program, Program } from 'futura';

export default class App extends Component<AppProps, AppState> {
  private app: Program<State, Message>;
  private subscription?: any;
  private pendingState?: State;

  constructor(props: AppProps) {
    super(props);

    this.app = program<State, Message>({ init, update, subscriptions });
    this.state = {
      state: this.app.state,
    };
  }

  public shouldComponentUpdate(nextProps: Readonly<AppProps>, nextState: Readonly<AppState>) {
    return nextState.state !== this.state.state;
  }

  
  public componentWillUnmount() {
    this.subscription!.cancel();
    this.subscription = undefined;
    this.pendingState = undefined;
  }

  public render() {
    const { state } = this.state;

    return (
      <div>
        <AppView
          state={state}
          dispatch={this.dispatch} />
      </div>
    );
  }

  public componentDidMount() {
    this.subscription = this.app.observe((state) => {
      if (this.pendingState === undefined) {
        requestAnimationFrame(() => {
          const state = this.pendingState;
          this.pendingState = undefined;
          if (state !== undefined) {
            this.setState({ state });
          }
        });
      }
      this.pendingState = state;
    });
  }

  private dispatch = (message: Message) => {
    requestAnimationFrame(() => {
      this.app.update(message);
    });
  }
}

/** Types */

interface AppProps {
}

interface AppState {
  readonly state: State;
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

