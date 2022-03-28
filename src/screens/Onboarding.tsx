import React from "react"
import { Alert, Text, View, Image, StyleSheet } from "react-native"
import { useNavigate } from "react-router-native"
import { Screen } from "../components"
import { PrimaryButton } from "../components"
import Logo from '../assets/images/tooele-crc.png'

const LogoURI = Image.resolveAssetSource(Logo).uri;

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    flex: 1
  },
  screen: {
    marginHorizontal: 40,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headingAndIcon: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  heading: {
    flex: 1,
    fontSize: 28
  },
  description: {
    fontSize: 18
  },
  content: {
    flex: 0.4,
    justifyContent: 'space-between'
  }
})

const Onboarding = () => {
  const navigate = useNavigate();
  return (
    <Screen style={styles.screen}>
      <View style={styles.content}>
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
    </Screen>
  )
}

export default Onboarding
