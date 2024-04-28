import {StyleSheet, ImageBackground, SafeAreaView, StatusBar} from 'react-native';
import StartGameScreen from "./screens/StartGameScreen";
import {LinearGradient} from "expo-linear-gradient";
import {useState} from "react";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/Colors";
import GameOverScreen from "./screens/GameOverScreen";
import {useFonts} from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {

  const [confirmedNumber, setConfirmedNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessAttempts, setGuessAttempts] = useState(0);

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });

  if (!fontsLoaded) {
    return <AppLoading/>
  }

  function startGame(enteredNumber) {
    setConfirmedNumber(enteredNumber);
    setGameIsOver(false);
  }

  function onGameRestart() {
    setConfirmedNumber(null);
    setGuessAttempts(0);
  }

  function gameOverHandler(attemptsNumber) {
    setGameIsOver(true);
    setGuessAttempts(attemptsNumber);
  }

  let screen = <StartGameScreen onConfirm={startGame}/>

  if (confirmedNumber) {
    screen = <GameScreen
      pickedNumber={confirmedNumber}
      onGameOver={gameOverHandler}
    />
  }

  if (gameIsOver && confirmedNumber) {
    screen =
      <GameOverScreen onGameRestart={onGameRestart} pickedNumber={confirmedNumber} attemptNumber={guessAttempts}/>
  }

  return (
    <>
      <StatusBar barStyle='light-content' />
        <LinearGradient colors={[Colors.violet3, Colors.primaryTextAndBorders]} style={styles.mainScreen}>
          <ImageBackground
            source={require('./assets/images/adaptive-icon.png')}
            resizeMode='cover'
            style={styles.mainScreen}
            imageStyle={styles.bgImage}
          >
            <SafeAreaView style={styles.mainScreen}>
              {screen}
            </SafeAreaView>
          </ImageBackground>
        </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  mainScreen: {
    flex: 1
  },
  bgImage: {
    opacity: 0.25
  }
});
