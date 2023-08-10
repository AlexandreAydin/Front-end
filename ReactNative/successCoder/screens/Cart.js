import React from 'react'
import { Text, StyleSheet, View, FlatList, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import EmptyMsg from '../components/EmptyMsg'
import CoursesInCart from '../components/CoursesInCart'
import { addPayment} from '../redux/actions/actionPayment'
import globalStyles from '../Styles/globalStyles'
import { removeCourseCart } from '../redux/actions/RemoveCourseCart'


const Cart = () => {

  dispatch= useDispatch();

  const cartCourses = useSelector (state => state.cart.cartCourses); 
  const total =  useSelector (state => state.cart.total);

  const handlepayment = (cartCourses,total) => {
    dispatch(addPayment(cartCourses,total));
    alert ('Paiement effectué avec succées')
  }


    return(
      <View style={styles.cartContainer}>

        {
          cartCourses.length > 0 ? (
              <View>
                <FlatList
                data={cartCourses}
                keyExtractor={item=> item.id}
                  renderItem={({item}) => (  
                    <CoursesInCart 
                      title={item.title}
                      price={item.price}
                      onDelete= {() => dispatch(removeCourseCart(item.id))}
                    />
                  )}
                />

                <View style={styles.totalContainer}>
                    <Text style={styles.totalText}>
                      Total: 
                        <Text style={styles.totalPrice}>
                            {total.toFixed(2)} €                  
                        </Text>
                    </Text>
                </View>
                
                <TouchableOpacity
                  onPress={() => handlepayment(cartCourses,total)}
                >
                  <View style={styles.btnAddPayement}>
                    <Text style={styles.btnAddPayementText}>Payer</Text>
                  </View>

                </TouchableOpacity>

              </View>
          )
          :
          (
            <EmptyMsg text ="Votre panier est vide" />
          )
        }
      </View>
    ) 
  }


const styles = StyleSheet.create({
  cartContainer:{
    margin : 20,
  },
  totalContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent: "space-between",
    marginTop:19
  },
  totalText:{
    fontWeight:'bold',
    fontSize:19
    },
    totalPrice:{
      color:globalStyles.green
    },
    btnAddPayement:{
      borderRadius:6,
      paddingVertical:9,
      paddingHorizontal:25,
      backgroundColor: globalStyles.orange
    },
    btnAddPayementText:{
      fontSize:19,
    }


})

export default Cart
