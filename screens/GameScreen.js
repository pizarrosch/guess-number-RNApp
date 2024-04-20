import {View, StyleSheet, Alert, Text, SafeAreaView, FlatList} from "react-native";
import Title from "../components/ui/Title";
import {useEffect, useState} from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import {Ionicons} from "@expo/vector-icons";
import Colors from "../constants/Colors";
import GuessLogItem from "../components/game/GuessLogItem";

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
  const [guessRounds, setGuessRounds] = useState([initialNumber]);

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
    setGuessRounds(prevGuess => [newGeneratedNumber, ...prevGuess]);
  }

  useEffect(() => {
    if (pickedNumber.toString() === generatedNumber.toString()) {
      onGameOver();
    }
  }, [generatedNumber, pickedNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  const guessedListItemsLength = guessRounds.length;

  return (
    <View style={styles.rootContainer}>
      <Title>Opponent's guess</Title>
      <NumberContainer>{generatedNumber}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>Higher or lower?</InstructionText>
        <View style={styles.changeButtonsContainer}>
          <View style={styles.plusMinusContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
              <Ionicons name="remove-sharp" size={24} color="#ABB3BF"/>
            </PrimaryButton>
          </View>
          <View style={styles.plusMinusContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
              <Ionicons name="add-sharp" size={24} color="#ABB3BF"/>
            </PrimaryButton>
          </View>
        </View>
      </Card>

      {/*One method would be using map() function for not too long lists*/}
      <View style={styles.listContainer}>
        <FlatList
          scrollEnabled={true}
          data={guessRounds}
          renderItem={(itemData) => <GuessLogItem
            guessValue={itemData.item}
            roundNumber={guessedListItemsLength - itemData.index}
          />}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    alignItems: 'stretch',
    padding: 24,
    flex: 1
  },
  instructionText: {
    marginBottom: 15
  },
  changeButtonsContainer: {
    flexDirection: 'row',
  },
  plusMinusContainer: {
    flex: 1,
  },
  guessedNumbersContainer: {
    fontFamily: 'open-sans',
    color: Colors.primaryTextAndBorders
  },
  listContainer: {
    flex: 1,
    padding: 16
  }
})