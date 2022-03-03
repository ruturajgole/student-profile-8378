import { Req } from "futura";
import DataService from "./service";
import { Student } from "./models";

export const getData = <R, E, C>(
    Result: Result<ReadonlyArray<Student>, R>,
    Error: Error <E>,
    context: C,
  ): Req<any> => ({
    service: DataService,
    request: {
      run: async () => {
        try {
          const response: Response = await fetch("https://api.hatchways.io/assessment/students");
          const students: ReadonlyArray<Student> = (await response.json())["students"];          

          return new Result(students.map((student: Student) =>
            ({ ...student, 
              grades: student.grades.map((grade) => Number(grade)),
              average: Number(student.grades.reduce((acc, value) => Number(acc) + Number(value), 0) / student.grades.length),
              tags: [],
            })), context);
        } catch (e: any) {
          return new Error(ErrorInfo.make(e), context);
        }
      },
    },
  });

type Result<T = any, R = any, C = any> = new(result: T, context: C) => R;

type Error<R = any, C = any> = Result<ErrorInfo, R, C>;

export interface ErrorInfo {
    code: number;
    message: string;
    data: any;
  }
  
export namespace ErrorInfo {
    export const make = (info: Partial<ErrorInfo>) => ({
        code: info.code || 0,
        message: info.message || "Oops, something went wrong",
        data: info.data || {},
    });
}