import {StyleSheet, Text, Platform} from "react-native";
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
    // borderWidth: Platform.OS === 'android' ? 2 : 0,
    // borderWidth: Platform.select({ios: 0, android: 2}),
    // borderColor: Colors.white3,
    padding: 12,
    marginBottom: 20
  }
})