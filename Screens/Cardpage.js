import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, Image} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../Const/Colors';
import {PrimaryButton} from '../Const/Button';
import {  useDispatch, useSelector } from 'react-redux';
import { removetoCart,addMyProductsToMyCart,DeleteMyCart } from '../ReduxFolder/CartSlics';



const CartScreen = ({navigation}) => {
const CartItems = useSelector(state => state.cart);
const dispatch = useDispatch();


const getTotal = () => {
    let total = 0;
    CartItems.map(item => {
       total = total + item.qty * item.price;
    });
    return total;
 };

 const CartCard = ({item}) => {
    return (
      <View style={style.cartCard}>
        <Image source={item.pics} style={{height: 80, width: 80}} />
        <View
          style={{
            height: 100,
            marginLeft: 10,
            paddingVertical: 20,
            flex: 1,
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>{item.name}</Text>
          <Text style={{fontSize: 17, fontWeight: 'bold'}}>${item.price}</Text>
        </View>
        <View style={{marginRight: 20, alignItems: 'center'}}>
         {item.qty == 0 ? null : (
           <Text style={{fontWeight: 'bold', fontSize: 18}}>{item.qty}</Text>)}
                            
          <View style={style.actionBtn}>
         {item.qty == 0 ? null : (
            <Icon name="remove" 
                        onPress={() => {
                            if (item.qty > 1) {
                                dispatch(removetoCart(item));
                            } else {
                                dispatch(DeleteMyCart(item.id));
                            }
                           }} size={25} color={COLORS.white} />)}
         {item.qty == 0 ? null : (         
            <Icon name="add" size={25} color={COLORS.white} onPress={() => {dispatch(addMyProductsToMyCart(item))}}></Icon>)} 
          </View>
        </View>
     </View>
    );
  };
  return (
    <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
      <View style={style.header}>
        <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} />
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Cart</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 80}}
        data={CartItems}
        renderItem={({item}) => <CartCard item={item} />}
        ListFooterComponentStyle={{paddingHorizontal: 20, marginTop: 20}}
        ListFooterComponent={() => (
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 15,
              }}>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                Total Price
              </Text>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>{'$' + getTotal()}</Text>
            </View>
            <View style={{marginHorizontal: 30}}>
              <PrimaryButton title="CHECKOUT" />
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};



const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  cartCard: {
    height: 100,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionBtn: {
    width: 80,
    height: 30,
    backgroundColor: COLORS.primary,
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default CartScreen;