/**
* ! 23.Composants View et text
*/

/** 
* ? import React from "react";
* ? import { View, Text } from "react-native";

* ? export default function App() {
* ?   return (
* ?     <View>
* ?       <Text>
* ?        Hello Word
* ?      </Text>

* ?    </View>
* ?  );
* ? }
*/

/**
* ! 24.Découvrir le Inline Style
  https://reactnative.dev/docs/view-style-props
*/

/** 
* ? import React from "react";
* ? import { View, Text } from "react-native";

* ? export default function App() {
* ? return (
* ?  <View style={{marginTop:50, flexDirection:"row", marginLeft:50,}}>
* ?    <View style={{backgroundColor: "green"}}>
* ?      <Text style={{fontFamily: "Cochin"}}>Text One</Text>
* ?      <Text style={{fontFamily: "Cochin"}}>Text Two</Text>
* ?     <Text style={{fontFamily: "Cochin"}}>Text Tree</Text>
* ?    </View>
* ?    <View style={{backgroundColor: "red"}}>
* ?      <Text style={{fontFamily: "Cochin", fontSize: 20, fontWeight: 'bold'}}>Text For</Text>
* ?    </View>

* ?  </View>
* ?);
* ? }

 */





/**
* ! 25. Découvrir les Objet StyleSheets
  https://reactnative.dev/docs/view-style-props
*/


/** 
* ? import React from "react";
* ? import { View, Text, StyleSheet } from "react-native";

* ? export default function App() {
* ? return (
* ?  <View style={styles.wrapper}>
* ?    <View style={styles.view1}>
* ?      <Text style={styles.textFamily}>Text One</Text>
* ?      <Text style={styles.textFamily}>Text Two</Text>
* ?      <Text style={styles.textFamily}>Text Tree</Text>
* ?    </View>
* ?    <View style={styles.view2}>
* ?      <Text style={{fontFamily: "Cochin", fontSize: 20, fontWeight: 'bold'}}>Text For</Text>
* ?   </View>

* ?  </View>
* ?);
* ? }



* ? const styles = StyleSheet.create({
* ?    wrapper:{marginTop:50, flexDirection:"row", marginLeft:50,},
* ?    view1:{backgroundColor: "green"},
* ?    view2:{backgroundColor: "red"},
* ?    textFamily:{fontFamily: "Cochin"}
* ? })

*/




// /**
// * ! 26. Styliser le composant Text
// */

// import React from "react";
// import { View, Text, StyleSheet } from "react-native";

// export default function App() {
// return (
//   <View style={styles.wrapper}>
//     <View style={styles.view1}>
//       <Text style={styles.textFamily}>Text One
//       <Text>Bold</Text>
//       </Text>
//       <Text style={styles.textFamily}>Text Two</Text>
//       <Text style={styles.textFamily}>Text Tree</Text>
//     </View>
//     <View style={styles.view2}>
//       <Text style={{fontFamily: "Cochin", fontSize: 20, fontWeight: 'bold'}}>Text For</Text>
//     </View>

//   </View>
// );
// }

// const styles = StyleSheet.create({
//     wrapper:{marginTop:50, flexDirection:"row", marginLeft:50,},
//     view1:{backgroundColor: "green"},
//     view2:{backgroundColor: "red"},
//     textFamily:{fontFamily: "Cochin",fontWeight: 'bold'}
// })




// /**
// * ! 27. Le JSX dans React Native
// */

// import React from "react";
// import { View, Text, StyleSheet } from "react-native";

// export default function App() {
  
//   const getNames =(firstName, secondName, thirdName) => {
//     // return firstName + " " + secondName + " " + thirdName
//     return `${firstName} ${secondName} ${thirdName}` 
//   }

// return (
//     <Text style={styles.wrapper}>je m'appelle {getNames("Adrien", "Jul", "Jean")}</Text>
// );
// }

// const styles = StyleSheet.create({
//     wrapper:{marginTop:50, flexDirection:"row"},
//     view1:{backgroundColor: "green"},
//     view2:{backgroundColor: "red"},
//     textFamily:{fontFamily: "Cochin",fontWeight: 'bold'}
// }) 



// /**
// * ! 28. Les Props dans React Native
// */

// import React from "react";
// import { View, Text, StyleSheet } from "react-native";


  
//   const Person = ({ name, age }) => {
//     return(
//       <View>
//         {
//           age ? (
//             // Si ya l'age on affiche  on affiche ceci
//             <Text style={styles.textFamily}> Je suis: {name} | age: {age}</Text>
//           ) : (
//             // Si ya pa lage on affiche ceci 
//             <Text style={styles.textFamily}> Je suis: {name}</Text>
//           )
//         }

//       </View>
//     )
//   }
// export default function App() {

// return (
//     <View style={styles.wrapper}>
//         <Person name="Roméo"/>
//         <Person name="Jean"/>
//         <Person name="Sergio" age="14"/>
//     </View>
// );
// }

// const styles = StyleSheet.create({
//     wrapper:{marginTop:50, flexDirection:"column"},
//     view1:{backgroundColor: "green"},
//     view2:{backgroundColor: "red"},
//     textFamily:{fontFamily: "Cochin",fontWeight: 'bold'}
// }) 






// /**
// * ! 29. Le Props Children dans React Native
// */

// import React from "react";
// import { View, Text, StyleSheet } from "react-native";


  
//   const Person = ({ name, age, children }) => {
//     return(
//       <View>
//         {
//           age ? 
//             // Si ya l'age on affiche  on affiche ceci
//             <Text style={styles.textFamily}> Je suis: {name} | age: {age} | {children}</Text> :
//             // Si ya pa lage on affiche ceci 
//             <Text style={styles.textFamily}> Je suis: {name}| {children}</Text>      
//         }

//       </View>
//     )
//   }
// export default function App() {

// return (
//     <View style={styles.wrapper}>
//         <Person name="Roméo">Alien</Person>
//         <Person name="Jean">Humain</Person>
//         <Person name="Sergio" age="14">Humain</Person>
//     </View>
// );
// }

// const styles = StyleSheet.create({
//     wrapper:{marginTop:50, flexDirection:"column"},
//     view1:{backgroundColor: "green"},
//     view2:{backgroundColor: "red"},
//     textFamily:{fontFamily: "Cochin",fontWeight: 'bold'}
// }) 











// /**
// * ! 30. Autres Props dans React Native
// */

// import React from "react";
// import { View, Text, StyleSheet } from "react-native";


  
//   const Person = ({ name, age, children }) => {
//     return(
//       <View>
//         {
//           age ? 
//             // Si ya l'age on affiche  on affiche ceci
//             <Text style={styles.textFamily}> Je suis: {name} | age: {age} | {children}</Text> :
//             // Si ya pa lage on affiche ceci 
//             <Text style={styles.textFamily}> Je suis: {name}| {children}</Text>      
//         }

//       </View>
//     )
//   }
// export default function App() {

// return (
//     <View style={styles.wrapper}>
//         <Person name="Roméo">Alien</Person>
//         <Person name="Jean">Humain</Person>
//         <Person name="Sergio" age="14">Humain</Person>
//     </View>
// );
// }

// const styles = StyleSheet.create({
//     wrapper:{marginTop:50, flexDirection:"column"},
//     view1:{backgroundColor: "green"},
//     view2:{backgroundColor: "red"},
//     textFamily:{fontFamily: "Cochin",fontWeight: 'bold'}
// }) 













// /**
// * ! 31. Passer un objet dans un Props
// */

