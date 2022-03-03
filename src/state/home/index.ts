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
          message.name || "",
          this.searchTag
        ),
      };
    } else if(message instanceof SearchTag){
      return {
        state: new Home(
          this.students,
          this.searchName,
          message.tag
        ),
      };
    } else if(message instanceof UpdateStudent){
      return {
        state: new Home(this.students.map((student) => 
          (student.id == message.student.id)
          ? message.student
          : student),
          this.searchName,
          this.searchTag
        ),
      };
    }
    return { state: this };
  }

  public subscriptions = () => [
  ]

  private constructor(
    readonly students: ReadonlyArray<Student>,
    readonly searchName?: string,
    readonly searchTag?: string,
  ) {}
}


/** Types */

export namespace Home {
  export interface State {
    readonly students: ReadonlyArray<Student>;
    readonly searchName?: string;
    readonly searchTag?: string;
  }

  export type Message
    = SearchName
    | SearchTag
    | UpdateStudent;
}


/** Messages */

export class SearchName {
  constructor(
    readonly name: string
  ){}
}

export class SearchTag {
  constructor(
    readonly tag: string
  ){}
}

export class UpdateStudent {
  constructor(
    readonly student: Student
  ){}
}