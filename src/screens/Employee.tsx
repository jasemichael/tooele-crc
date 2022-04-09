import React, { useState } from "react"
import { Text, Alert, View, ScrollView, Modal } from "react-native"
import { Screen, SectionHeader, SecondaryButton, DangerButton, ProfileImage } from "../components"
import PersonIcon from '../assets/icons/person.svg'
import { useNavigate } from "react-router-native"

const Employee = () => {
  const [employee, setEmployee] = useState({ _id: '1', first_name: 'Jase', last_name: 'Wilson', position: 'Manager' })
  const navigate = useNavigate()
  return (
    <Screen activeScreen='home'>
      <SectionHeader back />
      <ScrollView contentContainerStyle={{ justifyContent: 'space-between', height: '90%', paddingBottom: 20 }}>
        <View style={{ alignItems: 'center' }}>
          <ProfileImage style={{ width: 225, height: 225 }} />
          <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 28 }}>{employee.first_name} {employee.last_name}</Text>
          <Text style={{ textAlign: 'center', fontWeight: '400', fontSize: 24 }}>{employee.position}</Text>
        </View>
        <View style={{ width: '100%', justifyContent: 'space-between', height: '32%' }}>
          <SectionHeader title='Manage Employee' />
          <SecondaryButton title='Edit Employee' onPress={() => navigate('/employees/employeeId/edit')} />
          <DangerButton title='Delete Employee' onPress={() => Alert.alert(
            'Delete Employee',
            `Are you sure you want to delete ${employee.first_name} ${employee.last_name}?`,
            [
              {
                text: "Cancel",
                style: 'cancel'
              },
              {
                text: "Delete",
                style: 'destructive',
                onPress: () => {

                },
              },
            ])} />
        </View>
      </ScrollView>
    </Screen >
  )
}

export default Employee
