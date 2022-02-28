import { Student } from "app/services/models";

export const StudentListItem: React.FunctionComponent<Props> = ({student}) =>
    <div>
        <img src={student.pic}/>
        <p style={styles.name}>{student.firstName} {student.lastName}</p>
        <p>Email: {student.email}</p>
        <p>Company: {student.company}</p>
        <p>Skill: {student.skill}</p>
        <p>Average: {student.average}%</p>
    </div>;

interface Props {
    readonly student: Student;
}

/** Styles */

const styles: { [key: string]: React.CSSProperties } = {
    name: {
        fontWeight: 'bold',
        fontSize: 'large'
    },
  };