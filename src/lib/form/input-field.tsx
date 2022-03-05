import React from "react"

export const InputField: React.FunctionComponent<Props> = (props) =>
    <input
        onKeyUp={({key}) => (key == 'Enter') && props.onKeyup && props.onKeyup()}
        onInput={({currentTarget}) => props.onInput(currentTarget.value)}
        value={props.value}
        style={styles.field}
        placeholder={props.placeholder}/>

interface Props {
    placeholder: string;
    value?: string;
    onInput: (input: string) => void;
    onKeyup?: () => void;
}

/** Styles */

const styles: { [key: string]: React.CSSProperties } = {
    field: {
        width: '100%',
        fontSize: "medium",
        fontFamily: "Raleway",
        borderStyle: "none",
        borderBottom: "1px groove",
        padding: "0.5rem",
    }
};