import React, { useState } from "react"
import { View } from "react-native"
import DropDownPicker from 'react-native-dropdown-picker'
import { PrimaryButton, Screen, SectionHeader } from "../components"

import ToolIcon from '../assets/icons/tool.svg'
<ToolIcon fill='black' width={24} height={24} />

const CreatePayment = () => {
  const [dropDownIsOpen, setDropDownIsOpen] = useState(false)
  const [jobs, setJobs] = useState([])
  const [job, setJob] = useState('')
  return (
    <Screen activeScreen='home'>
      <SectionHeader title='Pay Client' back />
      <View style={{ height: '82%', justifyContent: 'space-between' }}>
        <DropDownPicker
          open={dropDownIsOpen}
          value={job}
          items={jobs}
          setOpen={setDropDownIsOpen}
          setValue={setJob}
          setItems={setJobs}
        />
        <PrimaryButton title='Pay Client' onPress={() => { }} />
      </View>
    </Screen>
  )
}

export default CreatePayment
