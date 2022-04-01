import React, { useEffect, useState } from "react"
import { Text, Alert, View, ScrollView, Modal } from "react-native"
import { Carousel, Screen, SectionHeader, Button, PrimaryButton, SuccessButton, SecondaryButton, DangerButton, CreatePurchase, CreatePayment, CreateUpdateNote, PaymentCard, NoteCard, PurchaseCard, CreateUpdateClient } from "../components"
import PersonIcon from '../assets/icons/person.svg'
import { colorScheme } from "../constants"

const Client = () => {
  const [client, setClient] = useState({ _id: '1', first_name: 'Jase', last_name: 'Wilson', balance: 15 })
  const [purchases, setPurchases] = useState([{ _id: '1', item: 'Banana', cost: 2, date: new Date(), authorizer: { _id: '1', first_name: 'Jase', last_name: 'Wilson', position: 'Manager' }, client_id: '1' }])
  const [payments, setPayments] = useState([{ _id: '1', job: { _id: '1', name: 'Sweep', price: 2, description: 'Sweep floor' }, price: 2, date: new Date(), authorizer: { _id: '1', first_name: 'Jase', last_name: 'Wilson', position: 'Manager' }, client_id: '1' }])
  const [notes, setNotes] = useState([{ _id: '1', title: 'Did good', description: 'I love this client', date: new Date(), author: { _id: '1', first_name: 'Jase', last_name: 'Wilson', position: 'Manager' }, client_id: '1' }])
  const [showAddPurchase, setShowAddPurchase] = useState(false)
  const [showAddPayment, setShowAddPayment] = useState(false)
  const [showAddNote, setShowAddNote] = useState(false)
  const [showEditClient, setShowEditClient] = useState(false)

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
      {showAddPurchase || showAddPayment || showAddNote || showEditClient ?
        <Modal
          animationType="slide"
          transparent={false}
          visible={showAddPurchase || showAddPayment || showAddNote || showEditClient}
          onRequestClose={() => { setShowAddPurchase(false); setShowAddPayment(false); setShowAddNote(false); setShowEditClient(false); }}
          presentationStyle='pageSheet'
        >
          {showAddPurchase ? <CreatePurchase /> : null}
          {showAddPayment ? <CreatePayment /> : null}
          {showAddNote ? <CreateUpdateNote /> : null}
          {showEditClient ? <CreateUpdateClient /> : null}
        </Modal> :
        null
      }
      <ScrollView style={{ height: '100%' }} showsVerticalScrollIndicator={false}>
        <View style={{ alignItems: 'center' }}>
          <PersonIcon fill='grey' />
          <Text style={{ textAlign: 'center' }}>{client.first_name} {client.last_name}</Text>
          <Text style={{ textAlign: 'center' }}>${client.balance}</Text>
        </View>
        <SectionHeader title='Purchases' seeAll navigateTo={`/clients/${client._id}/purchases`} />
        <Carousel>
          {purchases.map((purchase, index) => <PurchaseCard key={index} purchase={purchase} />)}
        </Carousel>
        <SectionHeader title='Payments' seeAll navigateTo={`/clients/${client._id}/payments`} />
        <Carousel>
          {payments.map((payment, index) => <PaymentCard key={index} payment={payment} />)}
        </Carousel>
        <SectionHeader title='Notes' seeAll navigateTo={`/clients/${client._id}/notes`} />
        <Carousel>
          {notes.map((note, index) => <NoteCard key={index} note={note} />)}
        </Carousel>
        <View style={{ width: '100%', justifyContent: 'space-between' }}>
          <SectionHeader title='Manage Balance' />
          <SuccessButton onPress={() => setShowAddPurchase(true)} title='Make Purchase' />
          <Button title='Pay Client' onPress={() => setShowAddPayment(true)} color={colorScheme.orange} textColor='white' />
        </View>
        <View style={{ width: '100%', justifyContent: 'space-between' }}>
          <SectionHeader title='Manage Client' />
          <PrimaryButton title='Add Note' onPress={() => setShowAddNote(true)} />
          <SecondaryButton title='Edit Client' onPress={() => setShowEditClient(true)} />
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
