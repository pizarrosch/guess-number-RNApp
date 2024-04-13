import {StyleSheet, Text} from "react-native";
import Colors from "../constants/Colors";

export default function Title({children}) {
  return (
    <Text style={styles.title}>{children}</Text>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: "center",
    color: Colors.primaryTextAndBorders,
    borderWidth: 2,
    borderColor: Colors.primaryTextAndBorders,
    padding: 12,
    marginBottom: 20
  }
})