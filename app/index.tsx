import { Pressable, View, StyleSheet, Text } from "react-native";
import { useState } from "react";
import Entypo from "@expo/vector-icons/Entypo";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function Index() {
  const [isPressed, setIsPressed] = useState(false);
  const [isPressed2, setIsPressed2] = useState(false);

  function toggleFlash() {
    setIsPressed((prev) => !prev);
  }

  function toggleSOS() {
    setIsPressed2((prev) => !prev);
  }

  return (
    <View style={styles.background}>
      <Pressable
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
        onPress={toggleFlash}
      >
        <Entypo
          name="flash"
          size={wp(30)}
          color={isPressed ? "#ffffff" : "#282828"}
        />
      </Pressable>
      <Pressable
        style={({ pressed }) => [
          styles.SOSbutton,
          pressed && styles.pressed,
          { backgroundColor: isPressed2 ? "#ffffff" : "#343434" },
        ]}
        onPress={toggleSOS}
      >
        <Text style={styles.SOSText}>S.O.S</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",
  },
  button: {
    backgroundColor: "#343434",
    height: hp(25),
    width: hp(25),
    borderRadius: hp(13),
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.4,
  },
  pressed: {
    opacity: 0.6,
  },
  SOSText: {
    color: "white",
  },
  SOSbutton: {
    marginTop: hp(3),
    height: wp(11),
    width: wp(22),
    borderRadius: hp(13),
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.4,
  },
});
