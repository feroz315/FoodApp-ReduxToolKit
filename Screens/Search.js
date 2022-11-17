import React, { useState } from 'react';
import { Dimensions,Image,SafeAreaView,StyleSheet,Text,View } from 'react-native';
import { FlatList,ScrollView,TextInput,TouchableHighlight,TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../Const/Colors';
import {  useSelector } from 'react-redux';



const {width} = Dimensions.get('screen');
const cardWidth = width / 2 - 20;


const Search = ({ navigation }) => {
const [ filter,setFilterData ] = useState([]);
const [ search,setSearch ] = useState('');

const MyProductsitem = useSelector(state => state.product);


const SearchFilter = (text) => {
if(text){
  const newData = MyProductsitem.filter((item) => {  
   const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase(); 
    const textData = text.toUpperCase();
    return itemData.indexOf(textData) > -1;
  });
  setFilterData(newData);
  setSearch(text);
}else{
  setFilterData(null);
  setSearch(text);
 }
}
  
  const Card = ({food}) => {
  return (
      <TouchableHighlight
        underlayColor={COLORS.white}
        activeOpacity={0.9}
      >
        <View style={style.card}>
          <View style={{alignItems: 'center', top: -30}}>
            <Image source={food.pics} style={{width:130, height:100, borderRadius:20}} />
          </View>
          <View style={{marginHorizontal: 20}}>
            <Text style={{fontSize: 16, fontWeight:'500',color:COLORS.dark}}>{food.name}</Text>
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
              <Icon name="add" size={20} color={COLORS.white} onPress={() => navigation.navigate('Details', food)}/>) : null}
            </View>    
              </View>
        </View>
      </TouchableHighlight>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View
        style={{
          marginTop: 70,
          flexDirection: 'row',
          paddingHorizontal: 20,
        }}>
        <View style={style.inputContainer}>
          <Icon name="search" size={28} />
          <TextInput
            style={{flex: 1, fontSize: 18}}
            placeholder="Search for food"
            value={search}
            onChangeText={(text) => SearchFilter(text)}/>   
        </View>
        <View style={style.sortBtn}>
          <Icon name="tune" size={28} color={COLORS.white} />
        </View>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={filter}
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
    backgroundColor: COLORS.green,
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

export default Search;