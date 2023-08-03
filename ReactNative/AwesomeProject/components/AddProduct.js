// import React, {useState, useEffect} from "react";
// import { View,StyleSheet, TextInput, Button, FlatList } from "react-native";

// const AddPoduct = ({submitHandler}) => {

//     const [ product, setProduct ]= useState("");
//     const [ btnDisable, setBtnDisable ]= useState(true);

//     const inputHandler = (val) => {
//         setProduct(val)
//     }
//     //  permet de desactiver un boutton video 58
//     useEffect(() => {
//       if (product.length>1) {
//         setBtnDisable(false)
//       }else {
//         setBtnDisable(true)
//       }
//     },[product]);

//     const handleClick = () => {
//         submitHandler(product);
//         setProduct('');
//     }

//     return (
//         <View style={styles.inputContainer}>
//           <TextInput
//             style={styles.textInput}
//             placeholder="Nouveau produit"
//             onChangeText={ inputHandler }
//             value={product}
//           />
//           <Button
//             title="valider"
//             onPress={ handleClick}
//             disabled={btnDisable}
//           />
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     inputContainer:{
//         flexDirection:"row",
//         marginBottom: 9,
//       },
//       textInput:{
//         borderColor: "grey",
//         borderWidth: 1,
//         padding:5,
//         paddingLeft:9,
//         fontSize:18,
//         flexGrow:1,
//       },
//   })

// export default AddPoduct







// /**
// * ! 59. Découverte du composant Modal - Partie 1
// */
// import React, {useState} from "react";
// import { View,StyleSheet, TextInput, Button, FlatList } from "react-native";

// const AddPoduct = ({submitHandler}) => {

//     const [ product, setProduct ]= useState("");

//     const inputHandler = (val) => {
//         setProduct(val)
//     }

//     const handleClick = () => {
//         submitHandler(product);
//         setProduct('');
//     }

//     return (
//         <View style={styles.inputContainer}>
//           <TextInput
//             style={styles.textInput}
//             placeholder="Nouveau produit"
//             onChangeText={ inputHandler }
//             value={product}
//             // max 9 caractére
//               // maxLength={9}
//             // text en password
//               // secureTextEntry
//             // desactiver input
//               // editable={true}
            
//           />
//           <Button
//             title="valider"
//             onPress={ handleClick}
//           />
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     inputContainer:{
//         marginBottom: 15,
//       },
//       textInput:{
//         borderColor: "grey",
//         borderWidth: 1,
//         padding:5,
//         paddingLeft:9,
//         fontSize:18,
//         flexGrow:1,
//         marginBottom: 9,
//       },
//   })

// export default AddPoduct









// /**
// * ! 78 le module keyboard
// */
// import React, {useState} from "react";
// import { View,StyleSheet, TextInput, Button, FlatList } from "react-native";

// const AddPoduct = ({submitHandler}) => {

//     const [ product, setProduct ]= useState("");

//     const inputHandler = (val) => {
//         setProduct(val)
//     }

//     const handleClick = () => {
//         submitHandler(product);
//         setProduct('');
//     }

//     return (
//         <View style={styles.inputContainer}>
//           <TextInput
//             style={styles.textInput}
//             placeholder="Nouveau produit"
//             onChangeText={ inputHandler }
//             value={product}
//             // max 9 caractére
//               // maxLength={9}
//             // text en password
//               // secureTextEntry
//             // desactiver input
//               // editable={true}
            
//           />
//           <Button
//             title="valider"
//             onPress={ handleClick}
//           />
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     inputContainer:{
//         marginBottom: 15,
//       },
//       textInput:{
//         borderColor: "grey",
//         borderWidth: 1,
//         padding:5,
//         paddingLeft:9,
//         fontSize:18,
//         flexGrow:1,
//         marginBottom: 9,
//       },
//   })

// export default AddPoduct












/**
* ! 80.Afficher TextInput dans un Modal suite à onPress sur un bouton
*/
import React, {useState} from "react";
import { View,StyleSheet, TextInput, Button, FlatList,Modal } from "react-native";

const AddPoduct = ({submitHandler,displayModal,cancelNewProduct}) => {

    const [ product, setProduct ]= useState("");

    const inputHandler = (val) => {
        setProduct(val)
    }

    const handleClick = () => {
        submitHandler(product);
        setProduct('');
    }

    return (
      <Modal
        visible={displayModal}
        animationType="slide"
      >
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
            color='green'
          />
          <Button
            title="Annuler"
            onPress={ cancelNewProduct }
            color='red'
          />
        </View>
      </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer:{
        marginBottom: 15,
        justifyContent: "center",
        flex:1,
        padding: 24
       
      },
      textInput:{
        borderColor: "grey",
        borderWidth: 1,
        padding:5,
        paddingLeft:9,
        fontSize:18,
        marginBottom: 9,
      },
  })

export default AddPoduct
