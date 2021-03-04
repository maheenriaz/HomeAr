import React from 'react';
import {View,Text, Image,TextInput,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header1 from '../../components/Header1';
import {textScale,moderateScaleVertical}  from '../Responsive/index';

class Help extends React.Component {
  render() {
  return (
    <View style={{backgroundColor:'white',flex:1,justifyContent:'flex-start'}}>
        <Header1 />
        <Text style={{fontSize:textScale(24),marginLeft:moderateScaleVertical(4),alignSelf:'center',fontWeight:'bold',color:'grey',marginTop:moderateScaleVertical(10)}}>
                    Help
        </Text>
        <View style={{flexDirection:'row',padding:moderateScaleVertical(7)}}>
            <Text style={{fontSize:textScale(14),marginLeft:moderateScaleVertical(4),color:'grey',fontWeight:'bold'}}>
                  Here is a short user guidance video for your assistance.
          </Text>
        </View>
    </View>
    );
  }
}
export default Help;

