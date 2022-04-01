import React, { useState } from "react"
import { Text, View, Alert, Modal } from "react-native"
import { DangerButton, Screen, SectionHeader, SecondaryButton, CreateUpdateNote } from "../components"

const Note: React.FC = () => {
  const [note, setNote] = useState({ title: 'Test', date: new Date(), author: { first_name: 'Jase', last_name: 'Wilson' }, description: 'TEST' })
  const [showEditNote, setShowEditNote] = useState(false)
  return (
    <Screen activeScreen='home'>
      <SectionHeader back />
      {showEditNote ?
        <Modal
          animationType="slide"
          transparent={false}
          visible={showEditNote}
          onRequestClose={() => { setShowEditNote(false); }}
          presentationStyle='pageSheet'
        >
          {showEditNote ? <CreateUpdateNote /> : null}
        </Modal> :
        null
      }
      <View>
        <Text>{note.title}</Text>
        <Text>Posted on {note.date.toLocaleDateString()}</Text>
        <Text>Created by {note.author.first_name} {note.author.last_name}</Text>
      </View>
      <SectionHeader title='Description' />
      <Text>{note.description}</Text>
      <SectionHeader title='Manage Note' />
      <SecondaryButton title='Edit Note' onPress={() => setShowEditNote(true)} />
      <DangerButton title='Delete Note' onPress={() => Alert.alert(
        'Delete Note',
        `Are you sure you want to delete ${note.title}?`,
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
    </Screen>
  )
}

export default Note
