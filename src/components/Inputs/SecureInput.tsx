import React, { ReactElement, useState } from "react"
import { Pressable, StyleSheet, View } from "react-native"
import LabeledInput from "./LabeledInput"
import EyeOpen from '../../assets/icons/eye-open.svg'
import EyeClosed from '../../assets/icons/eye-closed.svg'

const styles = StyleSheet.create({
  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: '45%'
  },
})

interface IProps {
  label: string,
  value: string,
  onChangeText: (text: string) => void,
  icon?: ReactElement
}

const SecureInput: React.FC<IProps> = ({ label, value, onChangeText, icon }) => {
  const [showSecure, setShowSecure] = useState(false)

  return (
    <View>
      <LabeledInput
        label={label}
        autoCapitalize="none"
        autoComplete="password"
        autoCorrect={false}
        value={value}
        secureTextEntry={!showSecure}
        onChangeText={onChangeText}
        icon={icon}
      />
      <Pressable onPress={() => setShowSecure(!showSecure)} style={styles.eyeIcon}>
        {
          showSecure ?
            <EyeOpen fill="black" width={24} height={24} /> :
            <EyeClosed fill="black" width={24} height={24} />
        }
      </Pressable>
    </View>
  )
}

export default SecureInput
