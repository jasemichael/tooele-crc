import React from "react"
import { View, Text, StyleSheet, Pressable } from "react-native"
import { useNavigate } from "react-router-native"
import { Job } from "../../types"

const styles = StyleSheet.create({
  jobListItem: {
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
  job: Job
}

const JobListItem: React.FC<IProps> = ({ job }) => {
  const navigate = useNavigate()
  return (
    <Pressable onPress={() => navigate(`/jobs/${job._id}`)}>
      <View style={styles.jobListItem}>
        <View>
          <Text>{job.name}</Text>
          <Text>${job.price}</Text>
        </View>
      </View>
    </Pressable>
  )
}

export default JobListItem
