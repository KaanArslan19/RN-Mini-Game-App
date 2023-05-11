import { ImageBackground, SafeAreaView, StyleSheet, Text } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
  };

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} />;
  }
  return (
    <LinearGradient
      colors={[Colors.third500, Colors.secondary500]}
      style={styles.RootScreen}
    >
      <ImageBackground
        source={require("./assets/images/bg.jpg")}
        resizeMode="cover"
        style={styles.RootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.RootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  RootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.25,
  },
});
