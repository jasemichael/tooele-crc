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
    padding: 20,
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
        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{note.title}</Text>
        <Text style={{ fontWeight: '400', fontSize: 20 }}>{note.description}</Text>
        <Text style={{ fontSize: 20 }}>Recorded {note.date.toLocaleDateString()}</Text>
        <Text style={{ fontSize: 20 }}>Recorded by {note.author.first_name} {note.author.last_name}</Text>
      </View>
    </Pressable>
  )
}

export default NoteCard
