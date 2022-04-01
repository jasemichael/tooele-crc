import React from "react"
import { Alert, Text, View, Image, StyleSheet } from "react-native"
import { useNavigate } from "react-router-native"
import { Screen, Wrapper } from "../components"
import { PrimaryButton } from "../components"
import Logo from '../assets/images/tooele-crc.png'
import { screenHeight } from "../constants"

const LogoURI = Image.resolveAssetSource(Logo).uri;

const styles = StyleSheet.create({
  content: {
    justifyContent: 'space-around',
    height: '100%',
    //backgroundColor: 'black'
  },
  headingAndIcon: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
  },
  heading: {
    fontSize: screenHeight / 30,
    width: '50%',
    fontWeight: 'bold'
  },
  image: {
    maxWidth: '100%',
    width: '55%',
    height: '100%',
    aspectRatio: 1
  },
  description: {
    fontSize: screenHeight / 52,
    fontWeight: '300'
  },
  onboarding: {
    justifyContent: 'space-between',
    height: '35%'
  }
})

const Onboarding = () => {
  const navigate = useNavigate();
  return (
    <Screen>
      <View style={styles.content}>
        <View style={styles.onboarding}>
          <View style={styles.headingAndIcon}>
            <Text style={styles.heading}>Empowering families and individuals in need</Text>
            <Image
              source={{
                uri: LogoURI
              }}
              style={styles.image}
            />
          </View>
          <Text style={styles.description}>
            Each individual has worth and value.
            Change occurs when people are treated with respect and dignity,
            empowered with skills and resources to better their circumstance.
          </Text>
        </View>
        <PrimaryButton onPress={() => navigate('/login')} title="Let's Go" />
      </View>
    </Screen>
  )
}

export default Onboarding