// import React from "react";
// import { View, Text, StyleSheet } from "react-native";


  
//   const Person = ({ name, age, children }) => {
//     return(
//       <View>
//         {
//           age ? 
//             // Si ya l'age on affiche  on affiche ceci
//             <Text style={styles.textFamily}> Je suis: {name} | age: {age} | {children}</Text> :
//             // Si ya pa lage on affiche ceci 
//             <Text style={styles.textFamily}> Je suis: {name}| {children}</Text>      
//         }

//       </View>
//     )
//   }
// export default function App() {

// return (
//     <View style={styles.wrapper}>
//         <Person name="Roméo">Alien</Person>
//         <Person name="Jean">Humain</Person>
//         <Person name="Sergio" age="14">Humain</Person>
//     </View>
// );
// }

// const styles = StyleSheet.create({
//     wrapper:{marginTop:50, flexDirection:"column"},
//     view1:{backgroundColor: "green"},
//     view2:{backgroundColor: "red"},
//     textFamily:{fontFamily: "Cochin",fontWeight: 'bold'}
// }) 












// /**
// * ! 32. Découvrir le State et son utilité dans React Native
// */



// /**
// * ! 33. Composant Button
// * https://reactnative.dev/docs/button
// */


// import React from "react";
// import { View, Text, StyleSheet,Button } from "react-native";


  
// export default function App() {

// return (
//   <View style={styles.wrapper}>
//     <Button
//       title= "cliquez ici"
//       color= "red"
//       accessibilityLabel="Learn more about this purple button"
//       //desactive le bouton
//       disabled={true}
//     />

//   </View>
// );
// }

// const styles = StyleSheet.create({
//     wrapper:{marginTop:50, flexDirection:"column"},
//     view1:{backgroundColor: "green"},
//     view2:{backgroundColor: "red"},
//     textFamily:{fontFamily: "Cochin",fontWeight: 'bold'}
// }) 








// /**
// * ! 34. Modifier le State via un événement onPress
// */


// import React, { useState } from "react";
// import { View, Text, StyleSheet,Button } from "react-native";


  
// export default function App() {

//   const [name, setName] = useState("Stan");

//   const handlePress = () => {
//     setName('steve');
//   }

// return (
//   <View style={styles.wrapper}>
//     <Text style={styles.textFamily}>{name}</Text>
//     <Button
//       title= "cliquez ici" onPress={handlePress}
//     />

//   </View>
// );
// }

// const styles = StyleSheet.create({
//     wrapper:{marginTop:50, flexDirection:"column"},
//     view1:{backgroundColor: "green"},
//     view2:{backgroundColor: "red"},
//     textFamily:{fontFamily: "Cochin",fontWeight: 'bold'}
// }) 








// /**
// * ! 35. Passer un objet dans le hook useState
// */


// import React, { useState } from "react";
// import { View, Text, StyleSheet,Button } from "react-native";


  
// export default function App() {

//   const obj = {
//     name: 'Spiderman',
//     age: 30
//   }

//   const [infos, setInfos] = useState(obj);

//   const handlePress = () => {
//     setInfos({
//       name: 'SuperMan',
//       age: 32
//     });
//   }

// return (
//   <View style={styles.wrapper}>
//     <Text style={styles.textFamily}>Nom: {infos.name}</Text>
//     <Text style={styles.textFamily}>Age: {infos.age}</Text>
//     <Button
//       title= "cliquez ici" onPress={handlePress}
//     />

//   </View>
// );
// }

// const styles = StyleSheet.create({
//     wrapper:{marginTop:50, flexDirection:"column"},
//     view1:{backgroundColor: "green"},
//     view2:{backgroundColor: "red"},
//     textFamily:{fontFamily: "Cochin",fontWeight: 'bold'}
// }) 














// /**
// * ! 36. Composant TextInput
//  https://reactnative.dev/docs/textinput
// */


// import React, { useState } from "react";
// import { View, Text, StyleSheet,TextInput } from "react-native";


  
// export default function App() {

//   const [ name, setName] = useState ()
//   const [ age, setAge] = useState ()

// return (
//   <View style={styles.wrapper}> 
//     <Text style={styles.text}>Nom: {name}</Text>
//       <TextInput 
//       placeholder="indiquer votre nom"
//         style={styles.TextInput}
//         onChangeText={ val => setName(val)}
//       />
//     <Text style={styles.text}>Age: {age}</Text>
//       <TextInput 
//       placeholder="indiquer votre age"
//         style={styles.TextInput}
//         onChangeText={ val => setAge(val)}
//         keyboardType="numeric"
//       />
//   </View>
// );
// }

// const styles = StyleSheet.create({
//     wrapper:{
//       marginTop:50,
//       alignItems: "center",
//       height: 200,
//     },
//     TextInput:{
//       height:40,
//       borderColor:'grey',
//       borderWidth:1,
//       padding: 10,
//       margin:9,
//       width:'90%'
//     },
//     text:{
//       fontSize : 20,
//     }
// }) 








// /**
// * ! 37. Afficher le contenu d'un objet
//  https://reactnative.dev/docs/textinput
// */


// import React, { useState } from "react";
// import { View, Text, StyleSheet,TextInput } from "react-native";


  
// export default function App() {

//   const obj = [
//     {id:1, name:"Stan",age: 45},
//     {id:2, name:"Elodie",age: 45},
//     {id:3, name:"Elenora",age: 18},
//     {id:4, name:"Elizabeth",age: 14},
//     {id:5, name:"jean",age: 1020},
//     {id:6, name:"Pierre",age: 30},
//     {id:7, name:"José",age: 32},
//     {id:8, name:"Fabien",age: 54},
//   ]

//   const [ family, setFamily] = useState (obj)


// return (
//   <View style={styles.wrapper}> 
//   {
//     family.map(member => {
//       return (
//         <View key={member.id} style={styles.viewList}>
//             <Text style={styles.text}>Nom: {member.name}</Text>
//             <Text style={styles.text}>Age: {member.age}</Text>
//         </View>
//       )

//     })
//   }
//   </View>
// );
// }

// const styles = StyleSheet.create({
//     wrapper:{padding:20},
//     viewList:{
//       marginTop: 30,
//       backgroundColor: "purple",
//       padding: 20,
//     },
//     text:{color:'#fff'}
// }) 








// /**
// * ! 38. Composant ScrollView
// *
// */


// import React, { useState } from "react";
// import { View, Text, StyleSheet,ScrollView } from "react-native";


  
// export default function App() {

//   const obj = [
//     {id:1, name:"Stan",age: 45},
//     {id:2, name:"Elodie",age: 45},
//     {id:3, name:"Elenora",age: 18},
//     {id:4, name:"Elizabeth",age: 14},
//     {id:5, name:"jean",age: 1020},
//     {id:6, name:"Pierre",age: 30},
//     {id:7, name:"José",age: 32},
//     {id:8, name:"Fabien",age: 54},
//   ]

//   const [ family, setFamily] = useState (obj)


// return (
//   <View style={styles.wrapper}> 
//   <ScrollView>
//   {
//     family.map(member => {
//       return (
//         <View key={member.id} style={styles.viewList}>
//             <Text style={styles.text}>Nom: {member.name}</Text>
//             <Text style={styles.text}>Age: {member.age}</Text>
//         </View>
//       )

//     })
//   }
//   </ScrollView>
//   </View>
// );
// }

// const styles = StyleSheet.create({
//     wrapper:{padding:20},
//     viewList:{
//       marginTop: 30,
//       backgroundColor: "purple",
//       padding: 20,
//     },
//     text:{color:'#fff'}
// }) 












