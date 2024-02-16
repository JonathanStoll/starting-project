import { useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Alert,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

function StartGameScreen({ onPickedNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");
  const { width, height } = useWindowDimensions();
  function numberInputHandeler(text) {
    setEnteredNumber(text);
  }
  function resetInputHandeler() {
    setEnteredNumber("");
  }
  function confirmInputHandeler() {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid Number",
        "Number hsa to be a number between 1 and 99",
        [{ text: "Okey", style: "destrutive", onPress: resetInputHandeler }]
      );
    }
    onPickedNumber(chosenNumber);
  }
  const marginTop = height < 380 ? 30 : 100;
  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, { marginTop: marginTop }]}>
          <Title>Guess My Number</Title>
          <Card>
            <InstructionText>Enter a number!</InstructionText>
            <TextInput
              style={styles.input}
              maxLength={2}
              keyboardType="number-pad"
              autoCapitalize="none"
              autoCorrect={false}
              value={enteredNumber}
              onChangeText={numberInputHandeler}
            />
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={resetInputHandeler}>
                  Reset
                </PrimaryButton>
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={confirmInputHandeler}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
  screen: {
    flex: 1,
  },
  input: {
    height: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent5,
    borderBottomWidth: 2,
    color: Colors.accent5,
    marginVertical: 8,
    fontWeight: "bold",
    width: 50,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
