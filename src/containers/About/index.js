import React from 'react';
import {View,Text, Image,TextInput,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header1 from '../../components/Header1';
import {textScale,moderateScaleVertical}  from '../Responsive/index';

class About extends React.Component {
  render() {
  return (
    <View style={{backgroundColor:'white',flex:1,justifyContent:'flex-start'}}>
        <Header1 />
            <Text style={{fontSize:textScale(24),marginLeft:moderateScaleVertical(4),alignSelf:'center',fontWeight:'bold',color:'grey',marginTop:moderateScaleVertical(10)}}>
                    About Us
           </Text>
        <View style={{flexDirection:'row',padding:moderateScaleVertical(7)}}>
            <Text style={{fontSize:textScale(14),marginLeft:moderateScaleVertical(4),color:'grey',fontWeight:'bold'}}>
            Home AR allows you to reduce the gap between reality and imagination. Home AR will allow you to browse our products gallery and add items to your cart, when you are done you can use your device’s camera where you would like to visualize the object. Select it to insert it and view using your device’s camera and move  it into a place that works for you. You can then  share your pictures or save them and use the app to price and add to Wishlist, and eventually buy them.
            </Text>
        </View>
       
       <View style={{flexDirection:'row',marginLeft:moderateScaleVertical(7)}}>
           
       </View>
     
    </View>
    );
  }
}
export default About;

