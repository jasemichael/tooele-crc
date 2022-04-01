import React from 'react'
import { Pressable, View, Text, StyleSheet, GestureResponderEvent } from "react-native"

const styles = StyleSheet.create({
  addCard: {
    backgroundColor: 'white',
    borderColor: 'grey',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    width: 130
  },
  title: {
    textAlign: 'center'
  }
})

interface IProps {
  title: string,
  style?: any,
  onPress: (event: GestureResponderEvent) => void
}

const AddCard: React.FC<IProps> = ({ title, style, onPress }) => {

  return (
    <Pressable onPress={onPress} style={style}>
      <View style={styles.addCard}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </Pressable>
  )
}

export default AddCard
