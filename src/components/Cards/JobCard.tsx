import React from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"
import { useNavigate } from "react-router-native"
import { colorScheme } from "../../constants"
import { Job } from "../../types"

const styles = StyleSheet.create({
  jobCard: {
    borderRadius: 10,
    borderColor: 'grey',
    borderWidth: 2,
    borderStyle: 'solid',
    backgroundColor: colorScheme.green,
    alignItems: 'center',
    padding: 30,
    marginRight: 10,
  }
})

interface IProps {
  job: Job
}

const JobCard: React.FC<IProps> = ({ job }) => {
  const navigate = useNavigate()
  return (
    <Pressable onPress={() => navigate(`/jobs/${job._id}`)}>
      <View style={styles.jobCard}>
        <Text style={{ fontWeight: 'bold', fontSize: 22 }}>{job.name}</Text>
        <Text style={{ fontWeight: '400', fontSize: 20 }}>${job.price}</Text>
        <Text style={{ fontSize: 16 }}>{job.description}</Text>
      </View>
    </Pressable>
  )
}

export default JobCard
