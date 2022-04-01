import React from "react"
import { GestureResponderEvent } from "react-native"
import { colorScheme } from "../../constants"
import Button from "./Button"

interface IProps {
  onPress: (event: GestureResponderEvent) => void,
  title: string
}

const PrimaryButton: React.FC<IProps> = ({ onPress, title }) => {
  return (
    <Button onPress={onPress} title={title} color={colorScheme.blue} textColor='white' />
  )
}

export default PrimaryButton
