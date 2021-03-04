import React from 'react';
import {View, Text, StyleSheet,ScrollView,FlatList,TouchableOpacity,Image,TextInput} from 'react-native';
import Header1 from '../../components/Header1';
import {textScale,moderateScaleVertical}  from '../Responsive/index';
import Icon from 'react-native-vector-icons/Ionicons';
import StepIndicator from 'react-native-step-indicator';

class Delivery extends React.Component {
    state = {
        currentPosition: 1,
        fname:'',
        lname:'',
        address:'',
        city:'',
        phone:'',
        email:'',
        zipcode:'',
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
         
         <View style={{flexDirection:'row',marginHorizontal:moderateScaleVertical(7)}}>
            <Text style={{fontSize:textScale(17),marginVertical:moderateScaleVertical(4),color:'#037276',fontWeight:'bold'}}>
                    Your Shipping Details
           </Text>
       </View>
       <View style={{marginHorizontal:moderateScaleVertical(10),marginTop:moderateScaleVertical(20)}}>
           <Text style={{fontSize:textScale(14),marginHorizontal:moderateScaleVertical(4),color:'#037276',
           fontWeight:'bold'}}>
                    First Name: 
           </Text>
           <TextInput 
           icon="login"
            mode="contained"
            placeholder="For Example(denny1)"
            placeholderTextColor="grey" 
            underlineColorAndroid="transparent"
            value={this.state.fname} onChangeText={(text)=> this.setState({fname:text})}
           style={{borderRadius:3,borderWidth:1,borderColor:'#707070',padding:(10),height:41}} />
        </View>
        <View style={{marginHorizontal:moderateScaleVertical(10),marginTop:moderateScaleVertical(20)}}>
           <Text style={{fontSize:textScale(14),marginHorizontal:moderateScaleVertical(4),color:'#037276',
           fontWeight:'bold'}}>
                    Last Name: 
           </Text>
           <TextInput 
           icon="login"
            mode="contained"
            placeholder="For Example(denny1)"
            placeholderTextColor="grey" 
            underlineColorAndroid="transparent"
            value={this.state.lname} onChangeText={(text)=> this.setState({lname:text})}
           style={{borderRadius:3,borderWidth:1,borderColor:'#707070',padding:(10),height:41}} />
        </View>
        <View style={{marginHorizontal:moderateScaleVertical(10),marginTop:moderateScaleVertical(20)}}>
           <Text style={{fontSize:textScale(14),marginHorizontal:moderateScaleVertical(4),color:'#037276',
           fontWeight:'bold'}}>
                   City
           </Text>
           <TextInput 
           icon="login"
            mode="contained"
            placeholder="For Example(denny1)"
            placeholderTextColor="grey" 
            underlineColorAndroid="transparent"
            value={this.state.city} onChangeText={(text)=> this.setState({city:text})}
           style={{borderRadius:3,borderWidth:1,borderColor:'#707070',padding:(10),height:41}} />
        </View>
        <View style={{marginHorizontal:moderateScaleVertical(10),marginTop:moderateScaleVertical(20)}}>
           <Text style={{fontSize:textScale(14),marginHorizontal:moderateScaleVertical(4),color:'#037276',
           fontWeight:'bold'}}>
                    Address:
           </Text>
           <TextInput 
           icon="login"
            mode="contained"
            placeholder="For Example(denny1)"
            placeholderTextColor="grey" 
            underlineColorAndroid="transparent"
            value={this.state.address} onChangeText={(text)=> this.setState({address:text})}
           style={{borderRadius:3,borderWidth:1,borderColor:'#707070',padding:(10),height:41}} />
        </View>
        <View style={{marginHorizontal:moderateScaleVertical(10),marginTop:moderateScaleVertical(20)}}>
           <Text style={{fontSize:textScale(14),marginHorizontal:moderateScaleVertical(4),color:'#037276',
           fontWeight:'bold'}}>
                    Phone Number: 
           </Text>
           <TextInput 
           icon="login"
            mode="contained"
            placeholder="For Example(denny1)"
            placeholderTextColor="grey" 
            underlineColorAndroid="transparent"
            value={this.state.phone} onChangeText={(text)=> this.setState({phone:text})}
           style={{borderRadius:3,borderWidth:1,borderColor:'#707070',padding:(10),height:41}} />
        </View>
        <View style={{marginHorizontal:moderateScaleVertical(10),marginTop:moderateScaleVertical(20)}}>
           <Text style={{fontSize:textScale(14),marginHorizontal:moderateScaleVertical(4),color:'#037276',
           fontWeight:'bold'}}>
                    Email:
           </Text>
           <TextInput 
           icon="login"
            mode="contained"
            placeholder="For Example(denny1)"
            placeholderTextColor="grey" 
            underlineColorAndroid="transparent"
            value={this.state.email} onChangeText={(text)=> this.setState({email:text})}
           style={{borderRadius:3,borderWidth:1,borderColor:'#707070',padding:(10),height:41}} />
        </View>
          <View style={{marginHorizontal:moderateScaleVertical(10),marginTop:moderateScaleVertical(20)}}>
           <Text style={{fontSize:textScale(14),marginHorizontal:moderateScaleVertical(4),color:'#037276',
           fontWeight:'bold'}}>
                    Zipcode:
           </Text>
           <TextInput 
           icon="login"
            mode="contained"
            placeholder="For Example(23221)"
            placeholderTextColor="grey" 
            underlineColorAndroid="transparent"
            value={this.state.zipcode} onChangeText={(text)=> this.setState({zipcode:text})}
           style={{borderRadius:3,borderWidth:1,borderColor:'#707070',padding:(10),height:41}} />
        </View>
       </View>
         </ScrollView>
        <View style={styles.bottomView}>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate('Payment')}>
              <Text style={styles.textStyle}>Next Step   </Text>
             </TouchableOpacity>
        </View>
    </View>
    );
  }
}
    
export default Delivery;

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
