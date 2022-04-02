import React, { useEffect, useState } from "react"
import { ScrollView, StyleSheet, View } from "react-native"
import { Carousel, ClientCard, EmployeeCard, JobCard, Screen, SectionHeader } from "../components"

const styles = StyleSheet.create({
  content: {
    paddingBottom: 100
  },
  section: {
    marginBottom: 20
  },
})

const Home = () => {
  const [clients, setClients] = useState([{ _id: "1", first_name: 'Jase', last_name: 'Wilson', balance: 10 }, { _id: "2", first_name: 'Jase', last_name: 'Wilson', balance: 10 }])
  const [employees, setEmployees] = useState([{ _id: "1", first_name: 'Jase', last_name: 'Wilson', position: 'Manager' }, { _id: "2", first_name: 'Jase', last_name: 'Wilson', position: 'Manager' }])
  const [jobs, setJobs] = useState([{ _id: "1", name: 'Sweep the floor', price: 15, description: 'Client must sweep the floor.' }, { _id: "1", name: 'Sweep the floor', price: 15, description: 'Client must sweep the floor.' }])

  useEffect(() => {

  }, [clients])

  useEffect(() => {
  }, [employees])

  useEffect(() => {
  }, [jobs])

  return (
    <Screen activeScreen='home'>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <SectionHeader title='Clients' navigateTo='/clients' seeAll />
          <Carousel>
            {clients.map((client, index) => <ClientCard key={index} client={client} />)}
          </Carousel>
        </View>
        <View style={styles.section}>
          <SectionHeader title='Employees' navigateTo='/employees' seeAll />
          <Carousel>
            {employees.map((employee, index) => <EmployeeCard key={index} employee={employee} />)}
          </Carousel>
        </View>
        <View style={styles.section}>
          <SectionHeader title='Jobs' navigateTo='/jobs' seeAll />
          <Carousel>
            {jobs.map((job, index) => <JobCard key={index} job={job} />)}
          </Carousel>
        </View>
      </ScrollView>
    </Screen>
  )
}

export default Home
