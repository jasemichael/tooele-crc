import React, { useState } from "react"
import { Text, View, Modal } from "react-native"
import { PrimaryButton, ProfileImage, Screen, SectionHeader } from "../components"
import SecondaryButton from "../components/Buttons/SecondaryButton"
import { useNavigate } from "react-router-native"

const Employee = () => {
  const [employee, setEmployee] = useState({ firstName: 'Jase', lastName: 'Wilson', position: 'Manager' })
  const navigate = useNavigate()
  return (
    <Screen activeScreen='profile'>
      <SectionHeader back />
      <View style={{ height: '85%', justifyContent: 'space-between' }}>
        <View style={{ alignItems: 'center', justifyContent: 'space-evenly' }}>
          <ProfileImage style={{ width: 225, height: 225 }} />
          <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 28 }}>{employee.firstName} {employee.lastName}</Text>
          <Text style={{ textAlign: 'center', fontWeight: '400', fontSize: 24 }}>{employee.position}</Text>
        </View>
        <View style={{ width: '100%', justifyContent: 'space-between', height: '22%' }}>
          <SecondaryButton title='Edit Profile' onPress={() => navigate('/employees/employeeId/edit')} />
          <PrimaryButton title='Logout' onPress={() => navigate('/login')} />
        </View>
      </View>
    </Screen >
  )
}

export default Employee
