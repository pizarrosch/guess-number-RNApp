import {View, Text, StyleSheet, Dimensions} from "react-native";
import Colors from "../../constants/Colors";

export default function NumberContainer({children}) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  )
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.primaryTextAndBorders,
    padding: deviceWidth < 380 ? 12 : deviceWidth > 500 ? 10 : 24,
    margin: deviceWidth < 380 ? 12 : deviceWidth > 500 ? 5 : 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    color: Colors.primaryTextAndBorders,
    fontFamily: 'open-sans-bold',
    fontSize: deviceWidth < 380 ? 28 : 36
  }
})