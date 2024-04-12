import {StyleSheet, View} from 'react-native';
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  return (
    <View style={styles.mainScreen}>
      <StartGameScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  mainScreen: {
    backgroundColor: '#ddb52f',
    flex: 1
  }
});
