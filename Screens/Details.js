
import React from 'react';
import {SafeAreaView, TouchableOpacity,StyleSheet,Dimensions,ImageBackground,View, Text,Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import COLORS from '../Const/Colors';
import {SecondaryButton} from '../Const/Button';
import {  useDispatch, useSelector } from 'react-redux';
import { addMyProductsToMyCart } from '../ReduxFolder/CartSlics';

const { height } = Dimensions.get("window");

const Details = ({navigation, route}) => {
  const item = route.params;
  const dispatch = useDispatch();
  const CartItems = useSelector(state => state.cart);
  
  const SPACING = 10;

  return (
    <>
    <ScrollView>
    <View>
    <ImageBackground
      style={{
        padding: SPACING * 2,
        height: height / 2.5,
        padding: SPACING * 2,
        paddingTop: SPACING * 2,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
      source={item.pics}>
      <TouchableOpacity
        style={{
          height: SPACING * 4.5,
          width: SPACING * 4.5,
          backgroundColor: COLORS.white,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: SPACING * 2.5,
          marginTop:15
        }}>
          <Icon name="arrow-back-ios" size={SPACING * 2.7} style={{marginLeft:10}} onPress={navigation.goBack}/>   
      </TouchableOpacity>
   <TouchableOpacity
              style={{
                height: SPACING * 4.7,
                width: SPACING * 4.5,
                backgroundColor: COLORS.white,
                justifyContent: "center",
                alignItems: "center",
                marginTop:15,
                borderRadius: SPACING * 2.5}}>
            <View>
               <Text style={{ color:'black', fontSize: 18, fontWeight: 'bold' }}>{CartItems.length}</Text>
            </View>
                 <Icon name="shopping-cart" color={COLORS.dark} size={30} 
                onPress={() => navigation.navigate('cart')}/>
           </TouchableOpacity>      
       </ImageBackground>

       <View
            style={{
              
              padding: SPACING * 2,
              paddingTop: SPACING * 3,
              marginTop: -SPACING * 3,
              borderTopLeftRadius: SPACING * 3,
              borderTopRightRadius: SPACING * 3,
              backgroundColor: COLORS.white,
            }}>
            <View
              style={{
                flexDirection: "row",
                marginBottom: SPACING * 3,
                alignItems: "center",
              }}>
                  <View style={{ width: "70%" }}>
                <Text
                  style={{
                    fontSize: SPACING * 3,
                    color: COLORS.dark,
                    fontWeight: "700",
                  }}>
                    {item.name}
                </Text>
              </View>
            <View
                style={{
                  padding: SPACING,
                  paddingHorizontal: SPACING * 1.5,
                  backgroundColor: COLORS.yellow,
                  flexDirection: "row",
                  borderRadius: SPACING,
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                <Ionicons
                  name="star"
                  color={COLORS.dark}
                  size={SPACING * 1.7}
                />
                <Text
                  style={{
                    fontSize: SPACING * 1.6,
                    fontWeight: "600",
                    marginLeft: SPACING / 2,
                    color: COLORS.dark,
                  }}>4.7</Text>
              </View>
            </View>
          <View style={{ marginVertical: SPACING * 3 }}>
              <Text
                style={{
                  fontSize: SPACING * 2,
                  fontWeight: "700",
                  color: COLORS.dark,
                }}>            
               Ingredients
              </Text>
                  <Text
                    style={{
                      fontSize: SPACING * 1.7,
                      fontWeight: "400",
                      color: COLORS.dark,
                      marginLeft: SPACING,
                    }}>{item.title}
                  </Text>
                </View>
                    </View>
          <Text
              style={{
                fontSize: SPACING * 2.5,
                fontWeight: "700",
                color: COLORS.dark,
                marginHorizontal:20,
                marginBottom: SPACING,
              }}>          
              Description
            </Text>
            <Text
              style={{
                fontSize: SPACING * 1.9,
                fontWeight: "400",
                color: COLORS.dark,
                marginHorizontal:20,
              }}>         
              {item.description}
            </Text>
        </View>
     </ScrollView>

    <SafeAreaView>
    
          
          
        <View style={{ padding: SPACING * 2 }}>
        {item.qty == 0 ? (
          <TouchableOpacity
            style={{
              width: "100%",
              padding: SPACING * 2,
              backgroundColor: COLORS.dark,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: SPACING * 2,
            }} onPress={() => { dispatch(addMyProductsToMyCart(item))}}>
                     
            <Text
              style={{
                fontSize: SPACING * 2,
                color: COLORS.yellow,
                fontWeight: "700",
              }}>
                Add TO Card
            </Text>
            <Text
              style={{
                fontSize: SPACING * 2,
                color: COLORS.yellow,
                fontWeight: "800",
                marginLeft: SPACING / 2,
              }}>  
              $ {item.price}
              
            </Text>
          </TouchableOpacity>) : null}
        </View>
      </SafeAreaView>
   </>
   )
};

export default Details;

/*

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  details: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 60,
    backgroundColor: COLORS.primary,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  iconContainer: {
    backgroundColor: COLORS.white,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  detailsText: {
    marginTop: 10,
    lineHeight: 22,
    fontSize: 16,
    color: COLORS.white,
  },
});

<SafeAreaView style={{backgroundColor: COLORS.white}}>
      <View style={style.header}>
        <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} />
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Details</Text>
        <View style={{ position: 'absolute', height: 30, width: 30, borderRadius: 15, backgroundColor: 'rgba(95,197,123,0.8)', right: 15, alignItems: 'center', justifyContent: 'center', zIndex: 2000 }}>
            <View>
               <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>{CartItems.length}</Text>
            </View>
              <Icon name="shopping-cart" color={COLORS.dark} size={30} 
                onPress={() => navigation.navigate('cart')}/>
              
          </View>
        </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: 280,
          }}>
          <Image source={item.pics} style={{height: 200, width: '100%'}} />
        </View>
        <View style={style.details}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{fontSize: 25, fontWeight: 'bold', color: COLORS.white}}>
              {item.name}
            </Text>
            <View style={style.iconContainer}>
              <Icon name="favorite-border" color={COLORS.primary} size={25} />
            </View>
          </View>
          <Text style={style.detailsText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            and scrambled it to make a type specimen book. It has survived not
            only five centuries.
          </Text>
          <View style={{marginTop: 40, marginBottom: 40}}>
          {item.qty == 0 ? (
             <SecondaryButton title="Add To Cart" onPress={() => { dispatch(addMyProductsToMyCart(item))}}/>) : null}
          </View>
          
                         
        </View>
      </ScrollView>
    </SafeAreaView>
    
*/


