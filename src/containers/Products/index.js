import React from 'react';
import {View, Text, StyleSheet,ScrollView,FlatList,TouchableOpacity,Image} from 'react-native';
import Header1 from '../../components/Header1';
import {textScale,moderateScaleVertical}  from '../Responsive/index';

class Products extends React.Component {
  render() {
    categories=[
      {id:1,image:'https://d1scby4y7n7eqn.cloudfront.net/durian/durian.in/Product/800x800/820190228090853img.jpg',name:'Wooden Chair',price:'231$'},
      {id:2,image:'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',name:'Stylish Chair',price:'721$'},
      {id:3,image:'https://images.ctfassets.net/5de70he6op10/7KotRtmFAvP7OWLTE7PHjH/93bacf07d554c2f56531e16af54a3cd4/FurnitureGateway_03_sectionals.jpg',name:'Wooden Sofa',price:'131$'},
      {id:4,image:'https://www.canadianwood.in/wp-content/uploads/2018/03/Application-Furniture.png',name:'Wooden bed',price:'471$'},
      {id:7,image:'https://images.ctfassets.net/5de70he6op10/7jitQog24bVZpJjgy68zSb/0efc1c401723216019c806f86d657454/FurnitureGateway_04_modular.jpg',name:'New Sofa',price:'322$'},
      {id:8,image:'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',name:'Stylish Sofa',price:'879$'},
    ]
    return (
      <View style={{backgroundColor:'white'}}>
      <Header1 navigation={this.props.navigation} />
      <ScrollView>
      <View>
          <Text style={{alignSelf:'center',fontSize:textScale(20),marginTop:moderateScaleVertical(10),fontWeight:'bold',color:'#037276'}}>PRODUCTS</Text>
        </View>
      <View style={{flexDirection:'row'}}>
      <FlatList 
            data={categories}
            keyExtractor={(item)=>item.id}   
            numColumns={2}
            columnWrapperStyle={{justifyContent: 'space-around'}}
            renderItem={({item})=>{
              return(
                <TouchableOpacity  onPress={()=>this.props.navigation.navigate('DetailedProduct',{item})}>
                <View style={{flex:1,marginTop:moderateScaleVertical(20),backgroundColor:'white',height:200,width:160,justifyContent:'space-around',borderWidth:1,borderColor:'#DEDEDE'}}>
               <Image style={{height:140,width:138,marginHorizontal:moderateScaleVertical(10),marginTop:moderateScaleVertical(10)}} 
               source={{uri: item.image}} />
                 <View style={{flexDirection:'row',justifyContent:'space-around'}}>   
                      <Text style={{marginHorizontal:moderateScaleVertical(10),color:'#6D6D6D',marginTop:moderateScaleVertical(10)}}>{item.name}</Text>
                       <Text style={{marginHorizontal:moderateScaleVertical(10),color:'#6D6D6D',marginTop:moderateScaleVertical(10)}}>{item.price}</Text>
                 </View>
                </View>
                </TouchableOpacity>
              );
            }}
        />
       </View>
       <View style={{marginTop:moderateScaleVertical(100)}}>
                   </View>
       </ScrollView>
    </View>
    );
  }
}
    
export default Products;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: moderateScaleVertical(20),
  },
});
