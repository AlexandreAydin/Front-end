import React, {useReducer} from 'react'
import { ScrollView, View } from 'react-native'
import {useSelector, useDispatch} from 'react-redux'
import globalStyles from '../Styles/globalStyles'
import { formReducer } from '../formData/formReducer'
import { editCourse } from '../redux/actions/ActionEditCourse'
import BtnForm from '../components/BtnForm'
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

    const inputHandler = ( inputName,text ) => {

      let isValidInput = false;

      if (text.length > 0 ) {
        isValidInput = true;
      }

      formActionsDispatch({

        type: 'INPUT_VALIDATION',
        value: text,
        isValid: isValidInput,
        input : inputName

      })
    }
    
    return (
     <ScrollView>
        <View style={styles.formcontainer}> 
          
          <Input
            label = 'Titre'
            value = {formState.inputValues.title}
            onKeyStroke= {text => inputHandler('title',text)}
          />

          <Input
            label = 'Image (URL)'
            value = {formState.inputValues.img}
            onKeyStroke= {text => inputHandler('img',text)}
          />

          { 
            myCourse ? null : (

              <Input
              label = 'Prix'
              value = {formState.inputValues.price}
              onKeyStroke= {text => inputHandler('price',text)}
              keyboardType='decimal-pad'
            />

            )
          }

          <Input
            label = 'Information'
            value = {formState.inputValues.desc}
            onKeyStroke= {text => inputHandler('desc',text)}
            multiline
            numberOfLines={5}
          />

          <BtnForm
            btnText ={formState.isValidForm ? 'Valider' : 'Veuillez remplire tous les champs'}
            active= {formState.isValidForm ? false : true }
            onHandlePress={handlePress}
          
          />
          

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

})
export default UserEditCourse

