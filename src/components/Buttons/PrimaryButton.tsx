import React from "react"
import { Pressable, Text, GestureResponderEvent, StyleSheet } from "react-native"
import { colorScheme } from "../../constants"

const styles = StyleSheet.create({
  button: {
    backgroundColor: colorScheme.blue,
    height: 50,
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center'
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20
  }
})

interface IProps {
  onPress: (event: GestureResponderEvent) => void,
  title: string,
  //style: any | null | undefined
}

const PrimaryButton: React.FC<IProps> = ({ onPress, title }) => {
  return (
    <Pressable style={[styles.button]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}

export default PrimaryButton
