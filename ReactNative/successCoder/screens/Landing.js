import React from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'
import { UseSelector, useSelector } from 'react-redux'
import CourseItem from '../components/CourseItem'
import EmptyMsg from '../components/EmptyMsg'

const Landing = ({navigation}) => {

  const existingCourses = useSelector(state => state.courses.existingCourses)

  if (existingCourses.length) {
    return(
      <FlatList
        data={existingCourses}
        renderItem={({item})=> (
          <CourseItem
            image={item.image}
            title={item.title}
            price={item.price}
            viewDetails={() => navigation.navigate('Details',{
              courseId:item.id
            })}
            onAddToCart={() => navigation.navigate('Cart')}
          />
        )}
      />
    ) 
  }
  return <EmptyMsg text="Pas de cour afficher"/>
  

}

const styles = StyleSheet.create({})

export default Landing
