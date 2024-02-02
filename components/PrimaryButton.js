import { Text, View, Pressable, StyleSheet } from "react-native";

function PrimaryButton({ children }) {
  function pressHandeler() {
    console.log("apretado");
  }

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.pressed, styles.buttonInerContainer]
            : styles.buttonInerContainer
        }
        onPress={pressHandeler}
        android_ripple={{ color: "#340101" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    margin: 4,
    borderRadius: 28,
    overflow: "hidden",
  },
  buttonInerContainer: {
    backgroundColor: "#4e0909",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
