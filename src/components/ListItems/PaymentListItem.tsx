import React from "react"
import { View, Text, StyleSheet, Pressable } from "react-native"
import { useNavigate } from "react-router-native"
import { Payment } from "../../types"

const styles = StyleSheet.create({
  paymentListItem: {
    borderRadius: 10,
    borderColor: 'grey',
    borderWidth: 1,
    padding: 10,
    marginVertical: 5,
    alignItems: 'center'
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  }
})

interface IProps {
  payment: Payment
}

const PaymentListItem: React.FC<IProps> = ({ payment }) => {
  const navigate = useNavigate()
  return (
    <View style={styles.paymentListItem}>
      <View style={styles.top}>
        <Text>{payment.job.name}</Text>
        <Text>{payment.date.toLocaleDateString()}</Text>
        <Text>${payment.job.price}</Text>
      </View>
      <Text>Authorized by {payment.authorizer.first_name} {payment.authorizer.last_name}</Text>
    </View>
  )
}

export default PaymentListItem
