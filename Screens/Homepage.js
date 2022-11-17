import React, { useState } from 'react';
import { Dimensions,Image,ImageBackground,SafeAreaView,StyleSheet,Text,View } from 'react-native';
import { FlatList,ScrollView,TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../Const/Colors';
import categories from '../Const/Categories';
import {  useSelector } from 'react-redux';


const {width} = Dimensions.get('screen');
const cardWidth = width / 1 - 10;


const HomeScreen = ({ route,navigation }) => {
const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
const SPACING = 10;

const name = route.params;

const MyProducts = useSelector(state => state.product);

  
  const ListCategories = () => {
    return (
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        initialScrollIndex={selectedCategoryIndex}
         data={categories}
        contentContainerStyle={style.categoriesListContainer}
        renderItem={({item,index}) => {
     return(
        <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setSelectedCategoryIndex(index)}
            >
            <View
              style={{
                backgroundColor:
                  selectedCategoryIndex == index
                    ? COLORS.green
                    : COLORS.secondary,
                ...style.categoryBtn,
              }}>
              <View style={style.categoryBtnImgCon}>
                <Image
                  source={item.image}
                  style={{height: 35, width: 35, resizeMode: 'cover'}}/>
                </View>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  marginLeft: 10,
                  color:
                    selectedCategoryIndex == index
                      ? COLORS.white
                      : COLORS.primary,
                }}>
                {item.name}
              </Text>
            </View>
          </TouchableOpacity>
           )
        }}/>           
     );
  };
  
  const Card = () => {
  return (
    <View>
    <FlatList
     showsVerticalScrollIndicator={false}
     data={MyProducts}
     keyExtractor={(item, index) => index.toString()}
     renderItem={({item,index}) => {
    return(
      <TouchableOpacity
        underlayColor={COLORS.white}
        activeOpacity={0.9}
        onPress={() => navigation.navigate('Details', item)}>
        <View style={{ margin:10,}}>
           <ImageBackground source={item.pics} style={{width:'100%', height:150, borderRadius:20}}/>

        <View style={{marginHorizontal: 5,marginTop:10}}>
            <Text style={{fontSize: 25,fontFamily:'Montserrat-Bold',color:COLORS.white}}>{item.name}</Text>
             </View>
          <View
             style={{
              marginTop: 10,
              marginHorizontal: 5,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 24,fontFamily:'Montserrat-Bold',color:COLORS.white}}>
              ${item.price}
            </Text>
            <View style={style.addToCartBtn}>
          {item.qty == 0 ? (
              <Icon name="add" size={24} color={COLORS.dark}/>) : null}
            </View>    
              </View>        
                 </View>
              </TouchableOpacity>
        )
     }}/> 
      </View>
    );
  };
     
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.dark}}>
      <View style={style.header}>
        <View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 30,fontFamily:'Montserrat-Regular',color: COLORS.grey}}>Hello,</Text>
            <Text style={{fontSize: 28,fontFamily:'Montserrat-Regular',color: COLORS.grey,fontWeight: 'bold', marginLeft: 10}}>
              {name}            
            </Text>
          </View>
          <Text style={{marginTop: 5, fontSize: 22, fontFamily:'Montserrat-Regular',color: COLORS.grey}}>
            What do you want today
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Icon name="supervised-user-circle" size={42} color={COLORS.white} style={{marginTop:5,marginRight:10}}/>
           </TouchableOpacity>   
      </View>
      
      <View>
        <ListCategories />
      </View>
      
      <View>
        <Card />
      </View>
      
   </SafeAreaView>
  );
};


const style = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  inputContainer: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: COLORS.light,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  sortBtn: {
    width: 50,
    height: 50,
    marginLeft: 10,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoriesListContainer: {
    paddingVertical: 30,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  categoryBtn: {
    height: 45,
    width: 120,
    marginRight: 7,
    borderRadius: 30,
    alignItems: 'center',
    paddingHorizontal: 5,
    flexDirection: 'row',
  },
  categoryBtnImgCon: {
    height: 35,
    width: 35,
    backgroundColor: COLORS.white,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    height: 190,
    width: cardWidth,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 50,
    borderRadius: 15,
    elevation: 10,
    backgroundColor:COLORS.dark

  },
  addToCartBtn: {
    height: 30,
    width: 30,
    borderRadius: 20,
    marginRight:10,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;


     
 /*
 
      <View style={{
      position: "absolute",
      height: "100%",
      zIndex: 2,
      width: "100%",
      justifyContent: "center",
      paddingHorizontal: SPACING * 2,
      paddingBottom: SPACING * 5}}>
                </View>

 */