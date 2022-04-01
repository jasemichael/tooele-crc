import React from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"
import { useNavigate } from "react-router-native"
import PersonIcon from '../../assets/icons/person.svg'
import { Employee } from "../../types"

const styles = StyleSheet.create({
  employeeCard: {
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
  employee: Employee
}

const EmployeeCard: React.FC<IProps> = ({ employee }) => {
  const navigate = useNavigate()
  return (
    <Pressable onPress={() => navigate(`/employees/${employee._id}`)}>
      <View style={styles.employeeCard}>
        <PersonIcon fill="grey" />
        <Text>{employee.first_name} {employee.last_name}</Text>
        <Text>{employee.position}</Text>
      </View>
    </Pressable>
  )
}

export default EmployeeCard
