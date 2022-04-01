import React from "react"
import { View, ScrollView, StyleSheet } from "react-native"

const styles = StyleSheet.create({
  carousel: {
    flexDirection: 'row'
  }
})

const Carousel: React.FC = ({ children }) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.carousel}>
        {children}
      </View>
    </ScrollView>
  )
}

export default Carousel
