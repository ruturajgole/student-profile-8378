import { Student } from "app/services/models";
import { Next } from "futura";

/** State */
export class Home implements Home.State {
  public static init = (students: ReadonlyArray<Student>): Next<Home> => ({
    state: new Home(
      students,
    ),
  })

  public update(message: any): Next<Home> {
      return { state: this };
  }

  public subscriptions = () => [
  ]

  private constructor(
    readonly students: ReadonlyArray<Student>
  ) {}
}


/** Types */

export namespace Home {
  export interface State {
    students: ReadonlyArray<Student>;
  }

  export type Message
    = Timeout;
}


/** Messages */

class Timeout {
}