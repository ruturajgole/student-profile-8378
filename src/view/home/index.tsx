import React from "react";
import { Dispatch } from "futura";

import { Home, SearchName, SearchTag, UpdateStudent } from "../../state/home";
import { StudentListItem } from "../../lib/list-item";
import { InputField } from "../../lib/form/input-field";
import { Student } from "app/services/models";

export const HomeView: React.FunctionComponent<Props> = ({state, dispatch}) =>
  <div style={styles.container}>
    <div style={styles.listContainer}>
      <div style={styles.inputsContainer}>
        <InputField
          placeholder="Search by name"
          onInput={onSearchName(dispatch)} />
        <InputField
          placeholder="Search by tag"
          onInput={onSearchTag(dispatch)} />
      </div>
      <ul style={styles.list}>
        {
          state.students
          .filter((student) => (
            `${student.firstName} ${student.lastName}`
            .toLowerCase()
            .includes((state.searchName && state.searchName.toLowerCase()) || "")) && (
            !state.searchTag ||
            student.tags.some((tag: string) =>
              state.searchTag && tag.toLowerCase().includes(state.searchTag.toLowerCase()))
            ))
          .map((student) =>
            <li
              style={styles.listItem}
              key={student.id}>
              <StudentListItem
                student={student}
                onUpdateStudent={onUpdateStudent(dispatch)}/>
            </li>
          )
        }
      </ul>
    </div>
  </div>;

/** Messages */

const onSearchName = (dispatch: Dispatch<Home.Message>) =>
  (name: string) =>
    dispatch(new SearchName(name));

const onSearchTag = (dispatch: Dispatch<Home.Message>) =>
  (tag: string) =>
    dispatch(new SearchTag(tag));

const onUpdateStudent = (dispatch: Dispatch<Home.Message>) =>
  (student: Student) =>
    dispatch(new UpdateStudent(student));

/** Types */

interface Props {
  state: Home.State;
  dispatch: Dispatch<Home.Message>;
}

/** Styles */

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    justifyContent: "center",
    height: "100%",
    width: "100%"
  },
  inputsContainer: {
    margin: "0",
    padding: "0.5rem",
  },
  listContainer: {
    borderRadius: "1rem",
    width: "55%",
    margin: "4% 0%",
    height: "35rem",
    backgroundColor: "white"
  },
  list: {
    borderRadius: "1rem",
    listStyle: 'none',
    maxHeight: "29.5rem",
    padding: "0",
    margin: "0",
    overflow: "auto",
    scrollBehavior:"smooth"
  },
  listItem: {
    borderBottom: "0.1rem solid #EEE",
  }
};