// /**
// * ! 39. Composant FlatList
// *
// */


// import React, { useState } from "react";
// import { View, Text, StyleSheet, FlatList } from "react-native";


  
// export default function App() {

//   const obj = [
//     {id:"1", name:"Stan",age: 45},
//     {id:"2", name:"Elodie",age: 45},
//     {id:"3", name:"Elenora",age: 18},
//     {id:"4", name:"Elizabeth",age: 14},
//     {id:"5", name:"jean",age: 1020},
//     {id:"6", name:"Pierre",age: 30},
//     {id:"7", name:"José",age: 32},
//     {id:"8", name:"Fabien",age: 54},
//   ]

//   const [ family, setFamily] = useState (obj);

//   const renderItem=({item}) => (
//     <View  style={styles.viewList}>
//         <Text style={styles.text}>
//           <Text>Nom:</Text>
//           {item.name}
//         </Text>
//         <Text style={styles.text}>
//           <Text>Age:</Text>
//           {item.age}
//         </Text>
//     </View>
//   );

//   return (
//     <View style={styles.wrapper}>
//       <FlatList
//         data={family}
//         renderItem={renderItem}
//         keyExtractor={item=> item.id}
//       />
//     </View>
//     )
//   }
      
  


// const styles = StyleSheet.create({
//     wrapper:{padding:20},
//     viewList:{
//       marginTop: 30,
//       backgroundColor: "purple",
//       padding: 20,
//     },
//     text:{color:'#fff'}
// })








// /**
// * ! 40. Application Shopping List - Partie 1 
// * ! 41. Application Shopping List - Partie 2
// * ! 42. Application Shopping List - Partie 3 
// * ! 43. Application Shopping List - Partie 4 
// * ! 44. Application Shopping List - Partie 5
// * ! 45. Application Shopping List - Partie 6 
// */


// import React, {useState} from "react";
// import { View, Text,StyleSheet, TextInput, Button, FlatList } from "react-native";


  
// export default function App() {
  
//   const [product, setProduct] = useState('');
//   const [myProducts, setMyProducts] = useState([]);

//   const inputHandler = (val) => {
//     setProduct(val)
//   }

//   const submitHandler = () => {
//     const idString = Date.now().toString();
//     setMyProducts(currentMyProducts => [{key: idString, name:product}, ...currentMyProducts] );
//     setProduct('');
//   }

//     return(
//       <View style={styles.container}>
//         <View style={styles.inputContainer}>
//           <TextInput
//             style={styles.textInput}
//             placeholder="Nouveau produit"
//             onChangeText={ inputHandler }
//             value={product}
//           />
//           <Button
//             title="valider"
//             onPress={submitHandler}
//           />
//         </View>


//         <FlatList
//           data={myProducts}
//           renderItem={({item}) => <Text style={styles.element} >{item.name}</Text>}
//         />
//       </View>
//     );
//   }
      

// const styles = StyleSheet.create({
//   container:{
//     padding: 40,
//     paddingTop:60,
//   },
//   inputContainer:{
//     flexDirection:"row",
//     marginBottom: 9,
//   },
//   textInput:{
//     borderColor: "grey",
//     borderWidth: 1,
//     padding:5,
//     paddingLeft:9,
//     fontSize:18,
//     flexGrow:1,
//   },
//   productItems:{
//     marginTop: 10
//   },
//   element:{
//     backgroundColor: '#ffb6c1',
//     padding: 20,
//     fontSize:17,
//     marginVertical: 6,
//   }
// });










// /**
// * ! 46. Passer de la data entre les composants
// * ! 47. Passer de la data entre les composants
// * ! 48. Passer de la data entre les composants
// * ! 49. Passer de la data entre les composants
// */


// import React, {useState} from "react";
// import { View,StyleSheet, FlatList } from "react-native";
// import Products from "./components/Product";
// import AddPoduct from "./components/AddProduct";


  
// export default function App() {
  
//   const [myProducts, setMyProducts] = useState([]);

//   const submitHandler = (product) => {
//     const idString = Date.now().toString();
//     setMyProducts(currentMyProducts => [{key: idString, name:product}, ...currentMyProducts] );
  
//   }

//   const deleteProduct = (key) => {
//     setMyProducts(currentMyProducts => {
//       return currentMyProducts.filter(product=> product.key != key)
//     } )
//   }

//     return(
//       <View style={styles.container}>
//         <AddPoduct submitHandler={submitHandler}/>

//         <FlatList
//           data={myProducts}
//           renderItem={({item}) => <Products name= {item.name}/>}
//         />
//       </View>
//     );
//   }
      

// const styles = StyleSheet.create({
//   container:{
//     padding: 40,
//     paddingTop:60,
//   },
// });









// /**
// * ! 54. supprimer un prduit
// * ! 55. Afficher une simple alerte
// */


// import React, {useState} from "react";
// import { View,StyleSheet, FlatList } from "react-native";
// import Products from "./components/Product";
// import AddPoduct from "./components/AddProduct";


  
// export default function App() {
  
//   const [myProducts, setMyProducts] = useState([]);

//   const submitHandler = (product) => {
//     if(product.length > 1 ) {
//     const idString = Date.now().toString();
//     setMyProducts(currentMyProducts => [{key: idString, name:product}, ...currentMyProducts] );
//     }else{
//       alert('refuser')
//     }
//   }

//   const deleteProduct = (key) => {
//     setMyProducts(currentMyProducts => {
//       return currentMyProducts.filter(product=> product.key != key)
//     } )
//   }

//     return(
//       <View style={styles.container}>
//         <AddPoduct submitHandler={submitHandler}/>

//         <FlatList
//           data={myProducts}
//           renderItem={({item}) => (
//             <Products 
//               name= {item.name}
//               idString={item.key}
//               deleteProduct={deleteProduct}
//               />)}
//         />
//       </View>
//     );
//   }
      

// const styles = StyleSheet.create({
//   container:{
//     padding: 40,
//     paddingTop:60,
//   },
// });















// /**
// * ! 56. API Alert de React Native 
// */


// import React, {useState} from "react";
// import { View,StyleSheet, FlatList,Alert } from "react-native";
// import Products from "./components/Product";
// import AddPoduct from "./components/AddProduct";


  
// export default function App() {
  
//   const [myProducts, setMyProducts] = useState([]);

//   const submitHandler = (product) => {
//     if(product.length > 1 ) {
//     const idString = Date.now().toString();
//     setMyProducts(currentMyProducts => [{key: idString, name:product}, ...currentMyProducts] );
//     }else{
//       Alert.alert('Désolé','Nombre de caractères doit être minimum 1', [
//         {
//           text: 'COMPRIS',
//           onPress: () => console.warn('refusé')
//         },
//         {
//           text: 'D\'accord',
//           onPress: () => console.warn('pas accépté refusé')
//         }
//       ],
//       {
//         cancelable: true,
//         onDismiss: () => console.warn(' refusé avec dismiss')
      
//       }
//       );
//     }
//   }

//   const deleteProduct = (key) => {
//     setMyProducts(currentMyProducts => {
//       return currentMyProducts.filter(product=> product.key != key)
//     } )
//   }

//     return(
//       <View style={styles.container}>
//         <AddPoduct submitHandler={submitHandler}/>

//         <FlatList
//           data={myProducts}
//           renderItem={({item}) => (
//             <Products 
//               name= {item.name}
//               idString={item.key}
//               deleteProduct={deleteProduct}
//               />)}
//         />
//       </View>
//     );
//   }
      

