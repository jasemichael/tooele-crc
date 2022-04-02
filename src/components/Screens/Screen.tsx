import React from 'react'
import { StyleSheet, SafeAreaView, View } from "react-native"
import Navigation from '../Navigation'
import Wrapper from '../Wrapper'

const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'white',
  }
})

interface IProps {
  activeScreen?: 'home' | 'profile',
}

const Screen: React.FC<IProps> = ({ children, activeScreen }) => {
  return (
    <SafeAreaView style={[styles.screen, StyleSheet.absoluteFill]}>
      <Wrapper>
        {children}
      </Wrapper>
      {activeScreen ? <Navigation activeScreen={activeScreen} /> : null}
    </SafeAreaView>
  )
}

export default Screen
