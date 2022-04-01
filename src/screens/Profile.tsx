import React, { useState } from "react"
import { Text, View, Modal } from "react-native"
import { CreateUpdateEmployee, PrimaryButton, Screen, SectionHeader } from "../components"
import SecondaryButton from "../components/Buttons/SecondaryButton"
import PersonIcon from '../assets/icons/person.svg'
import { useNavigate } from "react-router-native"

const Employee = () => {
  const [employee, setEmployee] = useState({ firstName: 'Jase', lastName: 'Wilson', position: 'Manager' })
  const [showEditProfile, setShowEditProfile] = useState(false)
  const navigate = useNavigate()
  return (
    <Screen activeScreen='profile'>
      <SectionHeader back />
      {showEditProfile ?
        <Modal
          animationType="slide"
          transparent={false}
          visible={showEditProfile}
          onRequestClose={() => { setShowEditProfile(false); }}
          presentationStyle='pageSheet'
        >
          {showEditProfile ? <CreateUpdateEmployee /> : null}
        </Modal> :
        null
      }
      <View style={{ alignItems: 'center', justifyContent: 'space-evenly' }}>
        <PersonIcon fill='grey' />
        <Text style={{ textAlign: 'center' }}>{employee.firstName} {employee.lastName}</Text>
        <Text style={{ textAlign: 'center' }}>{employee.position}</Text>
      </View>
      <View style={{ width: '100%', justifyContent: 'space-between', height: '15%' }}>
        <SecondaryButton title='Edit Profile' onPress={() => setShowEditProfile(true)} />
        <PrimaryButton title='Logout' onPress={() => navigate('/login')} />
      </View>
    </Screen >
  )
}

export default Employee
