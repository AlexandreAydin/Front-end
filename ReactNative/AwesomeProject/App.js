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








/**
* ! 40. Application Shopping List - Partie 1 
* ! 41. Application Shopping List - Partie 2
* ! 42. Application Shopping List - Partie 3 
* ! 43. Application Shopping List - Partie 4 
* ! 44. Application Shopping List - Partie 5
* ! 45. Application Shopping List - Partie 6 
*/


import React, {useState} from "react";
import { View, Text,StyleSheet, TextInput, Button, FlatList } from "react-native";


  
export default function App() {
  
  const [product, setProduct] = useState('');
  const [myProducts, setMyProducts] = useState([]);

  const inputHandler = (val) => {
    setProduct(val)
  }

  const submitHandler = () => {
    const idString = Date.now().toString();
    setMyProducts(currentMyProducts => [{key: idString, name:product}, ...currentMyProducts] );
    setProduct('');
  }

    return(
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Nouveau produit"
            onChangeText={ inputHandler }
            value={product}
          />
          <Button
            title="valider"
            onPress={submitHandler}
          />
        </View>


        <FlatList
          data={myProducts}
          renderItem={({item}) => <Text style={styles.element} >{item.name}</Text>}
        />
      </View>
    );
  }
      

const styles = StyleSheet.create({
  container:{
    padding: 40,
    paddingTop:60,
  },
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