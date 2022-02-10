/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View
} from 'react-native';
import { NativeRouter, Routes, Route, Link } from 'react-router-native';
import { LoginScreen } from './screens';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    return (
    	<SafeAreaView>
	    <NativeRouter>
		<Routes>
		    <Route path="/" element={<Link to="login"><Text>Login Page</Text></Link>} />
                    <Route path="/login" element={<LoginScreen />} />
                    <Route path="/clients" element={null} />
                    <Route path="/jobs" element={null} />
                    <Route path="/managers" element={null} />
                </Routes>
            </NativeRouter>
        </SafeAreaView>
  );
};

export default App;
