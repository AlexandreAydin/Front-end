import React, {useReducer} from 'react'
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import {useSelector, useDispatch} from 'react-redux'
import globalStyles from '../Styles/globalStyles'
import { formReducer } from '../formData/formReducer'
import { editCourse } from '../redux/actions/ActionEditCourse'
import Input from '../components/Input'


const UserEditCourse = ({route, navigation}) => {

  const dispatch = useDispatch();

    const courseId= route.params.courseId;

    const myCourse = useSelector(state=>state.courses.loggedInmemberCourses.find(course => course.id === courseId))

    // const [title, setTitle] = useState(myCourse ? myCourse.title : '');
    // const [img, setImg] = useState(myCourse ? myCourse.img :'');
    // const [price, setPrice] = useState('');
    // const [desc, setDesc] = useState(myCourse ? myCourse.desc :'');

    formInitialState= {
      inputValues:{
        title: myCourse ? myCourse.title : '',
        img:myCourse ? myCourse.img :'',
        price: '',
        desc:myCourse ? myCourse.desc :'',
      },
      isValidInput: {
        title: myCourse ? true: false,
        img:myCourse ? true: false,
        price: myCourse ? true: false,
        desc:myCourse ? true: false,
      },
      isValidForm: myCourse ? true : false,
    }

    cont [formState,formActionsDispatch]  =  useReducer(formReducer, formInitialState)

    const handlePress = ()  => {

      const {title, img, price, desc } = formState.inputValues;

      if (courseId) {
        //mise a jour
        dispatch(editCourse(courseId, title, img, desc));
      } else {
        // création
        dispatch(createCourse(title, description, img, +price,))
      }

      navigation.goBack();
    }
    
    return (
     <ScrollView>
        <View style={styles.formcontainer}> 
          
          <Input />

          <View style={styles.formcontrol}>
            <Text style={styles.label}>Image (URL)</Text>
             <TextInput
              value={img}
              onChangeText={text =>setImg(text)}
              style= {styles.input}
            />
          </View>
          { 
            myCourse ? null : (
              <View style={styles.formcontrol}>
                <Text style={styles.label}>Price</Text>
                <TextInput
                  value={price}
                  onChangeText={text =>setPrice(text)}
                  style= {styles.input}
                />
              </View>
            )
          }
          <View style={styles.formcontrol}>
            <Text style={styles.label}>Descriptions</Text>
            <TextInput
              value={desc}
              onChangeText={text =>setDesc(text)}
              style= {styles.input}
            />
          </View>
          
          <TouchableOpacity
            onPress={ handlePress}
          >
            <View style={styles.btnContainer}>
              <Text style={styles.btnText}> Valider</Text>
            </View>

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
  btnContainer :{
    borderRadius: 6,
    paddingVertical: 9,
    paddingHorizontal:9,
    backgroundColor: globalStyles.orange,
    marginTop:20
  },
  btnText:{
    fontSize: 19,
    textAlign: 'center'
  }

})
export default UserEditCourse

