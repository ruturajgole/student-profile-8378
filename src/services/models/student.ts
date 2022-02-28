export interface Student {
    firstName: string;
    lastName: string;
    email: string;
    company: string;
    grades: ReadonlyArray<number>;
    pic: string;
    id: string;
    city: string;
    skill: string;
    average: number;
}