import React, { useState } from "react"
import { FlatList } from "react-native"
import { PaymentListItem, Screen, SectionHeader } from "../components"

const Payments: React.FC = () => {
  const [payments, setPayments] = useState([{ _id: '1', job: { _id: '1', name: 'Sweep', price: 2, description: 'Sweep floor' }, price: 2, date: new Date(), authorizer: { _id: '1', first_name: 'Jase', last_name: 'Wilson', position: 'Manager' }, client_id: '1' }])
  return (
    <Screen activeScreen='home'>
      <SectionHeader title='Payments' back />
      <FlatList data={payments} renderItem={({ item }) => <PaymentListItem payment={item} />} keyExtractor={(item, index) => `${index}`} />
    </Screen>
  )
}

export default Payments
