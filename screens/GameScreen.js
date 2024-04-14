import {Button, Text, View, StyleSheet} from "react-native";
import Title from "../components/ui/Title";
import {useState} from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen(props) {
  const initialNumber = generateRandomBetween(minBoundary, maxBoundary, props.pickedNumber);
  const [generatedNumber, setGeneratedNumber] = useState(initialNumber);

  function nextGuessHandler(direction) {
    if (direction === 'lower') {
      maxBoundary = generatedNumber;
    } else {
      minBoundary = generatedNumber + 1;
    }
    const newGeneratedNumber = generateRandomBetween(minBoundary, maxBoundary, generatedNumber);
    setGeneratedNumber(newGeneratedNumber);
  }

  return (
    <View style={styles.container}>
      <Title>Opponent's guess</Title>
      <NumberContainer>{generatedNumber}</NumberContainer>
      <View>
        <Text>Higher or lower?</Text>
        <View style={styles.changeButtonsContainer}>
          <View style={styles.plusMinusContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
          </View>
          <View style={styles.plusMinusContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>+</PrimaryButton>
          </View>
        </View>
      </View>
      <Text>
        {props.pickedNumber}
      </Text>
      <Button title='Back' onPress={props.return}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24
  },
  changeButtonsContainer: {
    flexDirection: "row"
  },
  plusMinusContainer: {
    flex: 1,
  }
})