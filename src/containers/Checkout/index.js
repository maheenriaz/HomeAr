import React from 'react';
import {View, Text, StyleSheet,ScrollView,FlatList,TouchableOpacity,Image} from 'react-native';
import Header1 from '../../components/Header1';
import {textScale,moderateScaleVertical}  from '../Responsive/index';
import Icon from 'react-native-vector-icons/Ionicons';
import StepIndicator from 'react-native-step-indicator';

class Checkout extends React.Component {
    state = {
        currentPosition: 0
    }
    onPageChange(position){
        this.setState({currentPosition: position});
    }
  render() {
     const   cart=[
        {id:1,image:'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',name:'Wooden Chair',price:231},
        {id:2,image:'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',name:'Stylish Chair',price:721},
      ]
      const labels = ["Cart","Delivery","Payment","Order"];
        const customStyles = {
        stepIndicatorSize: 27,
        currentStepIndicatorSize:27,
        separatorStrokeWidth: 2,
        currentStepStrokeWidth: 3,
        stepStrokeCurrentColor: '#037276',
        stepStrokeWidth: 3,
        stepStrokeFinishedColor: '#037276',
        stepStrokeUnFinishedColor: '#aaaaaa',
        separatorFinishedColor: '#037276',
        separatorUnFinishedColor: '#aaaaaa',
        stepIndicatorFinishedColor: '#037276',
        stepIndicatorUnFinishedColor: '#ffffff',
        stepIndicatorCurrentColor: '#ffffff',
        stepIndicatorLabelFontSize: 13,
        currentStepIndicatorLabelFontSize: 13,
        stepIndicatorLabelCurrentColor: '#037276',
        stepIndicatorLabelFinishedColor: '#ffffff',
        stepIndicatorLabelUnFinishedColor: '#aaaaaa',
        labelColor: '#999999',
        labelSize: 19,
        labelAlign:'center',
        currentStepLabelColor: '#037276'
        }
        
    return (
      <View style={{backgroundColor:'white',flex:1,justifyContent: 'center'}}>
      <Header1 navigation={this.props.navigation} />
      <ScrollView>
      <View style={{padding:10}}>
      <Text style={{fontSize:textScale(24),marginTop:moderateScaleVertical(10),fontWeight:'bold',color:'#037276'}}>Checkout</Text>
        <StepIndicator 
            customStyles={customStyles}
            currentPosition={this.state.currentPosition}
            labels={labels}
            stepCount={4}
        />
      <FlatList 
            data={cart}
            keyExtractor={(item)=>item.id}   
           renderItem={({item})=>{
              return(
                <TouchableOpacity>
                    <View style={{borderWidth:1,borderColor:'#037276',flexDirection:'row',flex:1,justifyContent:'flex-end',
                    marginVertical:10,height:120,flex:1}}>
                        <Image style={{height:90,width:118,marginHorizontal:moderateScaleVertical(10),
                        marginTop:moderateScaleVertical(10)}} 
                        source={{uri: item.image}} />
                         <View style={{flex:1}}>
                            <Text style={{fontSize:textScale(17),marginVertical:moderateScaleVertical(9),fontWeight:'bold',
                            color:'#037276'}}>{item.name}</Text>
                          <Text style={{fontSize:textScale(17),color:'#037276',marginVertical:-8}}>Rs. {item.price}</Text>
                           <View style={{backgroundColor:'#037276',width:100,height:34,
                           marginVertical:moderateScaleVertical(17),flexDirection:'row',borderRadius:4}}>
                                <Icon name='md-add-sharp' style={{color:'white',marginVertical:10,marginHorizontal:3,borderRadius:8}} size={20}></Icon>
                                <Text style={{fontSize:textScale(17),color:'white',marginVertical:10,marginHorizontal:17,fontWeight:'bold'}}>1</Text>
                                  <Icon name='ios-remove-outline' style={{color:'white',marginVertical:10,marginHorizontal:1}} size={20}></Icon>
                            </View>
                       </View>
                    </View>
               </TouchableOpacity>
              );
            }}
        />
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{fontSize:textScale(17),color:'grey',marginVertical:10,marginHorizontal:17,fontWeight:'bold'}}>Total Items:</Text>
            <Text style={{fontSize:textScale(17),color:'grey',marginVertical:10,marginHorizontal:17,fontWeight:'bold'}}>2</Text>
       </View>
       <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{fontSize:textScale(17),color:'grey',marginVertical:10,marginHorizontal:17,fontWeight:'bold'}}>Total Amount:</Text>
            <Text style={{fontSize:textScale(17),color:'grey',marginVertical:10,marginHorizontal:17,fontWeight:'bold'}}>14,000</Text>
       </View>
       <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{fontSize:textScale(17),color:'grey',marginVertical:10,marginHorizontal:17,fontWeight:'bold'}}>Discount(if any):</Text>
            <Text style={{fontSize:textScale(17),color:'grey',marginVertical:10,marginHorizontal:17,fontWeight:'bold'}}>0.00%</Text>
       </View>
       <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{fontSize:textScale(17),color:'grey',marginVertical:10,marginHorizontal:17,fontWeight:'bold'}}>Sub Total:</Text>
            <Text style={{fontSize:textScale(17),color:'grey',marginVertical:10,marginHorizontal:17,fontWeight:'bold'}}>14,000</Text>
       </View>
       </View>
         </ScrollView>
        <View style={styles.bottomView}>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate('Delivery')}>
              <Text style={styles.textStyle}>Next Step   </Text>
             </TouchableOpacity>
        </View>
    </View>
    );
  }
}
    
export default Checkout;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: moderateScaleVertical(20),
  },
  bottomView: {
    width: '100%',
    height: 50,
    backgroundColor: '#037276',
    justifyContent: 'center',
    alignItems: 'flex-end',
    position: 'absolute', //Here is the trick
    bottom: 0, //Here is the trick
  },
  textStyle: {
    color: '#fff',
    fontSize: 18,
    
  },
});
