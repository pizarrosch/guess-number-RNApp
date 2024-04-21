import {StyleSheet, Text, TextInput, View, Dimensions} from "react-native";
import PrimaryButton from "./PrimaryButton";
import Colors from "../../constants/Colors";

export default function Card({children}) {
  return (
    <View style={styles.card}>{children}</View>
  )
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginTop: deviceWidth < 380 ? 30 : 40,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: Colors.violet1,
    elevation: 4, //for Android only
    shadowColor: Colors.violet4,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    shadowOpacity: 1,
    alignItems: 'center',
  },
})