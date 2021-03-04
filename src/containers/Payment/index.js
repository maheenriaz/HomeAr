import React from 'react';
import {View, Text, StyleSheet,ScrollView,FlatList,TouchableOpacity,Image,TextInput} from 'react-native';
import Header1 from '../../components/Header1';
import {textScale,moderateScaleVertical}  from '../Responsive/index';
import Icon from 'react-native-vector-icons/Ionicons';
import StepIndicator from 'react-native-step-indicator';

class Payment extends React.Component {
    state = {
        currentPosition: 2,
        fname:'',
        lname:'',
        address:'',
        city:'',
        phone:'',
        email:'',
      

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
        <Text style={{fontSize:textScale(24),marginTop:moderateScaleVertical(10),fontWeight:'bold',color:'#037276'}}>Delivery</Text>
            <StepIndicator 
                customStyles={customStyles}
                currentPosition={this.state.currentPosition}
                labels={labels}
                stepCount={4}
            />
         
         <Image source={require('../../assets/cod-2.jpg')} style={{height:130,width:177,alignSelf:'center'}} />
        
         <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{fontSize:textScale(17),color:'grey',marginVertical:10,marginHorizontal:17,fontWeight:'bold'}}>Sub Total:</Text>
            <Text style={{fontSize:textScale(17),color:'grey',marginVertical:10,marginHorizontal:17,fontWeight:'bold'}}>2</Text>
       </View>
       <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{fontSize:textScale(17),color:'grey',marginVertical:10,marginHorizontal:17,fontWeight:'bold'}}>Tax:</Text>
            <Text style={{fontSize:textScale(17),color:'grey',marginVertical:10,marginHorizontal:17,fontWeight:'bold'}}>14,000</Text>
       </View>
       <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{fontSize:textScale(17),color:'grey',marginVertical:10,marginHorizontal:17,fontWeight:'bold'}}>Total:</Text>
            <Text style={{fontSize:textScale(17),color:'grey',marginVertical:10,marginHorizontal:17,fontWeight:'bold'}}>0.00%</Text>
       </View>
       <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{fontSize:textScale(17),color:'grey',marginVertical:10,marginHorizontal:17,fontWeight:'bold'}}>Delivery Time</Text>
     </View>
     <View style={{flexDirection:'row',marginHorizontal:14}}>
     
            <Text style={{fontSize:textScale(13),color:'grey',marginVertical:7,marginHorizontal:11}}>Today(we can come anytime)</Text>
    </View>
    <View style={{flexDirection:'row',marginHorizontal:14}}>
       
            <Text style={{fontSize:textScale(13),color:'grey',marginVertical:7,marginHorizontal:11}}>Future day(Choose day or time so we can contact you)</Text>
    </View>
       </View>
         </ScrollView>
        <View style={styles.bottomView}>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate('OrderStep')}>
              <Text style={styles.textStyle}>Next Step   </Text>
             </TouchableOpacity>
              </View>
    </View>
    );
  }
}
    
export default Payment;

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
