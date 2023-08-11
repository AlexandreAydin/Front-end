import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { FlatList, Alert, Text, TouchableOpacity, View } from 'react-native'
import { deleteCourse } from '../redux/actions/actionDeleteCourse'
import EmptyMsg from '../components/EmptyMsg'
import { AntDesign } from '@expo/vector-icons';
import globalStyles from '../Styles/globalStyles'


const UserCourses = ({navigation}) => {

    const dispath = useDispatch();

    const handleDeleteCourse = (courseId) => {
        Alert.alert(
            'ATTENTION',
            'Voulez-vous supprimer ce cours?'
            [
                {text:"Non"},
                {
                    text : 'OUI',
                    onPress: () => dispath(deleteCourse(courseId)),
                }
            ]
            )
        
    }

    const loggedInmemberCourses = useSelector(state=> state.courses.loggedInmemberCourses)

   if (loggedInmemberCourses.length > 0 ) {
        return (
            <FlatList
                data = {loggedInmemberCourses}
                keyExtractor={item => item.id}
                renderItem= {(item) => (
                    <View style = {styles.courseContainer}>
                        <View style = {styles.courseInfos}>
                            <Text numberOfLines={1} style = {styles.courseTitle}>{item.title}</Text>
                            <Text style = {styles.coursePrice}>{item.price.toFiexed(2)} €</Text>
                        </View>
                        <View style={styles.btnIcons}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Edit',{
                                    courseId: item.id
                                })}
                                style={styles.touchableIcon}
                            >
                                <AntDesign name="dedit" size={24} color={globalStyles.green} />    
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => handleDeleteCourse(item.id)}
                                style={styles.touchableIcon}
                            >
                                <AntDesign name="delete" size={24} color={globalStyles.green} />   
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />
        )
   }

   return <EmptyMsg text = 'Pas de cours à afficher' />
}

const styles=StyleSheet.create({
    courseContainer: { 
        backgroundColor: globalStyles.white,
        borderRadius: 8,
        marginVertical :9,
        marginHorizantal: 17, 
        paddingTop:15,
        paddingBottom:9, 
        paddingRight:9,
        paddingLeft: 9
    },
    courseInfos:{
        flexDirection:'row',
        justifyContent:"space-between",
        paddingVertical: 9,
        paddingHorizontal: 9,
    },
    courseTitle:{
        width:'80%'
    },
    coursePrice:{
        color: globalStyles.green
    },
    btnIcons:{
        flexDirection:"row",
        justifyContent: "space-between"
    },
    touchableIcon:{
        padding:9
    }
})
export default UserCourses

