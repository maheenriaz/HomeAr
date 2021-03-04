import React from 'react';
import {View,Text, Image,TextInput,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header1 from '../../components/Header1';
import {textScale,moderateScaleVertical}  from '../Responsive/index';

class Signup5 extends React.Component {
    state={
        email:'',
        password:''
    }
  render() {
  return (
    <View style={{backgroundColor:'white',flex:1,justifyContent:'flex-start'}}>
         <Image source={require('../../assets/bluelogo.png')} style={{width:180,height:180,alignSelf:'center'}} />
         <View >
        
          <Text style={{fontSize:textScale(20),alignSelf:'center',fontWeight:'bold',color:'grey',marginTop:moderateScaleVertical(18)}}>
                   All Set!🎊
           </Text>
           <Text style={{fontSize:textScale(20),alignSelf:'center',fontWeight:'bold',color:'grey',marginTop:moderateScaleVertical(10)}}>
                   Head over to your profile and start shopping!
           </Text>

           <View style={{marginTop:moderateScaleVertical(40),width:300,color:'green',alignSelf:'center'}}>
               <TouchableOpacity  onPress={()=> this.props.navigation.navigate('Home')} >
                        <View style={{borderWidth:1,borderRadius:30,borderColor:'#037276',height:37}}>
                            <Text style={{alignSelf:'center',marginTop:moderateScaleVertical(8),fontSize:textScale(17),color:"grey"}}>Lets Start Shopping</Text>
                            </View>
               </TouchableOpacity>
          </View>
    </View> 
    
    </View>
    );
  }
}
export default Signup5;

