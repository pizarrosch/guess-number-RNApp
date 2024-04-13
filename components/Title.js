import {StyleSheet, Text} from "react-native";

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
    color: '#ddb52f',
    borderWidth: 2,
    borderColor: '#ddb52f',
    padding: 12,
    marginBottom: 20
  }
})