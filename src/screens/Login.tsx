import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, Image, Pressable, Alert } from "react-native";
import loginUser from "../apis/loginUser";
import { globalStyles, colorScheme } from '../constants'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Navigate, useNavigate } from "react-router-native";
import Logo from '../assets/images/tooele-crc.png'
import EmailIcon from '../assets/icons/mail.svg'
import KeyIcon from '../assets/icons/key.svg'
import EyeOpen from '../assets/icons/eye-open.svg'
import EyeClosed from '../assets/icons/eye-closed.svg'
import { PrimaryButton, Screen } from "../components";

const LogoURI = Image.resolveAssetSource(Logo).uri;

const styles = StyleSheet.create({
  screen: {
    marginHorizontal: 40
  },
  form: {
    justifyContent: "space-between",
    flex: 0.6
  },
  logo: {
    width: 300,
    height: 300,
  },
  resetPassword: {
    color: 'blue'
  },
  inputIcon: {
    position: 'absolute',
    top: 22.5,
    left: 10
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    bottom: 5
  }
})

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
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
    <Screen style={styles.screen}>
      <Image
        source={{
          uri: LogoURI
        }}
        style={styles.logo}
      />
      <View style={styles.form}>
        <View>
          <Text>Email</Text>
          <TextInput
            autoCapitalize="none"
            autoComplete="email"
            autoCorrect={false}
            keyboardType="email-address"
            value={email}
            style={globalStyles.textInput}
            onChangeText={newEmail => setEmail(newEmail)}>
          </TextInput>
          <EmailIcon fill="black" style={styles.inputIcon} width={24} height={24} />
        </View>
        <View>
          <Text>Password</Text>
          <TextInput
            autoCapitalize="none"
            autoComplete="password"
            autoCorrect={false}
            value={password}
            secureTextEntry={!showPassword}
            style={globalStyles.textInput}
            onChangeText={newPassword => setPassword(newPassword)}>
          </TextInput>
          <KeyIcon fill="black" style={styles.inputIcon} width={24} height={24} />
          <Pressable onPress={() => setShowPassword(!showPassword)}>
            {
              showPassword ?
                <EyeOpen fill="black" style={styles.eyeIcon} width={24} height={24} /> :
                <EyeClosed fill="black" style={styles.eyeIcon} width={24} height={24} />
            }
          </Pressable>
        </View>
        <Pressable onPress={() => navigate('/reset-password')}>
          <Text style={styles.resetPassword}>Forgot password?</Text>
        </Pressable>
        <Text>
          An account should have been created for you.
          If you don’t have an account, please speak to your supervisor to create one.
        </Text>
        <View>
          <PrimaryButton title='Login' onPress={() => Alert.alert('LOGIN')} />
        </View>
      </View>
    </Screen>
  )
}

export default Login
