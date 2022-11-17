
import React from 'react';
import {Text, StyleSheet,View,TouchableOpacity,Image, Dimensions,StatusBar ,ImageBackground} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from '../Const/Colors';
import {PrimaryButton} from '../Const/Button';
import { useNavigation } from '@react-navigation/native';

//const { width: viewportWidth } = Dimensions.get("window");


const OnBoardScreen = () => {
const navigation = useNavigation();
const SPACING = 10;

return (
  <>
<StatusBar translucent backgroundColor="rgba(0,0,0,0)"/>
<ImageBackground
  style={{ flex: 1 }}
  source={require("../Images/pexels.jpeg")}>
  <View style={{ flex: 1, backgroundColor: COLORS.black, opacity: 0.2 }} />
  <View
    style={{
      position: "absolute",
      height: "100%",
      zIndex: 2,
      width: "100%",
      justifyContent: "flex-end",
      paddingHorizontal: SPACING * 2,
      paddingBottom: SPACING * 5,
    }}>
  
    <View>
      <Text
        style={{
          color: COLORS.white,
          fontWeight: "600",
          fontSize: SPACING * 4.5,
          fontFamily:'Montserrat-Regular',
          textTransform: "capitalize",
        }}
      >
        Let's find your favorite food 
      </Text>
      <Text
        style={{
          color: COLORS.white,
          fontWeight: "600",
          fontFamily:'Montserrat-Regular',
          fontSize: SPACING * 1.7,
        }}
      >
        We help you to find best and delicious food.
      </Text>
      <TouchableOpacity
        style={{
          padding: SPACING * 2,
          backgroundColor: COLORS.white,
          borderRadius: SPACING * 2,
          alignItems: "center",
          marginTop: SPACING * 3 }}
          onPress={() => navigation.navigate('Login')}>
        <Text
          style={{
            color: COLORS.black,
            fontSize: SPACING * 2,
            fontWeight: "700",
          }}>Login</Text>
      </TouchableOpacity>
    </View>
  </View>
</ImageBackground>
</>
 );
}; 


export default OnBoardScreen;







/*
<SafeAreaView style={{flex: 1,backgroundColor:COLORS.dark }}>
      
      <ImageBackground source={require('../Images/food.jpg')} style={{flex:1}} resizeMode='cover'>
      <View style={style.textContainer}>
        <View>
          <Text style={{ fontFamily:'Montserrat-Regular',fontWeight:'400',fontSize: 30,textAlign:'center',color:COLORS.dark}}>
            Delicious Food
          </Text>
          <Text
            style={{
              marginTop: 20,
              fontSize: 20,
              textAlign: 'center',
              fontFamily:'Montserrat-Regular',
              fontWeight:'400',
              color: COLORS.dark,
            }}>
            We help you to find best and delicious food
          </Text>
        </View>
        <PrimaryButton
          onPress={() => navigation.navigate('Home')}
          title="Login"/>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  textContainer: {
    flex: 1,
    paddingHorizontal: 50,
    justifyContent: 'space-between',
    paddingBottom: 40,
  },
  indicatorContainer: {
    height: 50,
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  currentIndicator: {
    height: 12,
    width: 30,
    borderRadius: 10,
    backgroundColor: COLORS.primary,
    marginHorizontal: 5,
  },
  indicator: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: COLORS.grey,
    marginHorizontal: 5,
  },
});

*/