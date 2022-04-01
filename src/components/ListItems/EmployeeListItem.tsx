import React from "react"
import { View, Text, StyleSheet, Pressable } from "react-native"
import { useNavigate } from "react-router-native"
import PersonIcon from '../../assets/icons/person.svg'
import { Employee } from "../../types"

const styles = StyleSheet.create({
  employeeListItem: {
    flexDirection: 'row',
    borderRadius: 10,
    borderColor: 'grey',
    borderWidth: 1,
    padding: 10,
    marginVertical: 5
  },
  personIcon: {
    marginRight: 15
  }
})

interface IProps {
  employee: Employee
}

const EmployeeListItem: React.FC<IProps> = ({ employee }) => {
  const navigate = useNavigate()
  return (
    <Pressable onPress={() => navigate(`/employees/${employee._id}`)}>
      <View style={styles.employeeListItem}>
        <PersonIcon fill='grey' style={styles.personIcon} />
        <View>
          <Text>{employee.first_name} {employee.last_name}</Text>
          <Text>{employee.position}</Text>
        </View>
      </View>
    </Pressable>
  )
}

export default EmployeeListItem
