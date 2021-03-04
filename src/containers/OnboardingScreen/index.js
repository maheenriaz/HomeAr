import React from 'react';
import {View, Text, StyleSheet,Image,TouchableOpacity,Button} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';



export default class OnboardingScreen extends React.Component {
   Skip=({... props})=>{
    return  <TouchableOpacity style={{marginHorizontal:9}} onPress={()=>this.props.navigation.navigate('Home')}>
      <View>
        <Text style={{color:'white',fontSize:17}}>Skip</Text>
        </View>
    </TouchableOpacity>
  }
   Next=({... props})=>{
   return <TouchableOpacity style={{marginHorizontal:9}} {...props}>
   <View>
     <Text style={{color:'white',fontSize:17}}>Next</Text>
     </View>
 </TouchableOpacity>
  }
   Done=({... props})=>{
   return <TouchableOpacity style={{marginHorizontal:9}} onPress={()=>this.props.navigation.navigate('Home')}>
   <View>
     <Text style={{color:'white',fontSize:17}}>Done</Text>
     </View>
 </TouchableOpacity>
  }
   Dot =({selected})=>{
    let backgroundColor;
    backgroundColor= selected ? 'rgba(0,0,0,0.8)' : 'white';
  return(
        <View style={{width:5,height:5,marginHorizontal:3,backgroundColor}}></View>
    )
  }
  render(){
    return(
      <Onboarding bottomBarColor='#037276' 
      onSkip={()=> this.props.navigation.navigate('Home')}
      onDone={()=> this.props.navigation.navigate('Home')}
      
        DotComponent={this.Dot}
        NextButtonComponent={this.Next}
        SkipButtonComponent={this.Skip}
        DoneButtonComponent={this.Done}
        pages={[
          {
            backgroundColor: '#fff',
            image: <Image source={require('../../assets/onboarding1.png')} style={{height:230,width:'70%'}}/>,
            title: 'Welcome To Home Ar',
            subtitle: 'The World Of Reality And Imagination.',
           },
          {
            backgroundColor: '#fff',
            image: <Image source={require('../../assets/onboarding2.png')} style={{height:230,width:'70%'}} />,
            title: 'Your Infinite Wishlist',
            subtitle: 'Discover what furniture is best for your place.',
          },
          {
            backgroundColor: '#fff',
            image: <Image source={require('../../assets/onboarding3.png')} style={{height:230,width:'70%'}} />,
            title: 'Accept the Terms and Conditions',
            subtitle: "Place Furniture on your favourite place",
          },
        ]}
      />
    )
  }
 
}


const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
  },
});
