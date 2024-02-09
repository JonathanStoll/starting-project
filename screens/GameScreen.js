import { Text, View, StyleSheet } from "react-native";
import Title from "../components/Title";
function GameScreen() {
  return (
    <View style={styles.screen}>
      <Title>Oponent's Guess</Title>
      {/* <Text>openent gess</Text>
      <View>
        <Text>Hier or lower</Text>
      </View>
      <View>
        <Text>Log ROunds</Text>
      </View> */}
    </View>
  );
}
export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    marginTop: 24,
  },
});
