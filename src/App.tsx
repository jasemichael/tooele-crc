/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { NativeRouter, Routes, Route, Link } from 'react-router-native';
import { Login, Onboarding, Home, ResetPassword } from './screens';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <SafeAreaView>
      <NativeRouter>
        <Routes>
          <Route path='/' element={<Onboarding />} />
          <Route path='/login' element={<Login />} />
          <Route path='reset-password' element={<ResetPassword />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </NativeRouter>
    </SafeAreaView>
  );
};

export default App;
