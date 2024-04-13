import {Button, Text, View, StyleSheet} from "react-native";

export default function GameScreen(props) {
  return (
    <View style={styles.container}>
      <Text>
        {props.pickedNumber}
      </Text>
      <Button title='Back' onPress={props.return}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 100,
    marginHorizontal: 20
  }
})