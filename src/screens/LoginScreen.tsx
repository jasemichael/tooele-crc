import React, {useState} from "react";
import { View, Text, StyleSheet, TextInput, Image, Button } from "react-native";
import loginUser from "../apis/loginUser";
import { globalStyles, colorScheme } from '../constants'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Navigate } from "react-router-native";

const styles = StyleSheet.create({
    form: {
        width: "80%",
        justifyContent: "space-between",
        height: "20%"
    },
    logo: {
        width: 200,
        height: 200,
    },
    content: {
        width: "100%",
        height: "100%",
        marginTop: 150,
        alignItems: "center"
    }
})

const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const handleLogin = async (email: string, password: string) => {
        try {
            const {data} = await loginUser(email, password)
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
    return (
        isLoggedIn ?
        <Navigate to="/" /> :
        <View style={styles.content}>
            <Text style={[globalStyles.title, {color: colorScheme.orange}]}>
                Login
            </Text>
            <Image 
                source={{
                    uri: "https://i0.wp.com/tooelecrc.org/wp-content/uploads/2020/07/Icon-TCRC-w-cfp-2-1.png?resize=1024%2C1024&ssl=1"
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
                </View>
                <View>
                    <Text>Password</Text>
                    <TextInput
                        autoCapitalize="none"
                        autoComplete="password"
                        autoCorrect={false}
                        value={password}
                        secureTextEntry={true} 
                        style={globalStyles.textInput} 
                        onChangeText={newPassword => setPassword(newPassword)}> 
                    </TextInput>
                </View>
                <View>
                    <Button 
                        title="Login" 
                        color={colorScheme.blue} 
                        onPress={() => handleLogin(email, password)}>
                    </Button>
                </View>
            </View>
        </View>
    )
}

export default LoginScreen