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
    padding: 50,
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
        <Text>{payment.job.name}</Text>
        <Text>${payment.job.price}</Text>
        <Text>Completed {payment.date.toLocaleDateString()}</Text>
        <Text>Authorized by {payment.authorizer.first_name} {payment.authorizer.last_name} </Text>
      </View>
    </Pressable>
  )
}

export default PaymentCard
