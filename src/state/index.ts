import { Next } from "futura";
import { Loading } from "./loading";
import { Home } from "./home";

/** Initialize the application state */
export const init: () => Next<State> = Loading.init;

/** Update the application state given the current state and a message */
export const update = (state: State, message: Message): Next<State> =>
  state.update(message);

/** Return the list of necessary subscriptions for the current state */
export const subscriptions = (state: State) =>
  state.subscriptions();


/** Types */

/** Possible states for the application */

export type State
  = Loading
  | Home;

/** Possible messages to be handled by the various states */
export type Message
  = Loading.Message
  | Home.Message;
