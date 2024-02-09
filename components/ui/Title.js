import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";
function Title({ children }) {
  return <Text style={styles.titlePropety}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  titlePropety: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    borderColor: "white",
    borderWidth: 2,
    padding: 16,
  },
});
