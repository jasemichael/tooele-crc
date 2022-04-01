import React, { useState } from "react"
import { Text, Alert, View, ScrollView, Modal } from "react-native"
import { CreateUpdateJob, Screen, SectionHeader, DangerButton, SecondaryButton } from "../components"

const Job = () => {
  const [job, setJob] = useState({ _id: '1', name: 'Sweep', price: 15, description: 'Client must sweep the floor.' })
  const [showEditJob, setShowEditJob] = useState(false)
  return (
    <Screen activeScreen='home'>
      <SectionHeader back />
      {showEditJob ?
        <Modal
          animationType="slide"
          transparent={false}
          visible={showEditJob}
          onRequestClose={() => { setShowEditJob(false); }}
          presentationStyle='pageSheet'
        >
          {showEditJob ? <CreateUpdateJob /> : null}
        </Modal> :
        null
      }
      <ScrollView contentContainerStyle={{ justifyContent: 'space-between' }}>
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
          <SecondaryButton title='Edit Job' onPress={() => setShowEditJob(true)} />
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
