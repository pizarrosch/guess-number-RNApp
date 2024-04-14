import {View, Text, StyleSheet} from "react-native";
import Colors from "../../constants/Colors";

export default function NumberContainer({children}) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.primaryTextAndBorders,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  numberText: {
    color: Colors.primaryTextAndBorders,
    fontWeight: 'bold',
    fontSize: 36
  }
})