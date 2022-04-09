import React from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"
import { useNavigate } from "react-router-native"
import { Employee } from "../../types"
import ProfileImage from "../ProfileImage"

const styles = StyleSheet.create({
  employeeCard: {
    borderRadius: 10,
    borderColor: 'grey',
    borderWidth: 2,
    borderStyle: 'solid',
    backgroundColor: 'white',
    alignItems: 'center',
    paddingHorizontal: 40,
    paddingVertical: 20,
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
        <ProfileImage />
        <Text style={{ fontWeight: 'bold', fontSize: 22 }}>{employee.first_name} {employee.last_name}</Text>
        <Text style={{ fontWeight: '400', fontSize: 20 }}>{employee.position}</Text>
      </View>
    </Pressable>
  )
}

export default EmployeeCard
