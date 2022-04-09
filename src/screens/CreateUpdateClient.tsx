import React, { useState } from "react"
import { ScrollView, StyleSheet } from "react-native"
import { CameraView, LabeledInput, PrimaryButton, ProfileImage, Screen, SectionHeader } from '../components'
import PhoneIcon from '../assets/icons/phone.svg'
import { useNavigate } from "react-router-native"

const styles = StyleSheet.create({
  createUpdateClient: {
    justifyContent: 'space-evenly',
    height: '110%',
    paddingBottom: 130
  }
})

const CreateUpdateClient = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [image, setImage] = useState()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const navigate = useNavigate()
  return (
    <>
      <Screen activeScreen='home'>
        <SectionHeader title='Add a Client' back />
        <ScrollView contentContainerStyle={styles.createUpdateClient} showsVerticalScrollIndicator={false}>
          <ProfileImage onPress={() => setIsOpen(true)} image={image} style={{ alignSelf: 'center' }} />
          <LabeledInput label='First name' onChangeText={(value) => { setFirstName(value) }} value={firstName} />
          <LabeledInput label='Last name' onChangeText={(value) => { setLastName(value) }} value={lastName} />
          <LabeledInput label='Phone number' onChangeText={(value) => { setPhoneNumber(value) }} value={phoneNumber} icon={<PhoneIcon fill='black' />} keyboardType='number-pad' />
          <PrimaryButton onPress={() => { /*clientId = create client*/; navigate(`/clients/${1}`) }} title='Create Client' />
        </ScrollView>
      </Screen>
      {isOpen ? <CameraView setIsOpen={setIsOpen} setImage={setImage} image={image} /> : null}
    </>
  )
}

export default CreateUpdateClient
