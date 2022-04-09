import React from "react"
import { Pressable, Image, StyleSheet, GestureResponderEvent, Text, View } from "react-native"
import CameraIcon from '../assets/icons/camera.svg'
import PersonIcon from '../assets/icons/person.svg'

const styles = StyleSheet.create({
  profileImage: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    width: 150,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 300,
    marginBottom: 10,
  }
})

interface IProps {
  image?: any,
  onPress?: (event: GestureResponderEvent) => void,
  style?: any
}

const ProfileImage: React.FC<IProps> = ({ image, onPress, style }) => {
  if (!onPress) {
    return (
      <View style={[styles.profileImage, style]}>
        {
          image ?
            <Image
              source={{ uri: 'file://' + image.path }
              }
              width={image.width}
              height={image.height}
              style={{
                height: '100%',
                width: '100%',
                borderRadius: 75,
              }
              } /> :
            < PersonIcon fill='grey' />
        }
      </View>
    )
  }
  return (
    <Pressable onPress={onPress} style={[styles.profileImage, style]}>
      {image ?
        <Image
          source={{ uri: 'file://' + image.path }}
          width={image.width}
          height={image.height}
          style={{
            height: '100%',
            width: '100%',
            borderRadius: 75,
          }} /> :
        <CameraIcon fill='grey' />
      }
      <Text style={{ color: 'white', position: 'absolute', bottom: 10, textAlign: 'center', fontWeight: 'bold' }}>Edit</Text>
    </Pressable >
  )
}

export default ProfileImage