// const styles = StyleSheet.create({
//   container:{
//     padding: 40,
//     paddingTop:60,
//   },
// });
















// /**
// * ! 57. Utilisation du Hook useEffect dans React Native
// */


// import React, {useState, useEffect} from "react";
// import { View,StyleSheet, FlatList,Alert } from "react-native";
// import Products from "./components/Product";
// import AddPoduct from "./components/AddProduct";


  
// export default function App() {
  
//   const [myProducts, setMyProducts] = useState([]);
//   const [count, setCount] = useState([]);

//   useEffect(() => {
//     if (count > 3) {
//       setMyProducts([])
//     }
//   }, [count]);

//   const submitHandler = (product) => {
//     if(product.length > 1 ) {
//     const idString = Date.now().toString();
//     setMyProducts(currentMyProducts => [{key: idString, name:product}, ...currentMyProducts] );
//     }else{
//       Alert.alert('Désolé','Nombre de caractères doit être minimum 2', [
//         {
//           text: 'COMPRIS',
//           onPress: () => setCount(count + 1)
//         },
//       ],
//       {
//         cancelable: true,
//         onDismiss: () => console.warn(' refusé avec dismiss')
      
//       }
//       );
//     }
//   }

//   const deleteProduct = (key) => {
//     setMyProducts(currentMyProducts => {
//       return currentMyProducts.filter(product=> product.key != key)
//     } )
//   }

//     return(
//       <View style={styles.container}>
//         <AddPoduct submitHandler={submitHandler}/>

//         <FlatList
//           data={myProducts}
//           renderItem={({item}) => (
//             <Products 
//               name= {item.name}
//               idString={item.key}
//               deleteProduct={deleteProduct}
//               />)}
//         />
//       </View>
//     );
//   }
      

// const styles = StyleSheet.create({
//   container:{
//     padding: 40,
//     paddingTop:60,
//   },
// });












// /**
// * ! 58. Désactiver un bouton dans React Native
// */


// import React, {useState} from "react";
// import { View,StyleSheet, FlatList } from "react-native";
// import Products from "./components/Product";
// import AddPoduct from "./components/AddProduct";


  
// export default function App() {
  
//   const [myProducts, setMyProducts] = useState([]);

//   const submitHandler = (product) => {
//     const idString = Date.now().toString();
//     setMyProducts(currentMyProducts => [{key: idString, name:product}, ...currentMyProducts] );

//   }

//   const deleteProduct = (key) => {
//     setMyProducts(currentMyProducts => {
//       return currentMyProducts.filter(product=> product.key != key)
//     } )
//   }

//     return(
//       <View style={styles.container}>
//         <AddPoduct submitHandler={submitHandler}/>

//         <FlatList
//           data={myProducts}
//           renderItem={({item}) => (
//             <Products 
//               name= {item.name}
//               idString={item.key}
//               deleteProduct={deleteProduct}
//               />)}
//         />
//       </View>
//     );
//   }
      

// const styles = StyleSheet.create({
//   container:{
//     padding: 40,
//     paddingTop:60,
//   },
// });














// /**
// * ! 59. Découverte du composant Modal - Partie 1
//   https://reactnative.dev/docs/modal
// */


// import React, {useState} from "react";
// import { 
//   View,
//   StyleSheet,
//   FlatList,
//   Modal,
//   Text,
//   Pressable,
//  } from "react-native";
// import Products from "./components/Product";
// import AddPoduct from "./components/AddProduct";


  
// export default function App() {
  
//   const [myProducts, setMyProducts] = useState([]);
//   const [showModal, setShowModal] = useState(true);

//   const submitHandler = (product) => {
//     if(product.length > 1 ){
//       setMyProducts(currentMyProducts => {
//         return currentMyProducts.filter(product=> product.key != key)
//       } );
//     }else {
//       setShowModal(true)
//     }

//   }

//   const deleteProduct = (key) => {
//     setMyProducts(currentMyProducts => {
//       return currentMyProducts.filter(product=> product.key != key)
//     } )
//   }

//     return(
//       <View style={styles.container}>

//         <Modal
//           visible={showModal}
//           onRequestClose={() => setShowModal(false)}
//           animationType="slide"
//           transparent
//         >
//          <View style={styles.modalContainer}>
//             <View style={styles.modalContent}>
//               <View style={styles.modalHeader}>
//                 <Text style={styles.modalHeaderText}>OUPS!</Text>
//               </View>
//               <View style={styles.modalBody}>
//                 <Text style={styles.modalBodyText}>merci d'indiquer minimum 2 caractères</Text>
//               </View>
//               <View style={styles.modalFooter}>
//                 <Pressable 
//                   style={styles.pressableBtnModal}
//                   onPress={()=>setShowModal(false)}
//                   >
//                   <Text style={styles.modalBtn}>Ok</Text>
//                 </Pressable>
//               </View>
//             </View>

//          </View>
//         </Modal>
//         <AddPoduct submitHandler={submitHandler}/>

//         <FlatList
//           data={myProducts}
//           renderItem={({item}) => (
//             <Products 
//               name= {item.name}
//               idString={item.key}
//               deleteProduct={deleteProduct}
//               />)}
//         />
//       </View>
//     );
//   }
      

// const styles = StyleSheet.create({
//   container:{
//     padding: 40,
//     paddingTop:60,
//   },
//   modalContainer:{
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor:"rgba(0,0,0,0.2)"
//   },
//   modalContent:{
//     backgroundColor:"#fff",
//     width: "90%",
//     height: 250,
//     borderRadius:15,
//     alignItems:"center",
//   },
//   modalHeader:{
//     width:"100%",
//     padding:16,
//     alignItems:"center",
//     borderTopLeftRadius: 15,
//     borderTopRightRadius: 15,
//     borderBottomWidth: 1,
//     borderColor:'lightgray',
//   },
//   modalHeaderText:{
//     color:"grey",
//     fontSize:17,
//   },
//   modalBody:{
//     flex: 1,
//     width:"100%",
//     alignItems:"center",
//     justifyContent:"center",
//   },
//   modalBodyText:{
//     fontSize:17
//   },
//   modalFooter:{
   
//     width:"100%",

//   },
//   pressableBtnModal:{
//     backgroundColor:'#20b2aa',
//     borderBottomLeftRadius:15,
//     borderBottomRightRadius:15,
//   },
//   modalBtn:{
//     fontSize:17,
//     color:"#fff",
//     textAlign:"center",
//     padding:16,
//   }
// });










  


 
   
    
    


// /**
// * ! 65. Exercice 1
// */


// import React, { useState } from "react";
// import {View,Text, StyleSheet} from "react-native";

// export default function App() {
//   const obj = [
//     {id:1, name:"Stan",age: 45},
//     {id:2, name:"Elodie",age: 45},
//     {id:3, name:"Elenora",age: 18},
//     {id:4, name:"Elizabeth",age: 14},
//     {id:5, name:"jean",age: 1020},
//     {id:6, name:"Pierre",age: 30},
//   ]

//   const [ family, setFamily] = useState (obj)

//   return (
//     <View style={styles.container}>
//       {
//         family.map(member => {
//           return(
//             <View key={member.id } style={styles.list}>
//               <Text style={styles.textList}> Nom:{member.name} | Age:{member.age}</Text>
//             </View>
//           )
//         })
//       }
//     </View>
//   )
// }

