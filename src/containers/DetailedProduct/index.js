import React from 'react';
import {View, Text, StyleSheet,ScrollView,FlatList,TouchableOpacity,Image} from 'react-native';
import Header1 from '../../components/Header1';
import Icon from 'react-native-vector-icons/Ionicons';
import {textScale,moderateScaleVertical}  from '../Responsive/index';

class DetailedProduct extends React.Component {
  render() {
      const product= this.props.navigation.state.params.item
     return (
      <View style={{backgroundColor:'white',flex:1,justifyContent:'flex-start'}}>
      <Header1 navigation={this.props.navigation} />
        <ScrollView>
            <View>
              <Text style={{fontSize:textScale(24),marginTop:moderateScaleVertical(10),fontWeight:'bold',color:'#037276',padding:moderateScaleVertical(7)}}>{product.name}</Text>
            </View>
            <View>
               <Image  source={{uri: product.image}} style={{width:'100%',height:200,borderWidth:1,borderColor:'#D1D1D1'}}/>
            </View>
            <View style={{flexDirection:'row',marginTop:moderateScaleVertical(30),alignSelf:'center'}}>
                <Image  source={{uri: product.image}} style={{width:90,height:70,borderRadius:7,marginHorizontal:moderateScaleVertical(4)}}/>
                <Image  source={{uri: product.image}} style={{width:90,height:70,marginHorizontal:moderateScaleVertical(4),borderRadius:7}}/>
                <Image  source={{uri: product.image}} style={{width:90,height:70,marginHorizontal:moderateScaleVertical(4),borderRadius:7}}/>
            </View>
            <View style={{marginTop:moderateScaleVertical(10),padding:moderateScaleVertical(7)}}>
                <View style={{flexDirection:'row'}}>
                    <Text style={{fontSize:textScale(20),fontWeight:'bold',color:'#037276'}}>{product.name}</Text>
                     <View>
                     </View>
                     <View style={{backgroundColor:'white',width:41,height:41,left:moderateScaleVertical(257),borderRadius:30,borderWidth:1,borderColor:'#037276',position:'relative'}}>
                          <Icon  name="heart" style={{alignSelf:'center',marginVertical:moderateScaleVertical(4)}} size={30} color='#037276' />
                     </View>
                </View>
              <Text style={{fontSize:textScale(14),fontWeight:'bold',color:'#037276'}}>Price: {product.price}</Text>
            </View>
            <Text style={{fontSize:textScale(20),fontWeight:'bold',color:'#037276',marginTop:moderateScaleVertical(10),padding:moderateScaleVertical(7)}}>Select a Color: </Text>
            <View style={{padding:moderateScaleVertical(7),flexDirection:'row'}}>
              <View style={{borderRadius:70,backgroundColor:'brown',width:44,height:44}}>
              </View>
              <View style={{borderRadius:70,backgroundColor:'black',width:44,height:44,marginLeft:moderateScaleVertical(10)}}>
              </View>
              <View style={{borderRadius:70,backgroundColor:'grey',width:44,height:44,marginLeft:moderateScaleVertical(10)}}>
              </View>
              <View style={{borderRadius:70,backgroundColor:'red',width:44,height:44,marginLeft:moderateScaleVertical(10)}}>
              </View>
            </View>
        </ScrollView>
      
    </View>
    );
  }
}
    
export default DetailedProduct;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: moderateScaleVertical(20),
  },
});
