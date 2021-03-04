import React from 'react';
import {View,Text, Image,TextInput,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header1 from '../../components/Header1';
import {textScale,moderateScaleVertical}  from '../Responsive/index';

class ContactUs extends React.Component {
  state={
    name:'',
    email:'',
    message:'',
  }
    submit=()=>{
        alert("Are you sure, you want to submit?")
    }
  render() {
  return (
    <View style={{backgroundColor:'white',flex:1}}>
        <Header1 />
            <Text style={{fontSize:textScale(24),marginHorizontal:moderateScaleVertical(4),alignSelf:'center',fontWeight:'bold',color:'grey',marginTop:moderateScaleVertical(10)}}>
                    Contact Us
           </Text>
        <View style={{flexDirection:'row',padding:moderateScaleVertical(7)}}>
            <Icon  name="ios-navigate-outline" size={17} color='#037276' />
            <Text style={{fontSize:textScale(14),marginHorizontal:moderateScaleVertical(4),color:'grey',fontWeight:'bold'}}>
                Lets Get In Touch.
            </Text>
        </View>
        <View style={{flexDirection:'row',padding:moderateScaleVertical(7)}}>
            <Text style={{fontSize:textScale(18),marginHorizontal:moderateScaleVertical(4),color:'#037276',fontWeight:'bold'}}>
                    Send Us A Message!
           </Text>
       </View>
       <View style={{flexDirection:'row',marginHorizontal:moderateScaleVertical(7)}}>
            <Text style={{fontSize:textScale(14),marginHorizontal:moderateScaleVertical(4),color:'#037276',fontWeight:'bold'}}>
                    How can we help you today.
           </Text>
       </View>
       <View style={{marginHorizontal:moderateScaleVertical(10),marginTop:moderateScaleVertical(20)}}>
           <Text style={{fontSize:textScale(14),marginHorizontal:moderateScaleVertical(4),color:'#037276',
           fontWeight:'bold'}}>
                    Name: 
           </Text>
           <TextInput 
           icon="login"
            mode="contained"
            placeholder="For Example(denny1)"
            placeholderTextColor="grey" 
            underlineColorAndroid="transparent"
            value={this.state.name} onChangeText={(text)=> this.setState({name:text})}
           style={{borderRadius:10,borderWidth:1,borderColor:'#707070',padding:(10),height:41}} />
        </View> 
       <View style={{marginHorizontal:moderateScaleVertical(10),marginTop:moderateScaleVertical(20)}}>
           <Text style={{fontSize:textScale(14),marginHorizontal:moderateScaleVertical(4),color:'#037276',fontWeight:'bold'}}>
                    Email: 
           </Text>
           <TextInput 
           icon="login"
            mode="contained"
            placeholder="For Example(denny1@gmail.com)"
            placeholderTextColor="grey" 
            underlineColorAndroid="transparent"
            value={this.state.email} onChangeText={(text)=> this.setState({email:text})}
           style={{borderRadius:10,borderWidth:1,borderColor:'#707070',padding:(10),height:41}} />
     </View>
          
           <View style={{marginHorizontal:moderateScaleVertical(10),marginTop:moderateScaleVertical(20)}}>
           <Text style={{fontSize:textScale(14),marginHorizontal:moderateScaleVertical(4),color:'#037276',fontWeight:'bold'}}>
                    Message: 
           </Text>
           <TextInput 
              icon="login"
                mode="contained"
                placeholder="Enter your message here."
                placeholderTextColor="grey" 
                underlineColorAndroid="transparent"
                value={this.state.message} onChangeText={(text)=> this.setState({message:text})}
              style={{borderRadius:10,borderWidth:1,borderColor:'#707070',padding:(10),height:41}} />
       </View>
          
             <TouchableOpacity onPress={this.submit}>
       <View style={{marginTop:moderateScaleVertical(4),backgroundColor:'#037276',width:130,height:38,alignSelf:'flex-end',marginRight:moderateScaleVertical(30),borderRadius:20,marginTop:moderateScaleVertical(20)}}>
              <Text style={{fontSize:textScale(18),alignSelf:'center',color:'white',fontWeight:'bold',marginTop:moderateScaleVertical(7)}}>
                            Submit
              </Text>
        </View>
      </TouchableOpacity>

    </View>
    );
  }
}
export default ContactUs;

