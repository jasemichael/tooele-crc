import React, { useState } from "react"
import { View } from "react-native"
import { LabeledInput, PrimaryButton, Screen, SectionHeader } from "../components"
import ShoppingIcon from '../assets/icons/shopping.svg'
import MoneyIcon from '../assets/icons/usd.svg'

const CreatePurchase = () => {
  const [item, setItem] = useState('')
  const [price, setPrice] = useState('')
  return (
    <Screen activeScreen='home'>
      <SectionHeader title='Make a Purchase' back />
      <View style={{ height: '82%', justifyContent: 'space-between' }}>
        <View style={{ height: '35%', justifyContent: 'space-between' }}>
          <LabeledInput label='Item to purchase' onChangeText={(value) => setItem(value)} value={item} icon={<ShoppingIcon fill='black' width={24} height={24} />} />
          <LabeledInput label='Price' onChangeText={(value) => setPrice(value)} value={price} icon={<MoneyIcon fill='black' width={24} height={24} />} keyboardType='number-pad' />
        </View>
        <PrimaryButton title='Submit Purchase' onPress={() => { }} />
      </View>
    </Screen>
  )
}

export default CreatePurchase