// const styles=StyleSheet.create({
//   container:{
//     flex:1,
//     alignItems:"stretch",
//     justifyContent:"center",
//   },
//   list:{
//     backgroundColor:"deepskyblue",
//     justifyContent:"center",
//     alignItems:"center",
//     margin:10
//   },
//   textList:{
//     color:"#fff",
//     padding:12,
//     fontSize:20
//   }
// })
















// /**
// * ! 66. Exercice 2
// */


// import React, { useState } from "react";
// import {View,Text, StyleSheet} from "react-native";

// export default function App() {
//   const obj = [
//     {id:1, name:"Stan",age: 45},
//     {id:2, name:"Elodie",age: 45},
//     {id:3, name:"Elenora",age: 18},
//     {id:4, name:"Elizabeth",age: 14},
//     {id:5, name:"jean",age: 1020},
//     {id:6, name:"Pierre",age: 30},
//   ]

//   const [ family, setFamily] = useState (obj)

//   return (
//     <View style={styles.container}>
//       {
//         family.map(member => {
//           return(
//             <View key={member.id } style={styles.list}>
//               <Text style={styles.textList}> Nom:{member.name} | Age:{member.age}</Text>
//             </View>
//           )
//         })
//       }
//     </View>
//   )
// }

// const styles=StyleSheet.create({
//   container:{
//     flex:1,
//     alignItems:"stretch",
//     justifyContent:"flex-end",
//   },
//   list:{
//     backgroundColor:"deepskyblue",
//     justifyContent:"center",
//     alignItems:"center",
//     margin:10
//   },
//   textList:{
//     color:"#fff",
//     padding:12,
//     fontSize:20
//   }
// })






// /**
// * ! 67. Exercice 3
// */


// import React, { useState } from "react";
// import {View,Text, StyleSheet} from "react-native";

// export default function App() {
//   const obj = [
//     {id:1, name:"Stan",age: 45},
//     {id:2, name:"Elodie",age: 45},
//     {id:3, name:"Elenora",age: 18},
//     {id:4, name:"Elizabeth",age: 14},
//     {id:5, name:"jean",age: 1020},
//     {id:6, name:"Pierre",age: 30},
//   ]

//   const [ family, setFamily] = useState (obj)

//   return (
//     <View style={styles.container}>
//       {
//         family.map(member => {
//           return(
//             <View key={member.id } style={styles.list}>
//               <Text style={styles.textList}> Nom:{member.name} | Age:{member.age}</Text>
//             </View>
//           )
//         })
//       }
//     </View>
//   )
// }

// const styles=StyleSheet.create({
//   container:{
//     flex:1,
//     alignItems:"stretch",
//     justifyContent:"flex-start",
//     marginTop: 20
//   },
//   list:{
//     backgroundColor:"deepskyblue",
//     justifyContent:"center",
//     alignItems:"center",
//     margin:10
//   },
//   textList:{
//     color:"#fff",
//     padding:12,
//     fontSize:20
//   }
// })




// /**
// * ! 68. Exercice 4
// */


// import React, { useState } from "react";
// import {View,Text, StyleSheet} from "react-native";

// export default function App() {
//   const obj = [
//     {id:1, name:"Stan",age: 45},
//     {id:2, name:"Elodie",age: 45},
//     {id:3, name:"Elenora",age: 18},
//     {id:4, name:"Elizabeth",age: 14},
//     {id:5, name:"jean",age: 1020},
//     {id:6, name:"Pierre",age: 30},
//   ]

//   const [ family, setFamily] = useState (obj)

//   return (
//     <View style={styles.container}>
//       {
//         family.map(member => {
//           return(
//             <View key={member.id } style={styles.list}>
//               <Text style={styles.textList}> Nom:{member.name} | Age:{member.age}</Text>
//             </View>
//           )
//         })
//       }
//     </View>
//   )
// }

// const styles=StyleSheet.create({
//   container:{
//     flex:1,
//     alignItems:"stretch",
//     marginTop:20
//   },
//   list:{
//     backgroundColor:"deepskyblue",
//     justifyContent:"center",
//     alignItems:"center",
//     margin:10,
//     flexGrow:  1,
//   },
//   textList:{
//     color:"#fff",
//     padding:12,
//     fontSize:20
//   }
// })



// /**
// * ! 69. Exercice 5
// */


// import React, { useState } from "react";
// import {View,Text, StyleSheet,ScrollView} from "react-native";

// export default function App() {
//   const obj = [
//     {id:1, name:"Stan",age: 45},
//     {id:2, name:"Elodie",age: 45},
//     {id:3, name:"Elenora",age: 18},
//     {id:4, name:"Elizabeth",age: 14},
//     {id:5, name:"jean",age: 1020},
//     {id:6, name:"Pierre",age: 30},
//   ]

//   const [ family, setFamily] = useState (obj)

//   return (
//     <View style={styles.container}>
//       <ScrollView>
//       {

//         family.map(member => {
//           return(
//             <View key={member.id } style={styles.list}>
//               <Text style={styles.textList}> Nom:{member.name} | Age:{member.age}</Text>
//             </View>
//           )
//         })
//       }
//       </ScrollView>
//     </View>
//   )
// }

// const styles=StyleSheet.create({
//   container:{
//     flex:1,
//     alignItems:"stretch",
//     marginTop:20
//   },
//   list:{
//     backgroundColor:"deepskyblue",
//     justifyContent:"center",
//     alignItems:"center",
//     margin:10
//   },
//   textList:{
//     color:"#fff",
//     padding:40,
//     fontSize:40
//   }
// })







// /**
// * ! 70. Exercice 6
// * ! 71. Exercice 7
// * ! 72. Exercice 7
// *
// */


// import React, { useState } from "react";
// import {View,Text, StyleSheet,ScrollView, RefreshControl, Alert} from "react-native";

// export default function App() {
//   const obj = [
//     {id:1, name:"Stan",age: 45},
//     {id:2, name:"Elodie",age: 45},
//     {id:3, name:"Elenora",age: 18},
//     {id:4, name:"Elizabeth",age: 14},
//     {id:5, name:"jean",age: 1020},
//     {id:6, name:"Pierre",age: 30},
//     {id:7, name:"Jean",age: 30},
//     {id:8, name:"Luis",age: 30},
//     {id:9, name:"Marie",age: 30},
//     {id:10, name:"Anne",age: 30},
//   ]

//   const [ family, setFamily] = useState (obj);
//   const [ refresh, setRefresh] = useState (false);
  

//   const onRefresh = ()  =>{
//     setRefresh(true);
//     Alert.alert(
//       'info',
//       'La list a été rafraîchie'
//       [
//         {
//           text: 'OK',
//           onPress:()=>console.warn('La list a été rafraîchie'),
//           style:'cancel'
//         }
//       ]
//     );
//     setRefresh(false);
//   }

//   return (
//     <View style={styles.container}>
//       <ScrollView
//         refreshControl={
//           <RefreshControl
//             refreshing={refresh}
//             onRefresh={onRefresh}
//             colors={['red']}
//           />

//         }
//       >
//       {

//         family.map(member => {
//           return(
//             <View key={member.id } style={styles.list}>
//               <Text style={styles.textList}> Nom:{member.name} | Age:{member.age}</Text>
//             </View>
//           )
//         })
//       }
//       </ScrollView>
//     </View>
//   )
// }

// const styles=StyleSheet.create({
//   container:{
//     flex:1,
//     alignItems:"stretch",
//     marginTop:20
//   },
//   list:{
//     backgroundColor:"deepskyblue",
//     justifyContent:"center",
//     alignItems:"center",
//     margin:10
//   },
//   textList:{
//     color:"#fff",
//     padding:20,
//     fontSize:20
//   }
// })








