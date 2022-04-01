import React from "react"
import { StyleSheet, View } from "react-native"

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: '6%',
    marginTop: '3%',
    height: '100%'
  }
})

const Wrapper: React.FC = ({ children }) => {
  return (
    <View style={styles.wrapper}>
      {children}
    </View>
  )
}

export default Wrapper
