export const LoadingView = () =>
  <div style={styles.container}>
    <span style={styles.text}>Getting Values</span>
  </div>;


/** Styles */

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    height: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
  },
  text: {
    fontFamily: "Raleway",
    fontSize: "xxx-large"
  }
}