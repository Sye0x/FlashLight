import { Pressable, View, StyleSheet, Text } from "react-native";
import { useState } from "react";
// Importing icon library for the flash icon
import Entypo from "@expo/vector-icons/Entypo";
// Importing responsive layout utilities
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function Index() {
  // State to track if the Flash button is pressed
  const [isPressed, setIsPressed] = useState(false);
  // State to track if the SOS button is pressed
  const [isPressed2, setIsPressed2] = useState(false);

  // Function to toggle the Flash button's pressed state
  function toggleFlash() {
    setIsPressed((prev) => !prev);
  }

  // Function to toggle the SOS button's pressed state
  function toggleSOS() {
    setIsPressed2((prev) => !prev);
  }

  return (
    // Main container view with centered items
    <View style={styles.background}>
      {/* Flash button with pressable effect */}
      <Pressable
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
        onPress={toggleFlash}
      >
        <Entypo
          name="flash"
          size={wp(30)}
          color={isPressed ? "#ffffff" : "#282828"} // Change color based on isPressed state
        />
      </Pressable>

      {/* SOS button with pressable effect */}
      <Pressable
        style={({ pressed }) => [
          styles.SOSbutton,
          pressed && styles.pressed,
          { backgroundColor: isPressed2 ? "#ffffff" : "#343434" }, // Dynamic background color based on isPressed2 state
        ]}
        onPress={toggleSOS}
      >
        <Text style={styles.SOSText}>S.O.S</Text>
      </Pressable>
    </View>
  );
}

// Styles for the component
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center", // Center items vertically
    alignItems: "center", // Center items horizontally
    backgroundColor: "#000000", // Background color for the main screen
  },
  button: {
    backgroundColor: "#343434", // Default color for Flash button
    height: hp(25),
    width: hp(25),
    borderRadius: hp(13), // Circular shape
    justifyContent: "center", // Center icon within button
    alignItems: "center",
    opacity: 0.4, // Slight transparency
  },
  pressed: {
    opacity: 0.6, // Increase opacity when button is pressed
  },
  SOSText: {
    color: "white", // Text color for SOS button
  },
  SOSbutton: {
    marginTop: hp(3),
    height: wp(11),
    width: wp(22),
    borderRadius: hp(13), // Circular shape
    justifyContent: "center", // Center text within button
    alignItems: "center",
    opacity: 0.4, // Slight transparency
  },
});
