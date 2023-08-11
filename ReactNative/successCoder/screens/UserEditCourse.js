import React, {useState} from 'react'
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import globalStyles from '../Styles/globalStyles'


const UserEditCourse = ({route}) => {

    const [title, setTitle] = useState('');
    const [img, setImg] = useState('');
    const [price, setPrice] = useState('');
    const [desc, setDesc] = useState('');

    const courseId= route.params.courseId;
    
    return (
     <ScrollView>
        <View style={styles.formcontainer}> 
          <View style={styles.formcontrol}>
            <Text style={styles.label}> Titre </Text>
            <TextInput
              value={title}
              onChangeText={text =>setTitle(text)}
              style= {styles.input}
            />
          </View>
          <View style={styles.formcontrol}>
            <Text style={styles.label}>Image (URL)</Text>
             <TextInput
              value={img}
              onChangeText={text =>setImg(text)}
              style= {styles.input}
            />
          </View>
          <View style={styles.formcontrol}>
            <Text style={styles.label}>Price</Text>
            <TextInput
              value={price}
              onChangeText={text =>setPrice(text)}
              style= {styles.input}
            />
          </View>
          <View style={styles.formcontrol}>
            <Text style={styles.label}>Descriptions</Text>
            <TextInput
              value={desc}
              onChangeText={text =>setDesc(text)}
              style= {styles.input}
            />
          </View>
          
          <TouchableOpacity
            onPress={() => alert('Valider')}
          >


          </TouchableOpacity>
        </View>

     </ScrollView>
    )
}

const styles=StyleSheet.create({
  formContainer:{
    backgroundColor: globalStyles.white,
    borderRadius: 9,
    padding: 20,
    margin: 20,
  },
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
  btnContainer :{
    
  }

})
export default UserEditCourse

