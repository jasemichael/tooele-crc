import React from 'react'
import { StyleSheet, SafeAreaView } from "react-native"
import { screenHeight } from '../../constants'
import Navigation from '../Navigation'
import Wrapper from '../Wrapper'

const styles = StyleSheet.create({
  screen: {
    height: screenHeight,
    backgroundColor: 'white',
  }
})

interface IProps {
  activeScreen?: 'home' | 'profile'
}

const Screen: React.FC<IProps> = ({ children, activeScreen }) => {
  return (
    <SafeAreaView style={styles.screen}>
      <Wrapper>
        {children}
      </Wrapper>
      {activeScreen ? <Navigation activeScreen={activeScreen} /> : null}
    </SafeAreaView>
  )
}

export default Screen
