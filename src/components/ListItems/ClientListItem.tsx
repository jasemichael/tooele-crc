import React from "react"
import { View, Text, StyleSheet, Pressable } from "react-native"
import { useNavigate } from "react-router-native"
import PersonIcon from '../../assets/icons/person.svg'
import { Client } from "../../types"

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
        <PersonIcon fill='grey' style={styles.personIcon} />
        <View>
          <Text>{client.first_name} {client.last_name}</Text>
          <Text>${client.balance}</Text>
        </View>
      </View>
    </Pressable>
  )
}

export default ClientListItem
