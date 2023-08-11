import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import globalStyles from '../Styles/globalStyles';



const CoursesOverView = (props) => {
    return ( 
        <View style={styles.courseContainer}>
            <Text numberOfLines={1} style={styles.title}>{props.title}</Text>
            <Text style={styles.price}>{props.price} €</Text>
        </View>
    )
}



const styles = StyleSheet.create({
    courseContainer: {
        backgroundColor: globalStyles.white,
        flexDirection:'row',
        justifyContent:'space-between',
        padding: 10,
        margin:9
    },
    title: {
        width:'70%'
    },
    price:{
        color: globalStyles.dimGray
    }

});



export default CoursesOverView;