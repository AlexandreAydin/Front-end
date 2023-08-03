/**
 * ! 78. Le module Keyboard
 */
 import React from 'react'
import { Text, View,TouchableWithoutFeedback, Keyboard } from 'react-native'

const DismissKeyboard = ({children}) => {

    return (
      <TouchableWithoutFeedback
        onPress={() => Keyboard.dismiss()}
      >
        {children}
      </TouchableWithoutFeedback>
    )
  }

  export default DismissKeyboard

