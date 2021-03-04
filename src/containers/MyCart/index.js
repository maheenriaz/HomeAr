import React from 'react';
import {View,Text, Image,TextInput,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header1 from '../../components/Header1';
import {textScale,moderateScaleVertical}  from '../Responsive/index';

class MyCart extends React.Component {
  render() {
  return (
    <View style={{backgroundColor:'white',flex:1,justifyContent:'flex-start'}}>
        <Header1 />
        <Text style={{fontSize:textScale(24),marginLeft:moderateScaleVertical(4),alignSelf:'center',fontWeight:'bold',color:'grey',marginTop:moderateScaleVertical(10)}}>
                    My Cart
        </Text>
        <View style={{marginTop:moderateScaleVertical(200),width:300,color:'green',alignSelf:'center'}}>
               <TouchableOpacity  onPress={()=> this.props.navigation.navigate('Products')} >
                        <View style={{borderWidth:1,borderRadius:30,borderColor:'#037276',height:37}}>
                            <Text style={{alignSelf:'center',marginTop:moderateScaleVertical(8),fontSize:textScale(17),color:"grey"}}>Add to Cart</Text>
                            </View>
               </TouchableOpacity>
          </View>
        <View style={{flexDirection:'row',marginTop:moderateScaleVertical(8),alignSelf:'center'}}>
          <Text style={{fontSize:textScale(14),marginLeft:moderateScaleVertical(4),color:'grey',fontWeight:'bold'}}>
               Add your favourite products in cart.
         </Text>
       </View>
    </View>
    );
  }
}
export default MyCart;

