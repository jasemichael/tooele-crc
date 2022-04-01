import React, { useState } from "react"
import { FlatList, Text } from "react-native"
import { ClientListItem, Navigation, Screen, SectionHeader } from "../components"
import Wrapper from "../components/Wrapper"

const Clients: React.FC = () => {
  const [clients, setClients] = useState([{ _id: '1', first_name: "Jase", last_name: "Wilson", balance: 15 }, { _id: '1', first_name: "Jase", last_name: "Wilson", balance: 15 }])
  return (
    <Screen activeScreen='home'>
      <SectionHeader title="Clients" back />
      <FlatList data={clients} renderItem={({ item }) => <ClientListItem client={item} />} keyExtractor={(item, index) => `${index}`} />
    </Screen>
  )
}

export default Clients
