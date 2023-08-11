import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import {useSelector} from 'react-redux';
import EmptyMsg from '../components/EmptyMsg';
import PaidItems from '../components/PaidItems';


const Payments = () => {

    const payments = useSelector(state => state.payements.payements)

    if (payments.length > 0){
        return (
            <FlatList
                date={payments}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <PaidItems 
                        totalPrice={item.total}
                        date={item.date}
                        courseDetails={item}
                    />
                )}

            />
        )
    }
    return <EmptyMsg text="pa d'achat"  />


}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});



export default Payments