import {StyleSheet, ImageBackground, SafeAreaView} from 'react-native';
import StartGameScreen from "./screens/StartGameScreen";
import {LinearGradient} from "expo-linear-gradient";
import {useState} from "react";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/Colors";
import GameOver from "./screens/GameOverScreen";

export default function App() {

  const [confirmedNumber, setConfirmedNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);

  function startGame(enteredNumber) {
    setConfirmedNumber(enteredNumber);
    setGameIsOver(false);
  }

  function returnToTheStartPage() {
    setConfirmedNumber(null);
  }

  function gameOverHandler() {
    setGameIsOver(true);
  }

  let screen = <StartGameScreen onConfirm={startGame}/>

  if (confirmedNumber) {
    screen = <GameScreen
      return={returnToTheStartPage}
      pickedNumber={confirmedNumber}
      onGameOver={gameOverHandler}
    />
  }

  if (gameIsOver && confirmedNumber) {
    screen = <GameOver />
  }

  return (
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
