import {Button, Text, View, StyleSheet} from "react-native";
import Title from "../components/Title";

export default function GameScreen(props) {
  return (
    <View style={styles.container}>
      <Title>Opponent's guess</Title>
      <Text>
        {props.pickedNumber}
      </Text>
      <Button title='Back' onPress={props.return}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24
  }
})