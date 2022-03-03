import { Student } from "app/services/models";
import { Component } from "react";

export class StudentListItem extends Component<Props, State> {
    constructor(props: Props){
        super(props);

        this.state = {
            isExpanded: false
        }

        this.onToggle = this.onToggle.bind(this);
    }

    public onToggle(){
        this.setState(({ isExpanded }) => ({ isExpanded: !isExpanded }));
    }

    render(){
    const { student } = this.props;
    const { isExpanded } = this.state;

    return (<div style={styles.container}>
        <img style={styles.image} src={student.pic}/>
        <div style={styles.textContainer}>
            <p style={styles.name}>{student.firstName.toUpperCase()} {student.lastName.toUpperCase()}</p>
            <p style={styles.details}>Email: {student.email}</p>
            <p style={styles.details}>Company: {student.company}</p>
            <p style={styles.details}>Skill: {student.skill}</p>
            <p style={styles.details}>Average: {student.average}%</p>
            {isExpanded && 
                <ul style={styles.list}>
                    {
                    student.grades.map((grade, index) =>
                        <li
                            style={styles.listItem} 
                            key={index}>
                            <span>Test {index + 1}:</span>
                            <span>{grade}%</span>
                        </li>)
                    }
                </ul>
            }
        </div>
        <button style={styles.button} onClick={this.onToggle}>{isExpanded ? "-" : "+"}</button>
    </div>);
    }
}

interface Props {
    readonly student: Student;
}

interface State {
    readonly isExpanded: boolean;
}

/** Styles */

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        backgroundColor: "white",
        display: "flex",
        flexDirection: "row",
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
    },
    list: {
        listStyle: "none",
        lineHeight: "normal",
        fontFamily: "Raleway Light",
        margin: "20px",
        padding: "0",
    },
    listItem: {
        display: "flex",
        width: "50%",
        justifyContent: "space-between",
    },
    button: {
        backgroundColor: "transparent",
        borderStyle: "none",
        fontSize: "xxx-large",
        color: "darkgray",
        alignSelf: "start",
        marginLeft: "auto",
        cursor: "pointer",
    }
  };