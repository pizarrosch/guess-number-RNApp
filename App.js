import {StyleSheet, ImageBackground, SafeAreaView} from 'react-native';
import StartGameScreen from "./screens/StartGameScreen";
import {LinearGradient} from "expo-linear-gradient";
import {useState} from "react";
import GameScreen from "./screens/GameScreen";

export default function App() {

  const [confirmedNumber, setConfirmedNumber] = useState();

  function startGame(enteredNumber) {
    setConfirmedNumber(enteredNumber);
  }

  function returnToTheStartPage() {
    setConfirmedNumber(null);
  }

  let screen = <StartGameScreen onConfirm={startGame}/>

  if (confirmedNumber) {
    screen = <GameScreen return={returnToTheStartPage} pickedNumber={confirmedNumber}/>
  }

  return (
    <LinearGradient colors={['#8c2c5b', '#ddb52f']} style={styles.mainScreen}>
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
