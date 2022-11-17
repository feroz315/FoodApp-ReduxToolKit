import React from 'react';
import {StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import COLORS from '../Const/Colors';
import OnBoardScreen from './OnBoradScreen';
import BottomNavigator from './BottomNavigator';
import Details from './Details';
import SignUp from './Loginform';



const Stack = createStackNavigator();

const StackNavigation = () => {


return (
    <NavigationContainer>
  
         <StatusBar backgroundColor={COLORS.white} barStyle="dark-content"/>     
         <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="BoardScreen">
         <Stack.Screen name="BoardScreen" component={OnBoardScreen}/>
         <Stack.Screen name="Login" component={SignUp}/>
         <Stack.Screen name="Home" component={BottomNavigator} />
         <Stack.Screen name="Details" component={Details} />       
         </Stack.Navigator>
    </NavigationContainer>
  );
};



export default StackNavigation;
