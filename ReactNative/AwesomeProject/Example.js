
/**
 * ! 79 Exercice sur le Keyboard avec addListener - removeListener et useEffect
 */
import React, { useEffect } from 'react'
import { TextInput,StyleSheet, Keyboard} from 'react-native'

const Example = () => {

    useEffect(()=> {
      Keyboard.addListener('keyboardDidShow',_keyboardDidShow);
      Keyboard.addListener('keyboardDidHide',_keyboardDidHide);

      return () => {
        Keyboard.removeListener('keyboardDidShow',_keyboardDidShow);
        Keyboard.removeListener('keyboardDidHide',_keyboardDidHide);
      }

    },[]);
    
    const _keyboardDidShow = () => {
        alert('Veuillez remplir le TextInput');
    }

    const _keyboardDidHide = () => {
        alert("merci d'avoir valider")
    }

    return <TextInput 
        style={styles.input}
        onSubmitEditing={Keyboard.dismiss}
        />
  
}

const styles = StyleSheet.create({
    input: {
        margin: 60,
        padding: 10,
        borderWidth:0.5,
        borderRadius:4,
        backgroundColor:'#fff'
    }
})

export default Example;