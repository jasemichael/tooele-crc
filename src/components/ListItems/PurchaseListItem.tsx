import React from "react"
import { View, Text, StyleSheet, Pressable } from "react-native"
import { useNavigate } from "react-router-native"
import { Purchase } from "../../types"

const styles = StyleSheet.create({
  purchaseListItem: {
    borderRadius: 10,
    borderColor: 'grey',
    borderWidth: 1,
    padding: 10,
    marginVertical: 5,
    alignItems: 'center',
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  }
})

interface IProps {
  purchase: Purchase
}

const PurchaseListItem: React.FC<IProps> = ({ purchase }) => {
  const navigate = useNavigate()
  return (
    <View style={styles.purchaseListItem}>
      <View style={styles.top}>
        <Text>{purchase.item}</Text>
        <Text>{purchase.date.toLocaleDateString()}</Text>
        <Text>${purchase.cost}</Text>
      </View>
      <Text>Authorized by {purchase.authorizer.first_name} {purchase.authorizer.last_name}</Text>
    </View>
  )
}

export default PurchaseListItem
