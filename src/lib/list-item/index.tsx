import { Student } from "app/services/models";

export const StudentListItem: React.FunctionComponent<Props> = ({student}) =>
    <div style={styles.container}>
        <img style={styles.image} src={student.pic}/>
        <div style={styles.textContainer}>
            <p style={styles.name}>{student.firstName.toUpperCase()} {student.lastName.toUpperCase()}</p>
            <p style={styles.details}>Email: {student.email}</p>
            <p style={styles.details}>Company: {student.company}</p>
            <p style={styles.details}>Skill: {student.skill}</p>
            <p style={styles.details}>Average: {student.average}%</p>
        </div>
    </div>;

interface Props {
    readonly student: Student;
}

/** Styles */

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        backgroundColor: "white",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    textContainer: {
        lineHeight: "5px",
    },
    image: {
        margin: "20px",
        objectFit: "contain",
        height: "110px",
        borderRadius: "100px",
        borderStyle: "solid",
        borderColor: "#CCC",
        borderWidth: "1.5px",
        backgroundColor: "white",
    },
    name: {
        fontFamily:"Raleway extrabold",
        fontSize: 'xx-large',
    },
    details: {
        margin: "20px",
        fontFamily:"Raleway Light",
    }
  };