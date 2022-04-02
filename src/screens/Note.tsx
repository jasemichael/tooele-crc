import React, { useState } from "react"
import { Text, View, Alert } from "react-native"
import { useNavigate } from "react-router-native"
import { DangerButton, Screen, SectionHeader, SecondaryButton } from "../components"

const Note: React.FC = () => {
  const [note, setNote] = useState({ title: 'Test', date: new Date(), author: { first_name: 'Jase', last_name: 'Wilson' }, description: 'TEST' })
  const navigate = useNavigate()
  return (
    <Screen activeScreen='home'>
      <SectionHeader back />
      <View>
        <Text>{note.title}</Text>
        <Text>Posted on {note.date.toLocaleDateString()}</Text>
        <Text>Created by {note.author.first_name} {note.author.last_name}</Text>
      </View>
      <SectionHeader title='Description' />
      <Text>{note.description}</Text>
      <SectionHeader title='Manage Note' />
      <SecondaryButton title='Edit Note' onPress={() => navigate('/clients/clientId/notes/noteId/edit')} />
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
