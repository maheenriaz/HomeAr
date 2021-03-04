import React from 'react';
import {View,Text, Image} from 'react-native';

class Splash extends React.Component {
  componentDidMount(){
    setTimeout(() => {
      this.props.navigation.navigate('OnboardingScreen')
    }, 2000);
  }
  render() {
  return (
      <View style={{flex: 1,backgroundColor:'#037276',justifyContent:'center',alignItems:'center'}}>
        <Image source={require('../../assets/logo.png')} style={{width:'70%',height:200}}/>
      </View>
    );
  }
}
export default Splash;

