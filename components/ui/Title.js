import { Text, StyleSheet, Platform } from "react-native";
import Colors from "../../constants/colors";
function Title({ children }) {
  return <Text style={styles.titlePropety}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  titlePropety: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    borderColor: "white",
    // borderWidth: Platform.OS === 'android' ? 2 : 0,
    borderWidth: Platform.select({ios: 0, android: 2}),
    padding: 16,
    fontFamily: 'open-sans-bold',
    maxWidth: '80%',
    width: 300
  },
});