// /**
// * ! 73. Exercice 9
// * ! 74. Exercice 10
// */


// import React, { useState } from "react";
// import {View,Text, StyleSheet, FlatList} from "react-native";

// export default function App() {
//   const obj = [
//     {name:"Stan",age: 45},
//     {name:"Elodie",age: 45},
//     {name:"Elenora",age: 18},
//     {name:"Elizabeth",age: 14},
//     {name:"jean",age: 1020},
//     {name:"Pierre",age: 30},
//     {name:"Jean",age: 30},
//     {name:"Luis",age: 30},
//     {name:"Marie",age: 30},
//     {name:"Anne",age: 30},
//   ]

//   const [ family, setFamily] = useState (obj);
  



//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={family}
//         renderItem={({item})=>{
//           return(
//             <View style={styles.list}>
//               <Text style={styles.textList}> Nom: {item.name} | Age: {item.age}</Text>
//            </View>
//           )
//         }}
//         keyExtractor={(item,index) => index.toString()}
//       />
//     </View>
//   )
// }

// const styles=StyleSheet.create({
//   container:{
//     flex:1,
//     alignItems:"stretch",
//     marginTop:20
//   },
//   list:{
//     backgroundColor:"deepskyblue",
//     justifyContent:"center",
//     alignItems:"center",
//     margin:10
//   },
//   textList:{
//     color:"#fff",
//     padding:20,
//     fontSize:20
//   }
// })












// /**
// * ! 75. Exercice 11
// */


// import React, { useState } from "react";
// import {View,Text, StyleSheet, FlatList, RefreshControl} from "react-native";

// export default function App() {
//   const obj = [
//     {name:"Stan",age: 45},
//     {name:"Elodie",age: 45},
//     {name:"Elenora",age: 18},
//     {name:"Elizabeth",age: 14},
//     {name:"jean",age: 1020},
//     {name:"Pierre",age: 30},
//     {name:"Jean",age: 30},
//     {name:"Luis",age: 30},
//     {name:"Marie",age: 30},
//     {name:"Anne",age: 30},
//   ]

//   const [ family, setFamily] = useState (obj);
//   const [ invert, setInvert] = useState (false);


//   const onRefresh = () =>  setInvert(!invert);




//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={family}
//         renderItem={({item})=>{
//           return(
//             <View style={styles.list}>
//               <Text style={styles.textList}> Nom: {item.name} | Age: {item.age}</Text>
//            </View>
//           )
//         }}
//         keyExtractor={(item,index) => index.toString()}
//         horizontal
//         inverted={invert}
//         refreshControl={
//           <RefreshControl
//             refreshing={false}
//             onRefresh={onRefresh}
//           />
//         }
//       />
//     </View>
//   )
// }

// const styles=StyleSheet.create({
//   container:{
//     flex:1,
//     alignItems:"stretch",
//     marginTop:20
//   },
//   list:{
//     backgroundColor:"deepskyblue",
//     justifyContent:"center",
//     alignItems:"center",
//     margin:10
//   },
//   textList:{
//     color:"#fff",
//     padding:20,
//     fontSize:20
//   }
// })





// /**
// * ! 76. Exercice 12
// */


// import React, { useState } from "react";
// import {View,Text, StyleSheet,SectionList} from "react-native";

// export default function App() {
  
// const obj = [
//   {
//     role: "Père",
//     data: ["Stan", 45]
//   },
//   {
//     role: "Mère",
//     data: ["Francine", 45]
//   },
//   {
//     role: "Fille",
//     data: ["hayley", 18]
//   },
//   {
//     role: "Fils",
//     data: ["Roger", 13]
//   },
//   {
//     role: "Poisson",
//     data: ["Klaus", 3]
//   },
// ]

//   const [ family, setFamily] = useState (obj);




//   return (
//     <View style={styles.container}>
//       <SectionList
//       sections = { family}
//       keyExtractor={(item,index) => index.toString()}
//       renderSectionHeader={({section})=>(
//         <View style={styles.list}>
//           <Text style={styles.textList}>{section.role} </Text>
//         </View>
//       )}
//       renderItem={({item})=>{
//         return(
//           <View>
//             <Text style={styles.textListData}>{ item }</Text>
//          </View>
//         )
//       }}
//       />
//     </View>
//   )
// }

// const styles=StyleSheet.create({
//   container:{
//     flex:1,
//     alignItems:"stretch",
//     marginTop:20
//   },
//   list:{
//     backgroundColor:"deepskyblue",
//     justifyContent:"center",
//     alignItems:"center",
//     margin:10
//   },
//   textList:{
//     color:"#fff",
//     padding:20,
//     fontSize:20
//   },
//   textListData:{
//     color:'grey',
//     padding: 9,
//     fontSize:19,
//     textAlign:"center"
//   }
// })








// /**
// * ! 77. Exercice 13
// */


// import React, {useState} from 'react';
// import { View , Text, Button, FlatList, StyleSheet,Modal,Pressable } from "react-native";

// import Product from './components/Product';
// import AddPoduct from "./components/AddProduct";
// import DismissKeyboard from './components/DismissKeyboard';

// export default function App() {
  
//     const [myProducts, setMyProducts] = useState([]);
//     const [showModal, setShowModal] = useState(true);
  
//     const submitHandler = (product) => {
//       if(product.length > 1 ){
//         setMyProducts(currentMyProducts => {
//           return currentMyProducts.filter(product=> product.key != key)
//         } );
//       }else {
//         setShowModal(true)
//       }
  
//     }
  
//     const deleteProduct = (key) => {
//       setMyProducts(currentMyProducts => {
//         return currentMyProducts.filter(product=> product.key != key)
//       } )
//     }
  
//       return(
//         <View style={styles.container}>
  
//           <Modal
//             visible={showModal}
//             onRequestClose={() => setShowModal(false)}
//             animationType="slide"
//             transparent
//           >
//            <View style={styles.modalContainer}>
//               <View style={styles.modalContent}>
//                 <View style={styles.modalHeader}>
//                   <Text style={styles.modalHeaderText}>OUPS!</Text>
//                 </View>
//                 <View style={styles.modalBody}>
//                   <Text style={styles.modalBodyText}>merci d'indiquer minimum 2 caractères</Text>
//                 </View>
//                 <View style={styles.modalFooter}>
//                   <Pressable 
//                     style={styles.pressableBtnModal}
//                     onPress={()=>setShowModal(false)}
//                     >
//                     <Text style={styles.modalBtn}>Ok</Text>
//                   </Pressable>
//                 </View>
//               </View>
  
//            </View>
//           </Modal>
//           <AddPoduct submitHandler={submitHandler}/>
  
//           <FlatList
//             data={myProducts}
//             renderItem={({item}) => (
//               <Products 
//                 name= {item.name}
//                 idString={item.key}
//                 deleteProduct={deleteProduct}
//                 />)}
//           />
//         </View>
//       );
//     }
        
  
//   const styles = StyleSheet.create({
//     container:{
//       padding: 40,
//       paddingTop:60,
//     },
//     modalContainer:{
//       flex: 1,
//       justifyContent: "center",
//       alignItems: "center",
//       backgroundColor:"rgba(0,0,0,0.2)"
//     },
//     modalContent:{
//       backgroundColor:"#fff",
//       width: "90%",
//       height: 250,
//       borderRadius:15,
//       alignItems:"center",
//     },
//     modalHeader:{
//       width:"100%",
//       padding:16,
//       alignItems:"center",
//       borderTopLeftRadius: 15,
//       borderTopRightRadius: 15,
//       borderBottomWidth: 1,
//       borderColor:'lightgray',
//     },
//     modalHeaderText:{
//       color:"grey",
//       fontSize:17,
//     },
//     modalBody:{
//       flex: 1,
//       width:"100%",
//       alignItems:"center",
//       justifyContent:"center",
//     },
//     modalBodyText:{
//       fontSize:17
//     },
//     modalFooter:{
     
