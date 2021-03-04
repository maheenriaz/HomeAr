import React from 'react';
import {View,Text, Image,TextInput,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header1 from '../../components/Header1';
import {textScale,moderateScaleVertical}  from '../Responsive/index';

class Signup2 extends React.Component {
    state={
        email:'',
        password:''
    }
  render() {
  return (
    <View style={{backgroundColor:'white',flex:1,justifyContent:'flex-start'}}>
         <Image source={require('../../assets/bluelogo.png')} style={{width:180,height:180,alignSelf:'center'}} />
         <View >
         <View style={{alignSelf:'center'}}>
              <Text style={{fontSize:textScale(27),color:'#037276',fontWeight:'bold'}}>S I G N U P</Text>
          </View>
          <Text style={{fontSize:textScale(20),alignSelf:'center',fontWeight:'bold',color:'grey',marginTop:moderateScaleVertical(10)}}>
                    A little more about you!
           </Text>
            <View style={{alignSelf:'center',marginTop:moderateScaleVertical(33)}}>
                <View style={{flexDirection:'row'}}>
                <TextInput
                  icon="login"
                  mode="contained"
                  placeholder="Enter Phone Number"
                  placeholderTextColor="grey"
                  style={{paddingLeft:17,fontSize:textScale(17),width:300,height:44,borderRadius:26,borderColor:'#5B5B5B',borderWidth:1,backgroundColor:'white'}}
                  underlineColorAndroid="transparent"
                  value={this.state.email} onChangeText={(text)=> this.setState({email:text})}
                />
                </View>
              
           </View>  

           <View style={{marginTop:moderateScaleVertical(30),width:300,color:'green',alignSelf:'center'}}>
               <TouchableOpacity  onPress={()=> this.props.navigation.navigate('Signup3')} >
                        <View style={{borderWidth:1,borderRadius:30,borderColor:'#037276',height:37}}>
                            <Text style={{alignSelf:'center',marginTop:moderateScaleVertical(8),fontSize:textScale(17),color:"grey"}}>Continue</Text>
                            </View>
               </TouchableOpacity>
          </View>
    </View> 
    
    </View>
    );
  }
}
export default Signup2;

