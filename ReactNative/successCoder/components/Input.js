import React  from 'react'
import { StyleSheet, Text,View,TextInput } from "react-native";
import globalStyles from '../Styles/globalStyles';

const Input = () => {
    return(
        <View style={styles.formcontrol}>
            <Text style={styles.label}> Titre </Text>
            <TextInput
              value={title}
              onChangeText={text =>setTitle(text)}
              style= {styles.input}
              keyboardType='decimal-pad'
              multiline
              numberOfLines={5}
            />
          </View>
    )

}

const styles = StyleSheet.create({
    formControl:{
        width:"100%",
      }, 
      label:{
        marginVertical: 15,
        color: globalStyles.green,
        fontWeigth: 'bold',
      },
      input :{
        paddingHorizontal: 9,
        paddingVertical: 9,
        borderColor: global.green,
        borderWidth:0.5,
        borderRadius:6
      },
})

export default Input