import React from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import CourseItem from '../components/CourseItem'
import EmptyMsg from '../components/EmptyMsg'
import { addToCart } from '../redux/actions/ActionAddToCart'

const Landing = ({navigation}) => {

  const dispatch = useDispatch();

  const handeleAddToCart = (course) => {
    dispatch(addToCart(course));
    alert ('Formation ajoutée au panier')
  }

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
              courseId:item.id,
              title:item.title
            })}
            onAddToCart={() => handeleAddToCart(item)}
          />
        )}
      />
    ) 
  }
  return <EmptyMsg text="Pas de cour afficher"/>
}

const styles = StyleSheet.create({})

export default Landing
