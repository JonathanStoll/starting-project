import { Text, View, StyleSheet } from "react-native";
function GameScreen() {
  return (
    <View style={styles.screen}>
      <Text>text</Text>
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
  },
});
