import React, { useState } from "react"
import { Text, Alert, View, ScrollView, Modal } from "react-native"
import { CreateUpdateEmployee, Screen, SectionHeader, SecondaryButton, DangerButton } from "../components"
import PersonIcon from '../assets/icons/person.svg'

const Employee = () => {
  const [employee, setEmployee] = useState({ _id: '1', first_name: 'Jase', last_name: 'Wilson', position: 'Manager' })
  const [showEditEmployee, setShowEditEmployee] = useState(false)
  return (
    <Screen activeScreen='home'>
      <SectionHeader back />
      {showEditEmployee ?
        <Modal
          animationType="slide"
          transparent={false}
          visible={showEditEmployee}
          onRequestClose={() => { setShowEditEmployee(false); }}
          presentationStyle='pageSheet'
        >
          {showEditEmployee ? <CreateUpdateEmployee /> : null}
        </Modal> :
        null
      }
      <ScrollView contentContainerStyle={{ justifyContent: 'space-evenly' }}>
        <View style={{ alignItems: 'center' }}>
          <PersonIcon fill='grey' />
          <Text style={{ textAlign: 'center' }}>{employee.first_name} {employee.last_name}</Text>
          <Text style={{ textAlign: 'center' }}>{employee.position}</Text>
        </View>
        <View style={{ width: '100%', justifyContent: 'space-between', height: '23%' }}>
          <SectionHeader title='Manage Employee' />
          <SecondaryButton title='Edit Employee' onPress={() => setShowEditEmployee(true)} />
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
