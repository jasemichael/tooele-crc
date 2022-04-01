import React, { useState } from "react"
import { FlatList, Text } from "react-native"
import { NoteListItem, Screen, SectionHeader } from "../components"

const Notes: React.FC = () => {
  const [notes, setNotes] = useState([{ _id: '1', title: 'Did good', description: 'I love this client', date: new Date(), author: { _id: '1', first_name: 'Jase', last_name: 'Wilson', position: 'Manager' }, client_id: '1' }])
  return (
    <Screen activeScreen='home'>
      <SectionHeader title='Notes' back />
      <FlatList data={notes} renderItem={({ item }) => <NoteListItem note={item} />} keyExtractor={(item, index) => `${index}`} />
    </Screen>
  )
}

export default Notes
