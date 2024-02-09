import { Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";
function Title({ children }) {
  return <Text style={styles.titlePropety}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  titlePropety: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.accent5,
    textAlign: "center",
    borderColor: Colors.accent5,
    borderWidth: 2,
    padding: 16,
  },
});
