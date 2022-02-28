import React from "react";
import { Dispatch } from "futura";

import { Home } from "../../state/home";
import { StudentListItem } from "../../lib/list-item";

export const HomeView: React.FunctionComponent<Props> = ({state, dispatch}) =>
  <div>
    <ul style={styles.list}>
      {
        state.students.map((student) =>
          <ul key={student.id}><StudentListItem student={student}/></ul>
        )
      }
    </ul>
  </div>;

interface Props {
  state: Home.State;
  dispatch: Dispatch<Home.Message>;
}

/** Styles */

const styles: { [key: string]: React.CSSProperties } = {
  list: {
      listStyle: 'none',
  },
};