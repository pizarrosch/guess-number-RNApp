import {StyleSheet, Text} from "react-native";
import Colors from "../../constants/Colors";

export default function InstructionText({children, style}) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>
}

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.violet4,
    fontSize: 24,
    fontFamily: 'open-sans',
  },
})