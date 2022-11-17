import React, { useState } from 'react';
import { Dimensions,Image,SafeAreaView,StyleSheet,Text,View } from 'react-native';
import { FlatList,ScrollView,TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../Const/Colors';
import categories from '../Const/Categories';
import {  useSelector } from 'react-redux';



const {width} = Dimensions.get('screen');
const cardWidth = width / 2 - 20;



const HomeScreen = ({ route,navigation }) => {
const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

//const { myName }  = route.params;

const MyProducts = useSelector(state => state.product);


  const ListCategories = () => {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={style.categoriesListContainer}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setSelectedCategoryIndex(index)}>
            <View
              style={{
                backgroundColor:
                  selectedCategoryIndex == index
                    ? COLORS.primary
                    : COLORS.secondary,
                ...style.categoryBtn,
              }}>
              <View style={style.categoryBtnImgCon}>
                <Image
                  source={category.image}
                  style={{height: 35, width: 35, resizeMode: 'cover'}}
                />
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
                {category.name}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };
  
  const Card = ({food}) => {
  return (
      <TouchableOpacity
        underlayColor={COLORS.white}
        activeOpacity={0.9}
        onPress={() => navigation.navigate('Details', food)}>
        <View style={style.card}>
          <View style={{alignItems: 'center', top: -30}}>
            <Image source={food.pics} style={{width:130, height:100, borderRadius:20}} />
          </View>
          <View style={{marginHorizontal: 20}}>
            <Text style={{fontSize: 16,fontFamily:'Montserrat-Bold',color:COLORS.dark}}>{food.name}</Text>
              </View>
          <View
            style={{
              marginTop: 10,
              marginHorizontal: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 18, fontWeight:'500',color:COLORS.dark}}>
              ${food.price}
            </Text>
            <View style={style.addToCartBtn}>
          {food.qty == 0 ? (
              <Icon name="add" size={20} color={COLORS.white}/>) : null}
            </View>    
              </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={style.header}>
        <View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 30,fontFamily:'Montserrat-Bold'}}>Hello,</Text>
            <Text style={{fontSize: 28,fontFamily:'Montserrat-Bold',fontWeight: 'bold', marginLeft: 10}}>
          sunny            
            </Text>
          </View>
          <Text style={{marginTop: 5, fontSize: 22, fontFamily:'Montserrat-Regular',color: COLORS.grey}}>
            What do you want today
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Image source={require('../Images/person.png')}
           style={{height: 50, width: 50, borderRadius: 25}}/>
           </TouchableOpacity>   
      </View>
      <View>
        <ListCategories />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={MyProducts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <Card food={item} />}
      />
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
    backgroundColor: COLORS.primary,
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
    height: 180,
    width: cardWidth,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 50,
    borderRadius: 15,
    elevation: 10,
    backgroundColor: COLORS.white,
  },
  addToCartBtn: {
    height: 30,
    width: 30,
    borderRadius: 20,
    marginRight:10,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;