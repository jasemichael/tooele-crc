import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from "react"
import { View, StyleSheet, Pressable, Image } from "react-native"
import { Camera, useCameraDevices } from "react-native-vision-camera"
import { BackButton } from "./Buttons"
import BackIcon from '../assets/icons/back-arrow.svg'
import CloseIcon from '../assets/icons/close.svg'
import CheckmarkIcon from '../assets/icons/checkmark.svg'
import { colorScheme } from "../constants"

const grantAccess = async () => {
  const cameraPermission = await Camera.getCameraPermissionStatus()
  if (cameraPermission === 'not-determined') {
    const newCameraPermission = await Camera.requestCameraPermission()
  }
}

interface IProps {
  image: any,
  setIsOpen: Dispatch<SetStateAction<boolean>>,
  setImage: any,
}

const CameraScreen: React.FC<IProps> = ({ setIsOpen, image, setImage }) => {
  const camera = useRef<Camera>(null)
  const [isActive, setIsActive] = useState(true)
  const devices = useCameraDevices()
  const device = devices.back
  useEffect(() => {
    grantAccess()
  })

  return (
    <View style={[{ position: 'absolute', zIndex: 1, backgroundColor: 'black' }, StyleSheet.absoluteFill]}>
      {
        isActive ?
          <Pressable style={{ position: 'absolute', left: 20, top: 32, zIndex: 2, alignSelf: 'center' }} onPress={() => setIsOpen(false)}>
            <BackIcon fill='white' width={32} height={32} />
          </Pressable> :
          null
      }
      {image && !isActive ?
        <Pressable style={{ position: 'absolute', right: 20, top: 32, zIndex: 2, alignSelf: 'center' }} onPress={() => { setImage(); setIsActive(true) }}>
          <CloseIcon fill='white' width={32} height={32} />
        </Pressable> :
        null
      }

      {
        device !== undefined && isActive ?
          <Camera
            ref={camera}
            style={[StyleSheet.absoluteFill]}
            device={device}
            isActive={isActive}
            photo={true}
          /> :
          image ? <Image source={{ uri: 'file://' + image.path }} width={image.width} height={image.height} style={StyleSheet.absoluteFill} /> : null
      }
      {
        !isActive ?
          <Pressable
            style={{
              position: 'absolute',
              bottom: 50,
              zIndex: 2,
              alignSelf: 'center',
              borderColor: 'white',
              borderRadius: 150,
              borderWidth: 6,
              width: 75,
              height: 75,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'white'
            }}
            onPress={() => setIsOpen(false)} >
            <CheckmarkIcon fill={colorScheme.green} width={40} height={40} />
          </Pressable> :

          <Pressable style={{ borderColor: 'white', borderWidth: 6, borderRadius: 150, position: 'absolute', bottom: 50, zIndex: 2, alignSelf: 'center', width: 75, height: 75 }} onPress={async () => {
            if (camera.current !== null) {
              const photo = await camera.current.takePhoto({
                flash: 'off',
              })
              setImage(photo)
              setIsActive(false)
            }
          }} />
      }
    </View>
  )
}

export default CameraScreen
