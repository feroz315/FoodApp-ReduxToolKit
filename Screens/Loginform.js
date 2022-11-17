import React,{ useState } from 'react';
import { TextInput,Button } from 'react-native-paper';
import { View,Text,SafeAreaView, TouchableOpacity,Alert } from 'react-native';
import COLORS from '../Const/Colors'; 

import Entypo from 'react-native-vector-icons/Entypo';


const SignUp = ({navigation }) => {

const [userName, setUserName] = useState("");
const [Password, setPassword] = useState("");

const Submit = () => {

 if(userName === '' && Password === '' ){
  Alert.alert('Please Enter your username & password !');
}else{
  Alert.alert(`ThankYou ${userName}`);
  navigation.navigate('Home', { myName: `${userName}` });  
  }
}

return (
<>
<SafeAreaView style={{ flex:1,backgroundColor:COLORS.dark }}>  

<View style={{ flexDirection:'row',justifyContent:'flex-end',marginTop:70,marginRight:10}}> 
  <Entypo name="circle-with-cross" size={32} color="white" onPress={() => Alert.alert('out')}/>
      </View>      

<View style={{marginTop:20,padding:10,marginLeft:80}}>
  <Text style={{ fontSize:26,color:COLORS.white,marginBottom:5,marginLeft:10,fontFamily:'Montserrat-Regular'}}>Welcome Back!</Text>
  <Text style={{ fontSize:17,color:COLORS.white,fontFamily:'Montserrat-Regular'}}>Please sign to your account</Text> 
</View>

<View style={{marginBottom:10,marginTop:25}}>
 <TextInput
      value={userName}
      autoCapitalize='none'
      autoCorrect={false}
      mode='outlined'
      placeholder='Enter your name'
      style={{ width:'85%',height:60,marginLeft:30,backgroundColor:COLORS.Darkshed,}}
      onChangeText={(text) => setUserName(text)}/>
 </View>

<View>
  <TextInput
      value={Password}
      autoCapitalize='none'
      autoCorrect={false}
      secureTextEntry={true}
      placeholder='Enter your Password'
      right={<TextInput.Icon name="eye" />}      
      mode='outlined'
      color={COLORS.white}
      style={{ width:'85%',height:60,marginLeft:30,backgroundColor:COLORS.Darkshed }}
      onChangeText={(text) => setPassword(text)}/>
      <TouchableOpacity activeOpacity={0.7} onPress={() => Alert.alert('Work')}>
      <Text style={{ fontSize:14,color:COLORS.white,marginTop:10,marginLeft:250,fontFamily:'Montserrat-Regular'}}>Forgot Password?</Text>
      </TouchableOpacity>
</View>
   
<View style={{ marginLeft:30,marginTop:30,marginBottom:5}}>
<Button mode="contained" onPress={(text) => Submit(text)} 
 style={{ height:65,width:'90%',borderRadius:25,backgroundColor:'#325A99',padding:10,fontFamily:'Montserrat-Regular'}}>Sign in</Button>
</View>

</SafeAreaView>

</>

  );
}


export default SignUp;







/*
  
<View style={{ marginLeft:30,marginTop:10,marginBottom:10}}>
<Button mode="contained" onPress={() => Alert.alert('Pressed')} 
 style={{fontFamily:'Montserrat-Regular',height:65,width:'90%',borderRadius:25,backgroundColor:'#325A99',padding:10}}>Sign in With Google</Button>
</View>

<View style={{ marginLeft:30,marginTop:10,marginBottom:10}}>
<Button mode="contained" onPress={() => Alert.alert('Pressed')} 
 style={{ height:65,width:'90%',borderRadius:25,backgroundColor:'#325A99',padding:10}}>Sign in Facebook</Button>
</View>

  <View style={{flexDirection:'row',justifyContent:'center',}} >
    <Text style={{color:COLORS.white,fontSize:14,fontFamily:'Montserrat-Regular'}}>Don't Have An Account ? </Text>
    <TouchableOpacity activeOpacity={0.7} onPress={() => Alert.alert('work')}>
      <Text style={{color:'#325A99',fontSize:15,fontFamily:'Montserrat-Regular'}}>Sign Up</Text>
    </TouchableOpacity>
 </View>

*/





