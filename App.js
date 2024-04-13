import {StyleSheet, ImageBackground} from 'react-native';
import StartGameScreen from "./screens/StartGameScreen";
import {LinearGradient} from "expo-linear-gradient";

export default function App() {
  return (
    <LinearGradient colors={['#8c2c5b', '#ddb52f']} style={styles.mainScreen}>
      <ImageBackground
        source={require('./assets/images/adaptive-icon.png')}
        resizeMode='cover'
        style={styles.mainScreen}
        imageStyle={styles.bgImage}
      >
        <StartGameScreen/>
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
