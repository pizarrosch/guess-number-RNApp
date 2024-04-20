import {View, Text, StyleSheet} from "react-native";
import Colors from "../../constants/Colors";

export default function GuessLogItem({roundNumber, guessValue}) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.textStyle}>#{roundNumber}</Text>
      <Text style={styles.textStyle}>Opponent's guess: {guessValue}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.violet1,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.primaryTextAndBorders,
    flexDirection: "row",
    justifyContent: 'space-between',
    width: '100%',
    elevation: 4,
    shadowColor: Colors.violet4,
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 3
  },
  textStyle: {
    fontFamily: 'open-sans'
  }
})