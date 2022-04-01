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
    textAlign: 'center',
    fontSize: 20
  }
})

interface IProps {
  onPress: (event: GestureResponderEvent) => void,
  title: string,
  color: string,
  textColor: string,
  borderColor?: string
}

const Button: React.FC<IProps> = ({ onPress, title, color, textColor, borderColor }) => {
  return (
    <Pressable style={borderColor ?
      [styles.button, { backgroundColor: color, borderWidth: 1, borderStyle: 'solid', borderColor: borderColor }] :
      [styles.button, { backgroundColor: color }]} onPress={onPress}>
      <Text style={[{ color: textColor }, styles.text]}>{title}</Text>
    </Pressable>
  )
}

export default Button
