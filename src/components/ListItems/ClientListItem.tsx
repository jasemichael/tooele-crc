import React from "react"
import { View, Text, StyleSheet, Pressable } from "react-native"
import { useNavigate } from "react-router-native"
import PersonIcon from '../../assets/icons/person.svg'
import { Client } from "../../types"
import ProfileImage from "../ProfileImage"

const styles = StyleSheet.create({
  clientListItem: {
    flexDirection: 'row',
    borderRadius: 10,
    borderColor: 'grey',
    borderWidth: 1,
    padding: 10,
    marginVertical: 5
  },
  personIcon: {
    marginRight: 15
  }
})

interface IProps {
  client: Client
}

const ClientListItem: React.FC<IProps> = ({ client }) => {
  const navigate = useNavigate()
  return (
    <Pressable onPress={() => navigate(`/clients/${client._id}`)}>
      <View style={styles.clientListItem}>
        <ProfileImage style={{ width: 75, height: 75, marginRight: 20 }} />
        <View style={{ alignSelf: 'center' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{client.first_name} {client.last_name}</Text>
          <Text style={{ fontWeight: '300', fontSize: 20 }}>${client.balance}</Text>
        </View>
      </View>
    </Pressable>
  )
}

export default ClientListItem
