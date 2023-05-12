import { ImageBackground, SafeAreaView, StyleSheet, Text } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [roundCounter, setRoundCounter] = useState(0);

  const [fontsLoaded] = useFonts({
    "pop-regular": require("./assets/fonts/Poppins-Medium.otf"),
    "pop-bold": require("./assets/fonts/Poppins-Bold.otf"),
    "pop-thin": require("./assets/fonts/Poppins-Thin.otf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  };
  const gameOverHandler = () => {
    setGameIsOver(true);
  };
  const roundCountHandler = (rounds) => {
    setRoundCounter(rounds);
  };
  const startNewGameHandler = () => {
    setUserNumber(null);
    setRoundCounter(0);
  };

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen
        userNumber={userNumber}
        onGameOver={gameOverHandler}
        gameRounds={roundCountHandler}
      />
    );
  }

  if (gameIsOver && userNumber) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        roundsNumber={roundCounter}
        onStartNewGame={startNewGameHandler}
      />
    );
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
