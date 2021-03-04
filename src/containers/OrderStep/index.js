import React from 'react';
import {View, Text, StyleSheet,ScrollView,FlatList,TouchableOpacity,Image,TextInput} from 'react-native';
import Header1 from '../../components/Header1';
import {textScale,moderateScaleVertical}  from '../Responsive/index';
import Icon from 'react-native-vector-icons/Ionicons';
import StepIndicator from 'react-native-step-indicator';

class OrderStep extends React.Component {
    state = {
        currentPosition: 3,
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
        <Text style={{fontSize:textScale(24),marginTop:moderateScaleVertical(10),fontWeight:'bold',color:'#037276'}}>Order</Text>
            
      <View style={{borderRadius:4,backgroundColor:'#037276',width:320,height:340,alignSelf:'center',marginVertical:20,padding:30}}>
         <Text style={{fontSize:textScale(30),marginVertical:moderateScaleVertical(20),fontWeight:'bold',color:'white'}}>Congratulations!!</Text>
           <Text style={{fontSize:textScale(23),fontWeight:'bold',color:'white'}}>Hi Anila Aslam! Your order has been placed. We will contact you shortly..</Text>
           
      </View>
     
      
     
   
 
       </View>
         </ScrollView>
        <View style={styles.bottomView}>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate('Home')}>
              <Text style={styles.textStyle}>Done   </Text>
             </TouchableOpacity>
              </View>
    </View>
    );
  }
}
    
export default OrderStep;

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
