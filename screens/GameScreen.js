import {View, StyleSheet, Alert} from "react-native";
import Title from "../components/ui/Title";
import {useEffect, useState} from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import {Ionicons} from "@expo/vector-icons";

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

export default function GameScreen({pickedNumber, onGameOver}) {
  const initialNumber = generateRandomBetween(1, 100, pickedNumber);
  const [generatedNumber, setGeneratedNumber] = useState(initialNumber);

  function nextGuessHandler(direction) {
    if (
      direction === 'lower' && generatedNumber < pickedNumber ||
      direction === 'greater' && generatedNumber > pickedNumber) {
      Alert.alert('You are lying!', 'Your hint does not correlate with the true number', [{
        text: 'Sorry', style: 'destructive'
      }]);
      return;
    }

    if (direction === 'lower') {
      maxBoundary = generatedNumber;
    } else {
      minBoundary = generatedNumber + 1;
    }
    const newGeneratedNumber = generateRandomBetween(minBoundary, maxBoundary, generatedNumber);
    setGeneratedNumber(newGeneratedNumber);
  }

  useEffect(() => {
    if (pickedNumber.toString() === generatedNumber.toString()) {
      console.log(`That's right!'`)
      onGameOver();
    }
  }, [generatedNumber, pickedNumber, onGameOver]);

  return (
    <View style={styles.rootContainer}>
      <Title>Opponent's guess</Title>
      <NumberContainer>{generatedNumber}</NumberContainer>
      <View>
        <Card>
        <InstructionText style={styles.instructionText}>Higher or lower?</InstructionText>
          <View style={styles.changeButtonsContainer}>
            <View style={styles.plusMinusContainer}>
              <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                <Ionicons name="remove-sharp" size={24} color="#ABB3BF" />
              </PrimaryButton>
            </View>
            <View style={styles.plusMinusContainer}>
              <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                <Ionicons name="add-sharp" size={24} color="#ABB3BF" />
              </PrimaryButton>
            </View>
          </View>
        </Card>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    alignItems: 'stretch',
    padding: 24
  },
  instructionText: {
    marginBottom: 15
  },
  changeButtonsContainer: {
    flexDirection: 'row',
  },
  plusMinusContainer: {
    flex: 1,
  }
})