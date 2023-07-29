import React, {useState} from "react";
import { View,StyleSheet, TextInput, Button, FlatList } from "react-native";

const AddPoduct = ({submitHandler}) => {

    const [ product, setProduct ]= useState("");
    const inputHandler = (val) => {
        setProduct(val)
    }

    const handleClick = () => {
        submitHandler(product);
        setProduct('');
    }

    return (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Nouveau produit"
            onChangeText={ inputHandler }
            value={product}
          />
          <Button
            title="valider"
            onPress={ handleClick}
          />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer:{
        flexDirection:"row",
        marginBottom: 9,
      },
      textInput:{
        borderColor: "grey",
        borderWidth: 1,
        padding:5,
        paddingLeft:9,
        fontSize:18,
        flexGrow:1,
      },
  })

export default AddPoduct