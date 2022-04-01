import React from 'react'
import { Pressable } from "react-native"
import { useNavigate } from 'react-router-native'
import BackArrowIcon from '../../assets/icons/back-arrow.svg'

interface IProps {
  style?: any
}

const BackButton: React.FC<IProps> = ({ style }) => {
  const navigate = useNavigate()
  return (
    <Pressable onPress={() => navigate(-1)} style={[style, { position: 'absolute', zIndex: 1 }]}>
      <BackArrowIcon width={24} height={24} />
    </Pressable>
  )
}

export default BackButton
