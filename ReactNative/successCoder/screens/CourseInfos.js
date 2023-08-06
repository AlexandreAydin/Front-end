import React, {useEffect} from 'react'
import { Text, StyleSheet, View  } from 'react-native'
import { useSelector } from 'react-redux';



const CourseInfos = ({navigation,route}) => {
   const courseId = route.params.courseId;

  // const selectedCourse = useSelector( state=> state.courses.existingCourses.find(course => course.id === courseId))


  //  useEffect(()=>{
  //   navigation.setOptions({
  //     title: selectedCourse.title
  //   })
  //  },[navigation])

    return(
      <View>
        <Text>CourseInfos</Text>
      </View>
    ) 
  }


const styles = StyleSheet.create({})

export default CourseInfos
