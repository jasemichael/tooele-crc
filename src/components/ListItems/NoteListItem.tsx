import React from "react"
import { View, Text, StyleSheet, Pressable } from "react-native"
import { useNavigate } from "react-router-native"
import { Note } from "../../types"

const styles = StyleSheet.create({
  noteListItem: {
    borderRadius: 10,
    borderColor: 'grey',
    borderWidth: 1,
    padding: 10,
    marginVertical: 5
  }
})

interface IProps {
  note: Note
}

const NoteListItem: React.FC<IProps> = ({ note }) => {
  const navigate = useNavigate()
  return (
    <Pressable onPress={() => { navigate(`/clients/${note.client_id}/notes/${note._id}`) }}>
      <View style={styles.noteListItem}>
        <Text>{note.title}</Text>
        <Text>{note.date.toLocaleDateString()}</Text>
      </View>
    </Pressable>
  )
}

export default NoteListItem
