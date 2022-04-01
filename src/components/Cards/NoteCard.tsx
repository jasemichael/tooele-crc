import React from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"
import { useNavigate } from "react-router-native"
import PersonIcon from '../../assets/icons/person.svg'
import { Note } from "../../types"

const styles = StyleSheet.create({
  noteCard: {
    borderRadius: 10,
    borderColor: 'grey',
    borderWidth: 2,
    borderStyle: 'solid',
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 50,
    marginRight: 10
  }
})

interface IProps {
  note: Note
}

const NoteCard: React.FC<IProps> = ({ note }) => {
  const navigate = useNavigate()
  return (
    <Pressable onPress={() => navigate(`/clients/${note.client_id}/notes/${note._id}`)}>
      <View style={styles.noteCard}>
        <Text>{note.title}</Text>
        <Text>{note.description}</Text>
        <Text>Recorded {note.date.toLocaleDateString()}</Text>
        <Text>Recorded by {note.author.first_name} {note.author.last_name}</Text>
      </View>
    </Pressable>
  )
}

export default NoteCard
