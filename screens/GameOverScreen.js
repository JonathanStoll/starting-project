import { View, Image, StyleSheet, Text } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";
function GameOverScreen() {
  return (
    <View style={styles.container}>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/success.png")}
          style={styles.image}
        />
      </View>
    
        <Text style={styles.summaryText}>
          your phone needed <Text style={styles.highlight}>X</Text> turn to guess the number
          <Text style={styles.highlight}>Y</Text>
        </Text>
      <PrimaryButton >Start New Game</PrimaryButton>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary7,
    overflow: "hidden",
    margin: 36,
  },
summaryText:{
  fontFamily: 'open-sans',
  fontSize: 24,
  textAlign: 'center',
  padding: 24
},
highlight:{
  fontFamily: 'open-sans-bold',
  color: Colors.primary5
}
});
