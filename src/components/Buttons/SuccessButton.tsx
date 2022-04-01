import React from "react"
import { GestureResponderEvent } from 'react-native'
import Button from './Button'

interface IProps {
  onPress: (event: GestureResponderEvent) => void,
  title: string
}

const SuccessButton: React.FC<IProps> = ({ onPress, title }) => {
  return (
    <Button onPress={onPress} title={title} color='#77DD77' textColor='white' />
  )
}

export default SuccessButton
