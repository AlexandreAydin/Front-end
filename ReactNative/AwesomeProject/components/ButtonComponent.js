// /**
//  * ! 86. Custom Button et props
//  */


// import React from 'react'
// import { Text, View,StyleSheet,Pressable } from 'react-native'

// const ButtonComponent = props =>  {
  
//     return (
//         <Pressable
//             onPress={props.onPressHandler}
//         >
//             <View style={{...styles.btn,...props.style}}>
//                 <Text style={styles.btnText}> {props.btnTitle} </Text>
//             </View>
//         </Pressable>
//     )

// }

// const styles = StyleSheet.create({
//     btn: {
//         backgroundColor:'grey',
//         padding:9
//     },
//     btnText:{
//         color:"white",
//         textAlign:'center',
//         fontSize:17
//     }
// })

// export default ButtonComponent









/**
 * ! 87. Custom Button avec le props children et TouchableOpacity
 */


import React from 'react'
import { Text, View,StyleSheet,Pressable, TouchableOpacity } from 'react-native'

const ButtonComponent = ({onPressHandler,style, children}) =>  {
  
    return (
        <TouchableOpacity 
            onPress={onPressHandler}
            activeOpacity={0.6}
        >
        
            <View style={{...styles.btn,...style}}>
                <Text style={styles.btnText}> {children} </Text>
            </View>
       
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    btn: {
        backgroundColor:'grey',
        padding:9
    },
    btnText:{
        color:"white",
        textAlign:'center',
        fontSize:17
    }
})

export default ButtonComponent