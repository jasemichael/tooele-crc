import React, { useEffect, useState } from "react"
import { Text, Alert, View, ScrollView } from "react-native"
import { Carousel, Screen, SectionHeader, Button, PrimaryButton, SuccessButton, SecondaryButton, DangerButton, PaymentCard, NoteCard, PurchaseCard, ProfileImage } from "../components"
import { colorScheme } from "../constants"
import { useNavigate } from "react-router-native"

const Client = () => {
  const navigate = useNavigate()
  const [client, setClient] = useState({ _id: '1', first_name: 'Jase', last_name: 'Wilson', balance: 15 })
  const [purchases, setPurchases] = useState([{ _id: '1', item: 'Banana', cost: 2, date: new Date(), authorizer: { _id: '1', first_name: 'Jase', last_name: 'Wilson', position: 'Manager' }, client_id: '1' }])
  const [payments, setPayments] = useState([{ _id: '1', job: { _id: '1', name: 'Sweep', price: 2, description: 'Sweep floor' }, price: 2, date: new Date(), authorizer: { _id: '1', first_name: 'Jase', last_name: 'Wilson', position: 'Manager' }, client_id: '1' }])
  const [notes, setNotes] = useState([{ _id: '1', title: 'Did good', description: 'I love this client', date: new Date(), author: { _id: '1', first_name: 'Jase', last_name: 'Wilson', position: 'Manager' }, client_id: '1' }])

  useEffect(() => {

  })

  useEffect(() => {

  })

  useEffect(() => {

  })

  useEffect(() => {

  })
  return (
    <Screen activeScreen='home'>
      <SectionHeader back />
      <ScrollView contentContainerStyle={{ paddingBottom: 180, justifyContent: 'space-between' }} showsVerticalScrollIndicator={false}>
        <View style={{ alignItems: 'center' }}>
          <ProfileImage style={{ width: 225, height: 225 }} />
          <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 28 }}>{client.first_name} {client.last_name}</Text>
          <Text style={{ textAlign: 'center', fontWeight: '400', fontSize: 24 }}>${client.balance}</Text>
        </View>
        <View style={{ marginBottom: 20 }}>
          <SectionHeader title='Purchases' seeAll navigateTo={`/clients/${client._id}/purchases`} />
          <Carousel>
            {purchases.map((purchase, index) => <PurchaseCard key={index} purchase={purchase} />)}
          </Carousel>
        </View>
        <View style={{ marginBottom: 20 }}>
          <SectionHeader title='Payments' seeAll navigateTo={`/clients/${client._id}/payments`} />
          <Carousel>
            {payments.map((payment, index) => <PaymentCard key={index} payment={payment} />)}
          </Carousel>
        </View>
        <View style={{ marginBottom: 20 }}>
          <SectionHeader title='Notes' seeAll navigateTo={`/clients/${client._id}/notes`} />
          <Carousel>
            {notes.map((note, index) => <NoteCard key={index} note={note} />)}
          </Carousel>
        </View>
        <View style={{ justifyContent: 'space-between', height: '12%', marginBottom: 20 }}>
          <SectionHeader title='Manage Balance' />
          <SuccessButton onPress={() => navigate('/clients/clientId/purchases/create')} title='Make Purchase' />
          <Button title='Pay Client' onPress={() => navigate('/clients/clientId/payments/create')} color={colorScheme.orange} textColor='white' />
        </View>
        <View style={{ justifyContent: 'space-between', height: '16%', marginBottom: 20 }}>
          <SectionHeader title='Manage Client' />
          <PrimaryButton title='Add Note' onPress={() => navigate('/clients/clientId/notes/create')} />
          <SecondaryButton title='Edit Client' onPress={() => navigate('/clients/clientId/edit')} />
          <DangerButton title='Delete Client'
            onPress={() => Alert.alert(
              'Delete Client',
              `Are you sure you want to delete ${client.first_name} ${client.last_name}?`,
              [
                {
                  text: "Cancel",
                  style: 'cancel'
                },
                {
                  text: "Delete",
                  style: 'destructive',
                  onPress: () => {

                  },
                },
              ])}
          />
        </View>
      </ScrollView>
    </Screen >
  )
}

export default Client
