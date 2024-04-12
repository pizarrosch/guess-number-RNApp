import {TextInput, View, StyleSheet} from "react-native";
import PrimaryButton from "../components/PrimaryButton";

export default function StartGameScreen() {
  return (
    <View style={styles.mainContainer}>
      <TextInput style={styles.input} maxLength={2} keyboardType='number-pad'/>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Confirm</PrimaryButton>
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
    backgroundColor: '#8c2c5b',
    elevation: 4, //for Android only
    shadowColor: '#8C2C5BFF',
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
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb52f',
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})