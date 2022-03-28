import React from 'react'
import { View, StyleSheet } from "react-native"

const styles = StyleSheet.create({
  screen: {
    height: '100%',
    backgroundColor: 'white'
  },
})

interface IProps {
  style: any
}

const Screen: React.FC<IProps> = ({ children, style }) => {
  return (
    <View style={[styles.screen, style]}>
      {children}
    </View>
  )
}

export default Screen
