import React from "react"
import { View, Text, StyleSheet, Pressable } from "react-native"
import { useNavigate } from "react-router-native"
import { Employee } from "../../types"
import ProfileImage from "../ProfileImage"

const styles = StyleSheet.create({
  employeeListItem: {
    flexDirection: 'row',
    borderRadius: 10,
    borderColor: 'grey',
    borderWidth: 1,
    padding: 10,
    marginVertical: 5,
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
        <ProfileImage style={{ width: 75, height: 75, marginRight: 20 }} />
        <View style={{ justifyContent: 'center' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{employee.first_name} {employee.last_name}</Text>
          <Text style={{ fontWeight: '300', fontSize: 20 }}>{employee.position}</Text>
        </View>
      </View>
    </Pressable>
  )
}

export default EmployeeListItem
