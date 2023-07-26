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






/**
* ! 29. Le Props Children dans React Native
*/

import React from "react";
import { View, Text, StyleSheet } from "react-native";


  
  const Person = ({ name, age }) => {
    return(
      <View>
        {
          age ? (
            // Si ya l'age on affiche  on affiche ceci
            <Text style={styles.textFamily}> Je suis: {name} | age: {age}</Text>
          ) : (
            // Si ya pa lage on affiche ceci 
            <Text style={styles.textFamily}> Je suis: {name}</Text>
          )
        }

      </View>
    )
  }
export default function App() {

return (
    <View style={styles.wrapper}>
        <Person name="Roméo"/>
        <Person name="Jean"/>
        <Person name="Sergio" age="14"/>
    </View>
);
}

const styles = StyleSheet.create({
    wrapper:{marginTop:50, flexDirection:"column"},
    view1:{backgroundColor: "green"},
    view2:{backgroundColor: "red"},
    textFamily:{fontFamily: "Cochin",fontWeight: 'bold'}
}) 