import React from 'react';
import {View,Text, Image,TextInput,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header1 from '../../components/Header1';
import {textScale,moderateScaleVertical}  from '../Responsive/index';

class Login extends React.Component {
    state={
        email:'',
        password:''
    }
  render() {
  return (
    <View style={{backgroundColor:'white'}}>
         <Image source={require('../../assets/bluelogo.png')} style={{width:180,height:180,alignSelf:'center'}} />
         <View >
         <View style={{alignSelf:'center'}}>
              <Text style={{fontSize:textScale(27),color:'#037276',fontWeight:'bold'}}>L O G I N</Text>
          </View>
            <View style={{alignSelf:'center',marginTop:moderateScaleVertical(38)}}>
                <View style={{flexDirection:'row'}}>
                <TextInput
                  icon="login"
                  mode="contained"
                  placeholder="Enter Email"
                  placeholderTextColor="grey"
                  style={{paddingLeft:17,fontSize:textScale(17),width:300,height:44,borderRadius:26,borderColor:'#5B5B5B',borderWidth:1,backgroundColor:'white'}}
                  underlineColorAndroid="transparent"
                  value={this.state.email} onChangeText={(text)=> this.setState({email:text})}
                />
                </View>
                <View style={{flexDirection:'row',marginTop:moderateScaleVertical(26)}}>
               <TextInput
                underlineColorAndroid="transparent"
                placeholder="Enter Password"
                placeholderTextColor="grey"
               style={{paddingLeft:17,fontSize:textScale(17),width:300,height:44,borderRadius:26,borderColor:'#5B5B5B',borderWidth:1,backgroundColor:'white'}}
               secureTextEntry={true}
               value={this.state.password} onChangeText={(text)=> this.setState({password:text})}
              />
                </View>
           </View>  

           <View style={{marginTop:moderateScaleVertical(30),width:300,color:'green',alignSelf:'center'}}>
               <TouchableOpacity  onPress={()=> this.props.navigation.navigate('Home')} >
                        <View style={{borderWidth:1,borderRadius:30,borderColor:'#037276',height:37}}>
                            <Text style={{alignSelf:'center',marginTop:moderateScaleVertical(8),fontSize:textScale(17),color:"grey"}}>Login</Text>
                            </View>
               </TouchableOpacity>
               <TouchableOpacity onPress={()=> this.props.navigation.navigate('Signup')}>
                <View style={{alignSelf:'center',color:"grey",fontSize:textScale(14),marginTop:moderateScaleVertical(8)}}><Text>Dont have an account? Sign Up.</Text></View>
                </TouchableOpacity>
          </View>
          <View>
          <Text style={{alignSelf:'center',marginTop:moderateScaleVertical(20),fontSize:textScale(17),color:"grey"}}>--------------------------------- OR ---------------------------------</Text>
          </View>
          <TouchableOpacity>
              <View style={{borderWidth:1,borderColor:'#037276',height:37,width:310,alignSelf:'center',marginTop:moderateScaleVertical(8),flexDirection:'row',borderRadius:7}}>
                 <Image source={require('../../assets/fb.png')} style={{width:20,height:20,alignSelf:'center',marginLeft:moderateScaleVertical(10)}} />
                <Text style={{marginTop:moderateScaleVertical(8),fontSize:textScale(17),color:"grey",marginLeft:moderateScaleVertical(60)}}>Sign In With Facebook</Text>
               </View>
         </TouchableOpacity>
         
      </View> 
      <View style={{marginTop:moderateScaleVertical(300)}}></View>
    
    </View>
    );
  }
}
export default Login;

