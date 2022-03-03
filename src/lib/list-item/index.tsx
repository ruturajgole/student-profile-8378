import { Student } from "app/services/models";
import { Component } from "react";
import { InputField } from "../form/input-field";

export class StudentListItem extends Component<Props, State> {
    constructor(props: Props){
        super(props);

        this.state = {
            tag: "",
            isExpanded: false
        }

        this.onToggle = this.onToggle.bind(this);
        this.onInput = this.onInput.bind(this);
        this.onAddTag = this.onAddTag.bind(this);
    }

    public onToggle(){
        this.setState(({ isExpanded }) => ({ isExpanded: !isExpanded }));
    }

    public onInput(tag: string){
        this.setState({tag});
    }

    public onAddTag(){
        const { onUpdateStudent, student } = this.props;
        const { tag } = this.state;

        this.setState({tag: ""},
            () => onUpdateStudent({...student, tags: [...student.tags, tag]}))
    }

    render(){
    const { student } = this.props;
    const { isExpanded, tag } = this.state;

    return (<div style={styles.container}>
        <img style={styles.image} src={student.pic}/>
        <div style={styles.textContainer}>
            <p style={styles.name}>{student.firstName.toUpperCase()} {student.lastName.toUpperCase()}</p>
            <div style={styles.details}>
                <p>Email: {student.email}</p>
                <p>Company: {student.company}</p>
                <p>Skill: {student.skill}</p>
                <p>Average: {student.average}%</p>
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
                <div style={styles.tagsContainer}>
                    {student.tags.map((tag) => <p style={styles.tag} key={tag}>{tag}</p>)}
                </div>
                <div style={styles.tagInputContainer}>
                    <InputField
                        placeholder="Add a tag"
                        value={tag}
                        onInput={this.onInput}
                        onKeyup={this.onAddTag}/>
                </div>
            </div>
        </div>
        <button style={styles.button} onClick={this.onToggle}>{isExpanded ? "-" : "+"}</button>
    </div>);
    }
}

interface Props {
    readonly student: Student;
    readonly onUpdateStudent: (student: Student) => void;
}

interface State {
    readonly tag: string;
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
        margin: "0.5rem 0rem",
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
    },
    tagsContainer: {
        display: "flex",
    },
    tag: {
        backgroundColor: "lightgray",
        width: "max-content",
        fontSize: "medium",
        display: "inline",
        borderRadius: "6px",
        padding: "0.8rem",
        fontFamily: "Raleway",
        margin: "0.1rem",
    },
    tagInputContainer: {  
        width: "fit-content",
        margin: "1rem 0rem",
    }
  };