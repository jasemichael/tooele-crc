import React, { useState } from "react"
import { View } from "react-native"
import { PrimaryButton, Screen, SectionHeader, LabeledInput } from "../components"

const CreateUpdateNote = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  return (
    <Screen activeScreen='home'>
      <SectionHeader title='Add Note' back />
      <View style={{ height: '83%', justifyContent: 'space-between' }}>
        <View style={{ height: '75%', justifyContent: 'space-evenly' }}>
          <LabeledInput label='Title' onChangeText={(value) => setTitle(value)} value={title} />
          <LabeledInput label='Description' onChangeText={(value) => setDescription(value)} value={description} multiline />
        </View>
        <PrimaryButton title='Create Note' onPress={() => { }} />
      </View>
    </Screen>
  )
}

export default CreateUpdateNote
