import React, { useState } from "react"
import { LabeledInput, PrimaryButton, Screen, SectionHeader } from "../components"
import ToolIcon from '../assets/icons/tool.svg'
import MoneyIcon from '../assets/icons/usd.svg'
import { ScrollView } from "react-native"

const CreateUpdateJob = () => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  return (
    <Screen activeScreen='home'>
      <SectionHeader title='Add a Job' back />
      <ScrollView contentContainerStyle={{ height: '100%', justifyContent: 'space-around', paddingBottom: 180 }}>
        <LabeledInput label='Job name' onChangeText={(value) => setName(value)} icon={<ToolIcon fill='black' width={24} height={24} />} value={name} />
        <LabeledInput label='Price' onChangeText={(value) => setPrice(value)} icon={<MoneyIcon fill='black' width={24} height={24} />} value={price} keyboardType='number-pad' />
        <LabeledInput label='Description' onChangeText={(value) => setDescription(value)} value={description} multiline />
        <PrimaryButton title='Create Job' onPress={() => { }} />
      </ScrollView>
    </Screen>
  )
}

export default CreateUpdateJob
