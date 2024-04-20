import {View, Image, StyleSheet, Text} from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/Colors";

export default function GameOverScreen() {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER</Title>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/images/success.png')} />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlightText}>X</Text> attempts to guess your number <Text style={styles.highlightText}>Y</Text>
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageContainer: {
    overflow: "hidden",
    width: 300,
    height: 300,
    borderRadius: 150,
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
    textAlign: 'center'
  },
  highlightText: {
    fontFamily: 'open-sans-bold',
    color: Colors.violet4
  }
})