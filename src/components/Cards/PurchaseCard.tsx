import React from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"
import { useNavigate } from "react-router-native"
import { Purchase } from "../../types"

const styles = StyleSheet.create({
  purchaseCard: {
    borderRadius: 10,
    borderColor: 'grey',
    borderWidth: 2,
    borderStyle: 'solid',
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 20,
    marginRight: 10
  }
})

interface IProps {
  purchase: Purchase
}

const PurchaseCard: React.FC<IProps> = ({ purchase }) => {
  const navigate = useNavigate()
  return (
    <Pressable onPress={() => navigate(``)}>
      <View style={styles.purchaseCard}>
        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{purchase.item}</Text>
        <Text style={{ fontWeight: '500', fontSize: 20 }}>${purchase.cost}</Text>
        <Text style={{ fontSize: 20 }}>Purchased {purchase.date.toLocaleDateString()}</Text>
        <Text style={{ fontSize: 20 }}>Authorized by {purchase.authorizer.first_name} {purchase.authorizer.last_name}</Text>
      </View>
    </Pressable>
  )
}

export default PurchaseCard