//       width:"100%",
  
//     },
//     pressableBtnModal:{
//       backgroundColor:'#20b2aa',
//       borderBottomLeftRadius:15,
//       borderBottomRightRadius:15,
//     },
//     modalBtn:{
//       fontSize:17,
//       color:"#fff",
//       textAlign:"center",
//       padding:16,
//     }
//   });












// /**
//  * ! ! 78. Le module Keyboard 
// */


// import React, {useState} from 'react';
// import { View , Text, Button, FlatList, StyleSheet,Modal,Pressable } from "react-native";

// import Product from './components/Product';
// import AddPoduct from "./components/AddProduct";
// import DismissKeyboard from './components/DismissKeyboard';

// export default function App() {
  
//     const [myProducts, setMyProducts] = useState([]);
//     const [showModal, setShowModal] = useState(true);
  
//     const submitHandler = (product) => {
//       if(product.length > 1 ){
//         setMyProducts(currentMyProducts => {
//           return currentMyProducts.filter(product=> product.key != key)
//         } );
//       }else {
//         setShowModal(true)
//       }
  
//     }
  
//     const deleteProduct = (key) => {
//       setMyProducts(currentMyProducts => {
//         return currentMyProducts.filter(product=> product.key != key)
//       } )
//     }
  
//       return(
//         <DismissKeyboard>
//           <View style={styles.container}>
    
//             <Modal
//               visible={showModal}
//               onRequestClose={() => setShowModal(false)}
//               animationType="slide"
//               transparent
//             >
//             <View style={styles.modalContainer}>
//                 <View style={styles.modalContent}>
//                   <View style={styles.modalHeader}>
//                     <Text style={styles.modalHeaderText}>OUPS!</Text>
//                   </View>
//                   <View style={styles.modalBody}>
//                     <Text style={styles.modalBodyText}>merci d'indiquer minimum 2 caractères</Text>
//                   </View>
//                   <View style={styles.modalFooter}>
//                     <Pressable 
//                       style={styles.pressableBtnModal}
//                       onPress={()=>setShowModal(false)}
//                       >
//                       <Text style={styles.modalBtn}>Ok</Text>
//                     </Pressable>
//                   </View>
//                 </View>
    
//             </View>
//             </Modal>
//             <AddPoduct submitHandler={submitHandler}/>
    
//             <FlatList
//               data={myProducts}
//               renderItem={({item}) => (
//                 <Products 
//                   name= {item.name}
//                   idString={item.key}
//                   deleteProduct={deleteProduct}
//                   />)}
//             />
//           </View>
//         </DismissKeyboard>
//       );
//     }
        
  
//   const styles = StyleSheet.create({
//     container:{
//       padding: 40,
//       paddingTop:60,
//       flex: 1,
//     },
//     modalContainer:{
//       flex: 1,
//       justifyContent: "center",
//       alignItems: "center",
//       backgroundColor:"rgba(0,0,0,0.2)"
//     },
//     modalContent:{
//       backgroundColor:"#fff",
//       width: "90%",
//       height: 250,
//       borderRadius:15,
//       alignItems:"center",
//     },
//     modalHeader:{
//       width:"100%",
//       padding:16,
//       alignItems:"center",
//       borderTopLeftRadius: 15,
//       borderTopRightRadius: 15,
//       borderBottomWidth: 1,
//       borderColor:'lightgray',
//     },
//     modalHeaderText:{
//       color:"grey",
//       fontSize:17,
//     },
//     modalBody:{
//       flex: 1,
//       width:"100%",
//       alignItems:"center",
//       justifyContent:"center",
//     },
//     modalBodyText:{
//       fontSize:17
//     },
//     modalFooter:{
     
//       width:"100%",
  
//     },
//     pressableBtnModal:{
//       backgroundColor:'#20b2aa',
//       borderBottomLeftRadius:15,
//       borderBottomRightRadius:15,
//     },
//     modalBtn:{
//       fontSize:17,
//       color:"#fff",
//       textAlign:"center",
//       padding:16,
//     }
//   });















// /**
//  * ! 79. Le module Keyboard 
// */


// import React from 'react';
// import { View , StyleSheet,Text } from "react-native";
// import Example from './Example';


// export default function App() {
  

//       return(
        
//           <View style={styles.container}>
//               <Example></Example>
            
//           </View>
       
//       );
//     }
        
  
//   const styles = StyleSheet.create({
//     container:{
//       padding: 40,
//       paddingTop:60,
//       flex: 1,
//     },
//     modalContainer:{
//       flex: 1,
//       justifyContent: "center",
//       alignItems: "center",
//       backgroundColor:"rgba(0,0,0,0.2)"
//     },
//     modalContent:{
//       backgroundColor:"#fff",
//       width: "90%",
//       height: 250,
//       borderRadius:15,
//       alignItems:"center",
//     },
//     modalHeader:{
//       width:"100%",
//       padding:16,
//       alignItems:"center",
//       borderTopLeftRadius: 15,
//       borderTopRightRadius: 15,
//       borderBottomWidth: 1,
//       borderColor:'lightgray',
//     },
//     modalHeaderText:{
//       color:"grey",
//       fontSize:17,
//     },
//     modalBody:{
//       flex: 1,
//       width:"100%",
//       alignItems:"center",
//       justifyContent:"center",
//     },
//     modalBodyText:{
//       fontSize:17
//     },
//     modalFooter:{
     
//       width:"100%",
  
//     },
//     pressableBtnModal:{
//       backgroundColor:'#20b2aa',
//       borderBottomLeftRadius:15,
//       borderBottomRightRadius:15,
//     },
//     modalBtn:{
//       fontSize:17,
//       color:"#fff",
//       textAlign:"center",
//       padding:16,
//     }
//   });









// /**
// * ! 80.Afficher TextInput dans un Modal suite à onPress sur un bouton
// */


// import React, {useState} from "react";
// import { 
//   View,
//   StyleSheet,
//   FlatList,
//   Modal,
//   Text,
//   Pressable,
//   DismissKeyboard,
//   Image,
//   ImageBackground
//  } from "react-native";
// import Products from "./components/Product";
// import AddPoduct from "./components/AddProduct";
// import { Button } from "react-native";



  
// export default function App() {
  
//   const [myProducts, setMyProducts] = useState([]);
//   const [showModal, setShowModal] = useState(true);
//   const [displayModal, setDisplayModal] = useState(false);

//   const submitHandler = (product) => {

//   setDisplayModal(false);


//   if(product.length > 1 ){
//     const idString = Date.now().toString();
//     setMyProducts(currentMyProducts => [{key: idString, name:product}, ...currentMyProducts] );
//   }else {
//     setShowModal(true)
//   }

// }


//   const deleteProduct = (key) => {
//     setMyProducts(currentMyProducts => {
//       return currentMyProducts.filter(product=> product.key != key)
//     } )
//   }


//   const cancelNewProduct =() => {
//     setDisplayModal(false);
//   }

