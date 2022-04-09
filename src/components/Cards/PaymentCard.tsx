import React from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"
import { useNavigate } from "react-router-native"
import PersonIcon from '../../assets/icons/person.svg'
import { Payment } from "../../types"

const styles = StyleSheet.create({
  paymentCard: {
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
  payment: Payment
}

const PaymentCard: React.FC<IProps> = ({ payment }) => {
  const navigate = useNavigate()
  return (
    <Pressable onPress={() => navigate(``)}>
      <View style={styles.paymentCard}>
        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{payment.job.name}</Text>
        <Text style={{ fontWeight: '500', fontSize: 20 }}>${payment.job.price}</Text>
        <Text style={{ fontSize: 20 }}>Completed {payment.date.toLocaleDateString()}</Text>
        <Text style={{ fontSize: 20 }}>Authorized by {payment.authorizer.first_name} {payment.authorizer.last_name} </Text>
      </View>
    </Pressable>
  )
}

export default PaymentCard
