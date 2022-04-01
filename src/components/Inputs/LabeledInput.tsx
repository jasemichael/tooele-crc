import React, { ReactElement } from "react"
import { TextInput, View, Text, StyleSheet, KeyboardTypeOptions } from "react-native"

const styles = StyleSheet.create({
  textInput: {
    borderRadius: 5,
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 1,
    padding: 8,
    width: "100%",
    paddingLeft: 40
  },
  inputIcon: {
    position: 'absolute',
    top: '45%',
    left: 10
  },
})

interface IProps {
  label: string,
  value: string,
  onChangeText: (text: string) => void,
  autoCapitalize?: "none" | "sentences" | "words" | "characters" | undefined,
  autoComplete?: "birthdate-day" | "birthdate-full" | "birthdate-month" | "birthdate-year" | "cc-csc" | "cc-exp" | "cc-exp-day" | "cc-exp-month" | "cc-exp-year" | "cc-number" | "email" | "gender" | "password",
  autoCorrect?: boolean,
  keyboardType?: KeyboardTypeOptions | undefined,
  secureTextEntry: boolean,
  icon?: ReactElement
}

const LabeledInput: React.FC<IProps> = ({ label, value, onChangeText, autoCapitalize, autoComplete, autoCorrect, keyboardType, secureTextEntry, icon }) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput
        autoCapitalize={autoCapitalize}
        autoComplete={autoComplete}
        autoCorrect={autoCorrect}
        keyboardType={keyboardType}
        value={value}
        style={styles.textInput}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      >
      </TextInput>
      <View style={styles.inputIcon}>
        {icon ? icon : null}
      </View>
    </View>
  )
}

export default LabeledInput
