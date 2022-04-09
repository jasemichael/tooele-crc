import React from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"
import { useNavigate } from "react-router-native"
import PersonIcon from '../../assets/icons/person.svg'
import { colorScheme } from "../../constants"
import { Client } from "../../types"
import ProfileImage from "../ProfileImage"

const styles = StyleSheet.create({
  clientCard: {
    borderRadius: 10,
    borderColor: 'grey',
    borderWidth: 2,
    borderStyle: 'solid',
    backgroundColor: 'white',
    alignItems: 'center',
    paddingHorizontal: 40,
    paddingVertical: 20,
    marginRight: 10,
  }
})

interface IProps {
  client: Client
}

const ClientCard: React.FC<IProps> = ({ client }) => {
  const navigate = useNavigate()
  return (
    <Pressable onPress={() => navigate(`/clients/${client._id}`)}>
      <View style={styles.clientCard}>
        <ProfileImage />
        <Text style={{ fontWeight: 'bold', fontSize: 22 }}>{client.first_name} {client.last_name}</Text>
        <Text style={{ fontWeight: '400', fontSize: 20 }}>${client.balance}</Text>
      </View>
    </Pressable>
  )
}

export default ClientCard
