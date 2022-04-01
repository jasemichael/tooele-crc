import React, { useState } from "react"
import { FlatList } from "react-native"
import { PurchaseListItem, Screen, SectionHeader } from "../components"

const Purchases: React.FC = () => {
  const [purchases, setPurchases] = useState([{ _id: '1', item: 'Banana', cost: 2, date: new Date(), authorizer: { _id: '1', first_name: 'Jase', last_name: 'Wilson', position: 'Manager' }, client_id: '1' }])
  return (
    <Screen activeScreen='home'>
      <SectionHeader title='Purchases' back />
      <FlatList data={purchases} renderItem={({ item }) => <PurchaseListItem purchase={item} />} keyExtractor={(item, index) => `${index}`} />
    </Screen>
  )
}

export default Purchases
