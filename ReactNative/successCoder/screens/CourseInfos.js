import React from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'



const CourseInfos = ({route}) => {
   const courseId = route.params.courseId;
    return(
      <View>
        <Text>CourseInfos</Text>
      </View>
    ) 
  }


const styles = StyleSheet.create({})

export default CourseInfos
