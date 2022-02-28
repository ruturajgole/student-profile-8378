import { Dispatch } from "futura";
import React from "react";

import { Message, State } from "../state";
import { Loading } from "../state/loading";
import { Home } from "../state/home";

import { LoadingView } from "./loading";
import { HomeView } from "./home";


export const AppView: React.FunctionComponent<Props> = ({ state, dispatch }) => {
  console.log(state);
  if (state instanceof Loading) {
    return <LoadingView />;
  } else if (state instanceof Home) {
    return <HomeView state={state} dispatch={dispatch}/>;
  } else {
    return <p>Not implemented</p>;
  }
};

interface Props {
  state: State;
  dispatch: Dispatch<Message>;
}
