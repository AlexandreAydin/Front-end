import React from "react";
import { View, Text,StyleSheet, TouchableWithoutFeedback,TouchableOpacity,TouchableHighlight,Pressable } from "react-native";


const Products = ({name, deleteProduct, idString}) => {
    return(
        // <TouchableWithoutFeedback>
        // <TouchableOpacity onPress={() => console.log('cliquer')} activeOpacity={0.8}>
    // <TouchableHighlight onPress={() => console.log('cliquer')} activeOpacity={0.8} underlayColor={'yellow'}>
    <Pressable onPress={() => deleteProduct(idString)}>
       <View syle={styles.productItems}>
            <Text style={styles.element} >{name}</Text>
       </View> 
      {/* </TouchableWithoutFeedback> */}
      {/* // </TouchableOpacity> */}
      {/* </TouchableHighlight> */}
    </Pressable>
    )
}

const styles = StyleSheet.create({
    productItems:{
      marginTop: 10
    },
    element:{
      backgroundColor: '#ffb6c1',
      padding: 20,
      fontSize:17,
      marginVertical: 6,
    }
  });

  export default Products