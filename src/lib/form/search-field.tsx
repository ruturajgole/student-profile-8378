import React from "react"

export const SearchField: React.FunctionComponent<Props> = (props) =>
    <input
        onInput={({currentTarget}) => props.onInput(currentTarget.value)}
        style={styles.field}
        placeholder={props.placeholder}/>

interface Props {
    placeholder: string;
    onInput: (input: string) => void;
}

/** Styles */

const styles: { [key: string]: React.CSSProperties } = {
    field: {
        width: "100%",
        fontSize: "medium",
        fontFamily: "Raleway",
        borderStyle: "none",
        borderBottom: "1px groove",
        padding: "5px"
    }
};