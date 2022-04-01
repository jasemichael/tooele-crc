import React, { useState } from "react"
import { FlatList } from "react-native"
import { EmployeeListItem, Screen, SectionHeader, Navigation } from "../components"

const Employees: React.FC = () => {
  const [employees, setEmployees] = useState([{ _id: '1', first_name: "Jase", last_name: "Wilson", position: 'Manager' }, { _id: '1', first_name: "Jase", last_name: "Wilson", position: 'Manager' }])
  return (
    <Screen activeScreen='home'>
      <SectionHeader title="Employees" back />
      <FlatList data={employees} renderItem={({ item }) => <EmployeeListItem employee={item} />} keyExtractor={(item, index) => `${index}`} />
    </Screen>
  )
}

export default Employees
