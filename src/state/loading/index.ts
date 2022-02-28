import { Next } from "futura";
import { getData, ErrorInfo } from "../../services";
import { Student } from "../../services/models";
import { Home } from "../home";

/** State */
export class Loading implements Loading.State {
  public static init = (): Next<Loading> => ({
    state: new Loading(),
    requests: [
      getData(
        DataReceived,
        DataError,
        {}
      ),
    ],
  })

  public update(message: any): Next<Loading | Home> {
    if(message instanceof DataReceived){
      return Home.init(message.students);
    } else {
      return { state: this };
    }
  }

  public subscriptions = () => [
  ]

  private constructor(
  ) {}
}


/** Types */

export namespace Loading {
  export interface State {}

  export type Message
    = Timeout
    | DataReceived
    | DataError;
}


/** Messages */

class Timeout {
}

class DataReceived {
  constructor(
    readonly students: ReadonlyArray<Student>,
    readonly context: Context,
  ) {}
}

class DataError {
  constructor(
    readonly info: ErrorInfo,
    readonly context: Context,
  ) {}
}

interface Context {
  readonly instance: symbol;
}
