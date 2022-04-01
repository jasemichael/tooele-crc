import React, { useState } from "react"
import { FlatList, Text } from "react-native"
import { JobListItem, Navigation, Screen, SectionHeader } from "../components"

const Jobs: React.FC = () => {
  const [jobs, setJobs] = useState([{ _id: '1', name: 'Sweep', price: 15, description: 'Sweep the floor' }, { _id: '1', name: 'Sweep', price: 15, description: 'Sweep the floor' }])
  return (
    <Screen activeScreen='home'>
      <SectionHeader title="Jobs" back />
      <FlatList data={jobs} renderItem={({ item }) => <JobListItem job={item} />} keyExtractor={(item, index) => `${index}`} />
    </Screen>
  )
}

export default Jobs
