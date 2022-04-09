import React from "react"
import { View, Text, Pressable, StyleSheet } from 'react-native'
import { useNavigate } from "react-router-native"
import { screenHeight } from "../constants"
import { BackButton } from "./Buttons"

const styles = StyleSheet.create({
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginBottom: '3%',
  },
  sectionTitle: {
    fontSize: screenHeight / 26,
    textAlign: 'left',
    fontWeight: 'bold',
    flex: 1
  },
  seeAll: {
    fontSize: screenHeight / 50,
    textAlign: 'right'
  },
  backButton: {
    alignSelf: 'flex-start'
  }
})

interface IProps {
  title?: string,
  navigateTo?: string,
  seeAll?: boolean,
  back?: boolean,
  center?: boolean
}

const SectionHeader: React.FC<IProps> = ({ title, navigateTo, seeAll, back, center }) => {
  const navigate = useNavigate()
  return (
    <View style={styles.sectionHeader}>
      {back ?
        <BackButton style={styles.backButton} />
        : null}
      <Text style={
        back || center ?
          [styles.sectionTitle, { textAlign: 'center' }] :
          styles.sectionTitle
      }
      >
        {title}
      </Text>
      {
        seeAll && navigateTo ?
          <Pressable onPress={() => navigate(navigateTo)}>
            <Text style={styles.seeAll}>See All</Text>
          </Pressable>
          : null
      }
    </View >
  )
}

export default SectionHeader
