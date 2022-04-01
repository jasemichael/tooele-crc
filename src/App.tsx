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
import { NativeRouter, Routes, Route } from 'react-router-native';
import { LogBox } from 'react-native';
import { Login, Onboarding, Home, ResetPassword, Profile, Clients, Employees, Jobs, Purchases, Payments, Notes, Client, Employee, Job, Note } from './screens';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  LogBox.ignoreAllLogs();//Ignore all log notifications

  return (
    <NativeRouter>
      <Routes>
        <Route path='/' element={<Onboarding />} />
        <Route path='/login' element={<Login />} />
        <Route path='reset-password' element={<ResetPassword />} />
        <Route path='/home' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/clients' element={<Clients />} />
        <Route path='/employees' element={<Employees />} />
        <Route path='/jobs' element={<Jobs />} />
        <Route path='/clients/:clientId/purchases' element={<Purchases />} />
        <Route path='/clients/:clientId/payments' element={<Payments />} />
        <Route path='/clients/:clientId/notes' element={<Notes />} />
        <Route path='/clients/:clientId' element={<Client />} />
        <Route path='/employees/:employeeId' element={<Employee />} />
        <Route path='/jobs/:jobId' element={<Job />} />
        <Route path='/clients/:clientId/notes/:noteId' element={<Note />} />
      </Routes>
    </NativeRouter>
  );
};

export default App;