//     return(
//         <ImageBackground
//           style={styles.container}
//           source={{uri:'https://media.istockphoto.com/id/1333785971/photo/blank-white-crumpled-and-creased-paper-poster-texture.webp?b=1&s=612x612&w=0&k=20&c=qn2siwq3SAwYXmPDUG1YEGdw9YVMDndvXD1U9bAnNJU='}}
//           >

//           <Modal
//             visible={showModal}
//             onRequestClose={() => setShowModal(false)}
//             animationType="slide"
//             transparent
//           >
//           <View style={styles.modalContainer}>
//               <View style={styles.modalContent}>
//                 <View style={styles.modalHeader}>
//                   <Text style={styles.modalHeaderText}>OUPS!</Text>
//                 </View>
//                 <View style={styles.modalBody}>
//                   <Image
//                     // source={require('./assets/cross.png')}
//                     source={{uri:'https://cdn.pixabay.com/photo/2013/07/12/13/50/road-sign-147409_640.png'}}
//                     style= {styles.cross}
//                   />
//                   <Text style={styles.modalBodyText}>merci d'indiquer minimum 2 caractères</Text>
//                 </View>
//                 <View style={styles.modalFooter}>
//                   <Pressable 
//                     style={styles.pressableBtnModal}
//                     onPress={()=>setShowModal(false)}
//                     >
//                     <Text style={styles.modalBtn}>Ok</Text>
//                   </Pressable>
//                 </View>
//               </View>

//           </View>
//           </Modal>
//           <Button
//             title="Nouveau produit"
//             onPress={()=> setDisplayModal(true)}
//           />
//           <AddPoduct
//             submitHandler={submitHandler}
//             displayModal={displayModal}
//             cancelNewProduct={cancelNewProduct}
//             />

//           <FlatList
//             data={myProducts}
//             renderItem={({item}) => (
//               <Products 
//                 name= {item.name}
//                 idString={item.key}
//                 deleteProduct={deleteProduct}
//                 />)}
//           />
//         </ImageBackground>
//     );
//   }
      

// const styles = StyleSheet.create({
//   container:{
//     flex: 1,
//     padding: 40,
//     paddingTop:60,
//   },
//   modalContainer:{
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor:"rgba(0,0,0,0.2)"
//   },
//   modalContent:{
//     backgroundColor:"#fff",
//     width: "90%",
//     height: 300,
//     borderRadius:15,
//     alignItems:"center",
//   },
//   modalHeader:{
//     width:"100%",
//     padding:16,
//     alignItems:"center",
//     borderTopLeftRadius: 15,
//     borderTopRightRadius: 15,
//     borderBottomWidth: 1,
//     borderColor:'lightgray',
//   },
//   modalHeaderText:{
//     color:"grey",
//     fontSize:17,
//   },
//   modalBody:{
//     flex: 1,
//     width:"100%",
//     alignItems:"center",
//     justifyContent:"center",
//   },
//   modalBodyText:{
//     fontSize:17
//   },
//   modalFooter:{
   
//     width:"100%",

//   },
//   pressableBtnModal:{
//     backgroundColor:'#20b2aa',
//     borderBottomLeftRadius:15,
//     borderBottomRightRadius:15,
//   },
//   modalBtn:{
//     fontSize:17,
//     color:"#fff",
//     textAlign:"center",
//     padding:16,
//   },
//   cross:{
//     width:90,
//     height:90,
//   }
// });













/**
* ! 87. Custom Button avec le props children et TouchableOpacity
*/


import React, {useState} from "react";
import { 
  View,
  StyleSheet,
  FlatList,
  Modal,
  Text,
  Pressable,
  Image,
  ImageBackground
 } from "react-native";
import Products from "./components/Product";
import AddPoduct from "./components/AddProduct";
import { Button } from "react-native";
import BaseComponent from "./components/ButtonComponent";
import ButtonComponent from "./components/ButtonComponent";



  
export default function App() {
  
  const [myProducts, setMyProducts] = useState([]);
  const [showModal, setShowModal] = useState(true);
  const [displayModal, setDisplayModal] = useState(false);

  const submitHandler = (product) => {

  setDisplayModal(false);


  if(product.length > 1 ){
    const idString = Date.now().toString();
    setMyProducts(currentMyProducts => [{key: idString, name:product}, ...currentMyProducts] );
  }else {
    setShowModal(true)
  }

}


  const deleteProduct = (key) => {
    setMyProducts(currentMyProducts => {
      return currentMyProducts.filter(product=> product.key != key)
    } )
  }


  const cancelNewProduct =() => {
    setDisplayModal(false);
  }

    return(
        <ImageBackground
          style={styles.container}
          source={{uri:'https://media.istockphoto.com/id/1333785971/photo/blank-white-crumpled-and-creased-paper-poster-texture.webp?b=1&s=612x612&w=0&k=20&c=qn2siwq3SAwYXmPDUG1YEGdw9YVMDndvXD1U9bAnNJU='}}
          >

          <Modal
            visible={showModal}
            onRequestClose={() => setShowModal(false)}
            animationType="slide"
            transparent
          >
          <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <View style={styles.modalHeader}>
                  <Text style={styles.modalHeaderText}>OUPS!</Text>
                </View>
                <View style={styles.modalBody}>
                  <Image
                    // source={require('./assets/cross.png')}
                    source={{uri:'https://cdn.pixabay.com/photo/2013/07/12/13/50/road-sign-147409_640.png'}}
                    style= {styles.cross}
                  />
                  <Text style={styles.modalBodyText}>merci d'indiquer minimum 2 caractères</Text>
                </View>
                <View style={styles.modalFooter}>
                  <Pressable 
                    style={styles.pressableBtnModal}
                    onPress={()=>setShowModal(false)}
                    >
                    <Text style={styles.modalBtn}>Ok</Text>
                  </Pressable>
                </View>
              </View>

          </View>
          </Modal>

          <ButtonComponent
             onPressHandler={()=> setDisplayModal(true)}
             style={styles.addProductBtn}
          >
            Nouveau produit

          </ButtonComponent>
          <AddPoduct
            submitHandler={submitHandler}
            displayModal={displayModal}
            cancelNewProduct={cancelNewProduct}
            />

          <FlatList
            data={myProducts}
            renderItem={({item}) => (
              <Products 
                name= {item.name}
                idString={item.key}
                deleteProduct={deleteProduct}
                />)}
          />
        </ImageBackground>
    );
  }
      

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 40,
    paddingTop:60,
  },
  modalContainer:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"rgba(0,0,0,0.2)"
  },
  modalContent:{
    backgroundColor:"#fff",
    width: "90%",
    height: 300,
    borderRadius:15,
    alignItems:"center",
  },
  modalHeader:{
    width:"100%",
    padding:16,
    alignItems:"center",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomWidth: 1,
    borderColor:'lightgray',
  },
  modalHeaderText:{
    color:"grey",
    fontSize:17,
  },
  modalBody:{
    flex: 1,
    width:"100%",
    alignItems:"center",
    justifyContent:"center",
  },
  modalBodyText:{
    fontSize:17
  },
  modalFooter:{
   
    width:"100%",

  },
  pressableBtnModal:{
    backgroundColor:'#20b2aa',
    borderBottomLeftRadius:15,
    borderBottomRightRadius:15,
  },
  modalBtn:{
    fontSize:17,
    color:"#fff",
    textAlign:"center",
    padding:16,
  },
  cross:{
    width:90,
    height:90,
  },
  addProductBtn:{
    backgroundColor:"darkred",
    padding:20,
    borderRadius:30,
    borderWidth:3,
    borderColor:"white",
  }
});

