import {StyleSheet, Text} from "react-native";
import Colors from "../../constants/Colors";

export default function Title({children}) {
  return (
    <Text style={styles.title}>{children}</Text>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: 'open-sans-bold',
    textAlign: "center",
    color: Colors.white3,
    borderWidth: 2,
    borderColor: Colors.white3,
    padding: 12,
    marginBottom: 20
  }
})