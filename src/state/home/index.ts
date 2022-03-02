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
    if(message instanceof SearchName){
      return {
        state: new Home(
          this.students,
          message.name || ""
        )
      }
    }
    return { state: this };
  }

  public subscriptions = () => [
  ]

  private constructor(
    readonly students: ReadonlyArray<Student>,
    readonly searchName?: string
  ) {}
}


/** Types */

export namespace Home {
  export interface State {
    readonly students: ReadonlyArray<Student>;
    readonly searchName?: string;
  }

  export type Message
    = SearchName;
}


/** Messages */

export class SearchName {
  constructor(
    readonly name: string
  ){}
}