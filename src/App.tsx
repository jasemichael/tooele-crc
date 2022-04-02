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
import { Login, Onboarding, Home, ResetPassword, Profile, Clients, Employees, Jobs, Purchases, Payments, Notes, Client, Employee, Job, Note, CreateUpdateClient, CreateUpdateEmployee, CreateUpdateJob, CreatePayment, CreatePurchase, CreateUpdateNote } from './screens';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

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
        <Route path='/clients/create' element={<CreateUpdateClient />} />
        <Route path='/employees/create' element={<CreateUpdateEmployee />} />
        <Route path='/jobs/create' element={<CreateUpdateJob />} />
        <Route path='/clients/:clientId/payments/create' element={<CreatePayment />} />
        <Route path='/clients/:clientId/purchases/create' element={<CreatePurchase />} />
        <Route path='/clients/:clientId/notes/create' element={<CreateUpdateNote />} />
        <Route path='/clients/:clientId/edit' element={<CreateUpdateClient />} />
        <Route path='/employees/:employeeId/edit' element={<CreateUpdateEmployee />} />
        <Route path='/jobs/:jobId/edit' element={<CreateUpdateJob />} />
        <Route path='/clients/:clientId/notes/:noteId/edit' element={<CreateUpdateNote />} />
      </Routes>
    </NativeRouter>
  );
};

export default App;
