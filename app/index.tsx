import { Pressable, View, StyleSheet } from "react-native";
import { useState } from "react";
import Entypo from "@expo/vector-icons/Entypo";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function Index() {
  const [ispressed, setispressed] = useState(false);
  function Flash() {
    ispressed ? setispressed(false) : setispressed(true);
  }
  return (
    <View style={styles.background}>
      <Pressable
        style={({ pressed }) => [styles.button, pressed && {}]}
        onPress={Flash}
      >
        <Entypo
          name="flash"
          size={wp(10)}
          color={ispressed ? "#ffffff" : "#28282B"}
        />
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
    backgroundColor: "rgba(17, 17, 17, 0.7)",
    height: hp(30),
    width: hp(30),
    borderRadius: hp(15),
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.7,
  },
});
