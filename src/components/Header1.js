import React from 'react';
import {View, Text, StyleSheet, Dimensions, StatusBar,AsyncStorage,Alert,Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Icon from "react-native-vector-icons/Ionicons";


class Header1 extends React.Component {
 render(){
   return (
    <View style={{width:'100%',backgroundColor:'#037276'}}>
      <StatusBar barStyle="dark-content" />
      <View style={{marginTop:getStatusBarHeight(),paddingVertical:10,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
      <View style={{position:'absolute',left:10}} >
         <Icon  name="menu" size={27} color='white' style={{marginTop:-20}} onPress={() => this.props.navigation.openDrawer()} />
      </View>
      <View/>
      <Icon  name="cart-outline" size={27} color='white' style={{marginTop:-20,left:190}} onPress={() => this.props.navigation.openDrawer()} />
       </View>
   </View>
    )
  }
}
   
export default Header1;

