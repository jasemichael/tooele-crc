import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, Image, Pressable, KeyboardAvoidingView, Platform } from "react-native";
import loginUser from "../apis/loginUser";
import { globalStyles } from '../constants'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigate } from "react-router-native";
import Logo from '../assets/images/tooele-crc.png'
import EmailIcon from '../assets/icons/mail.svg'
import KeyIcon from '../assets/icons/key.svg'
import { PrimaryButton, Screen, LabeledInput, SecureInput } from "../components";

const LogoURI = Image.resolveAssetSource(Logo).uri;

const styles = StyleSheet.create({
  content: {
    justifyContent: 'space-evenly',
    height: '100%'
  },
  form: {
    justifyContent: 'space-between',
    height: '18%'
  },
  logo: {
    maxWidth: '100%',
    height: '32%',
    alignSelf: 'center',
    aspectRatio: 1
  },
  resetPassword: {
    color: 'blue'
  },
  info: {
  }
})

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const handleLogin = async (email: string, password: string) => {
    try {
      const { data } = await loginUser(email, password)
      try {
        await AsyncStorage.setItem('user', data)
        console.log(data)
        setIsLoggedIn(true)
      } catch (error) {
        console.log(error)
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    if (isLoggedIn) {
      navigate('/home')
    }
  }, [isLoggedIn])
  return (
    <Screen>
      <View style={styles.content}>
        <Image
          source={{
            uri: LogoURI
          }}
          style={styles.logo}
        />
        <View style={styles.form}>
          <LabeledInput
            label='Email'
            value={email}
            onChangeText={newEmail => setEmail(newEmail)}
            autoCapitalize='none'
            autoComplete='email'
            autoCorrect={false}
            keyboardType='email-address'
            icon={<EmailIcon fill="black" width={24} height={24} />}
            secureTextEntry={false}
          />
          <SecureInput
            label='Password'
            value={password}
            onChangeText={newPassword => setPassword(newPassword)}
            icon={<KeyIcon fill="black" width={24} height={24} />}
          />
          <Pressable onPress={() => navigate('/reset-password')}>
            <Text style={styles.resetPassword}>Forgot password?</Text>
          </Pressable>
        </View>
        <Text style={styles.info}>
          An account should have been created for you.
          If you don’t have an account, please speak to your supervisor to create one.
        </Text>
        <PrimaryButton title='Login' onPress={() => navigate('/home')} />
      </View>
    </Screen>
  )
}

export default Login
