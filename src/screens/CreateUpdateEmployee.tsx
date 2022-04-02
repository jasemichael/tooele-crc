import React, { useState } from "react"
import { ScrollView, StyleSheet, Text, View } from "react-native"
import DropDownPicker from 'react-native-dropdown-picker'
import { CameraView, LabeledInput, PrimaryButton, ProfileImage, Screen, SectionHeader } from "../components"

const styles = StyleSheet.create({
  createUpdateEmployee: {
    justifyContent: 'space-around',
    height: '120%',
    paddingBottom: 110
  }
})

const CreateUpdateEmployee = () => {
  const [cameraIsOpen, setCameraIsOpen] = useState(false)
  const [image, setImage] = useState()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [position, setPosition] = useState('')
  const [dropDownIsOpen, setDropDownIsOpen] = useState(false)
  const [role, setRole] = useState('');
  const [items, setItems] = useState([
    { label: 'Admin', value: 'admin' },
    { label: 'Employee', value: 'employee' }
  ]);
  return (
    <>
      <Screen activeScreen='home'>
        <ScrollView contentContainerStyle={styles.createUpdateEmployee} showsVerticalScrollIndicator={false}>
          <SectionHeader title='Add a Employee' back />
          <ProfileImage onPress={() => setCameraIsOpen(true)} image={image} style={{ alignSelf: 'center' }} />
          <LabeledInput label='First name' onChangeText={(value) => setFirstName(value)} value={firstName} />
          <LabeledInput label='Last name' onChangeText={(value) => setLastName(value)} value={lastName} />
          <LabeledInput label='Position' onChangeText={(value) => setPosition(value)} value={position} />
          <View>
            <Text>Role</Text>
            <DropDownPicker
              open={dropDownIsOpen}
              value={role}
              items={items}
              setOpen={setDropDownIsOpen}
              setValue={setRole}
              setItems={setItems}
            />
          </View>
          <PrimaryButton title='Create Employee' onPress={() => { }} />
        </ScrollView>
      </Screen>
      {cameraIsOpen ? <CameraView setIsOpen={setCameraIsOpen} setImage={setImage} image={image} /> : null}
    </>
  )
}

export default CreateUpdateEmployee
