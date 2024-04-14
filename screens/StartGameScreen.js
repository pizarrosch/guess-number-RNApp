import {TextInput, View, StyleSheet, Alert} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import {useState} from "react";
import Colors from "../constants/Colors";

export default function StartGameScreen(props) {

  const [enteredNumber, setEnteredNumber] = useState('');

  function handleInput(enteredValue) {
    setEnteredNumber(enteredValue);
  }

  function confirmNumber() {
    const typedNumber = parseInt(enteredNumber);

    if(isNaN(typedNumber) || typedNumber <= 0 || typedNumber > 99) {
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

  return (
    <View style={styles.mainContainer}>
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
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: Colors.violet1,
    elevation: 4, //for Android only
    shadowColor: Colors.violet4,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    shadowOpacity: 1,
    alignItems: 'center'
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