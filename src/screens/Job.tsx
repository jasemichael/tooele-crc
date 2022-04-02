import React, { useState } from "react"
import { Text, Alert, View, ScrollView, Modal } from "react-native"
import { useNavigate } from "react-router-native"
import { Screen, SectionHeader, DangerButton, SecondaryButton } from "../components"

const Job = () => {
  const [job, setJob] = useState({ _id: '1', name: 'Sweep', price: 15, description: 'Client must sweep the floor.' })
  const navigate = useNavigate()
  return (
    <Screen activeScreen='home'>
      <SectionHeader back />
      <ScrollView contentContainerStyle={{ justifyContent: 'space-between' }} style={{ height: '100%' }}>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ textAlign: 'center' }}>{job.name}</Text>
          <Text style={{ textAlign: 'center' }}>${job.price}</Text>
        </View>
        <View style={{ width: '100%' }}>
          <SectionHeader title='Description' />
          <Text>{job.description}</Text>
        </View>
        <View style={{ width: '100%', justifyContent: 'space-between', height: '23%' }}>
          <SectionHeader title='Manage Job' />
          <SecondaryButton title='Edit Job' onPress={() => navigate('/jobs/jobId/edit')} />
          <DangerButton title='Delete Job' onPress={() => Alert.alert(
            'Delete Job',
            `Are you sure you want to delete ${job.name}?`,
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

export default Job
