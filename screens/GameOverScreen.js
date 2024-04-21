import {View, Image, StyleSheet, Text, Dimensions} from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/Colors";
import PrimaryButton from "../components/ui/PrimaryButton";

export default function GameOverScreen({attemptNumber, pickedNumber, onGameRestart}) {

  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER</Title>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/images/success.png')}/>
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlightText}>{attemptNumber}</Text> attempts to guess your number <Text
        style={styles.highlightText}>{pickedNumber}</Text>
      </Text>
      <PrimaryButton onPress={onGameRestart}>Start new game</PrimaryButton>
    </View>
  )
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageContainer: {
    overflow: "hidden",
    width: deviceWidth < 380 ? 150 : 300,
    height: deviceWidth < 380 ? 150 : 300,
    borderRadius: deviceWidth < 380 ? 75 : 150,
    borderWidth: 3,
    borderColor: Colors.violet1,
    margin: 36
  },
  image: {
    width: '100%',
    height: '100%'
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 23,
    textAlign: 'center',
    marginBottom: 24
  },
  highlightText: {
    fontFamily: 'open-sans-bold',
    color: Colors.violet4
  }
})