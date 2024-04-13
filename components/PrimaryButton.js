import {Text, View, Pressable, StyleSheet} from "react-native";

export default function PrimaryButton({children, onPress}) {

  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={({pressed}) => pressed ? [styles.innerContainer, styles.pressedIOS] : styles.innerContainer}
        onPress={onPress}
        android_ripple={{color: '#8c2c5b'}}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  outerContainer: {
    borderRadius: 28,
    marginTop: 8,
    overflow: "hidden",
    marginHorizontal: 6
  },
  innerContainer: {
    backgroundColor: '#5d012f',
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2
  },
  buttonText: {
    color: '#EDEFF2',
    textAlign: 'center'
  },
  pressedIOS: {
    opacity: 0.75
  }
})