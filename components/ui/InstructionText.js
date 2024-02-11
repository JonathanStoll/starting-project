import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function InstructionText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}


export default InstructionText;

const styles = StyleSheet.create({
    text: {
      fontSize: 24,
      color: Colors.accent5,
    },
  });