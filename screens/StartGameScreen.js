import {
  TextInput,
  View,
  StyleSheet,
  Alert,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import {useState} from "react";
import Colors from "../constants/Colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

export default function StartGameScreen(props) {

  const [enteredNumber, setEnteredNumber] = useState('');

  const {width, height} = useWindowDimensions();

  function handleInput(enteredValue) {
    setEnteredNumber(enteredValue);
  }

  function confirmNumber() {
    const typedNumber = parseInt(enteredNumber);

    if (isNaN(typedNumber) || typedNumber <= 0 || typedNumber > 99) {
      Alert.alert(
        'Invalid number',
        'The number you entered must be from 1 to 99',
        [{text: 'Understood', style: 'destructive', onPress: resetInput}]
      )
    } else {
      props.onConfirm(enteredNumber);
      resetInput();
    }
  }

  function resetInput() {
    setEnteredNumber('');
  }

  const marginTopValue = height < 400 ? 30 : 100;

  return (
    <ScrollView style={styles.root}>
      <KeyboardAvoidingView style={styles.root} behavior='position'>
        <View style={[styles.mainContainer, {marginTop: marginTopValue}]}>
          <Title>Guess My Number</Title>
          <Card>
            <InstructionText>Enter your number</InstructionText>
            <TextInput
              style={styles.input}
              maxLength={2}
              keyboardType='number-pad'
              value={enteredNumber}
              onChangeText={newNumber => handleInput(newNumber)}/>
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={resetInput}>Reset</PrimaryButton>
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={confirmNumber}>Confirm</PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  mainContainer: {
    marginTop: 100,
    flex: 1,
    alignItems: "center"
  },
  buttonsContainer: {
    flexDirection: "row"
  },
  buttonContainer: {
    flex: 1,
  },
  input: {
    height: 50,
    width: 50,
    fontSize: 34,
    borderBottomColor: Colors.primaryTextAndBorders,
    borderBottomWidth: 2,
    color: Colors.primaryTextAndBorders,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})