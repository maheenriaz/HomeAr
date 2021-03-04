import React from 'react';
import {View, Text, StyleSheet,TextInput} from 'react-native';
import Header1 from '../../components/Header1';
import Icon from 'react-native-vector-icons/Ionicons';
import {textScale,moderateScaleVertical}  from '../Responsive/index';

class Search extends React.Component {
  render() {
    return (
      <View style={styles.main}>
        <Header1 navigation={this.props.navigation} />
        <View style={{padding:moderateScaleVertical(10)}}>
          <Text style={{color:'#525252',fontSize:textScale(17),marginLeft:moderateScaleVertical(4)}} >
            Search
          </Text>
          <TextInput placeholder='Search here' style={{borderRadius:10,borderWidth:1,borderColor:'#707070',padding:(10),height:41}}></TextInput>
          <View>
          <Text style={{color:'#525252',fontSize:textScale(13),marginLeft:moderateScaleVertical(5)}}>Recent Search</Text>
            <View style={{flexDirection:'row'}}>
              <Text style={{color:'#525252',fontSize:textScale(17),marginLeft:moderateScaleVertical(4)}}>Mettalic Cupboard</Text>
               <Icon name='close' style={{color:'grey',marginLeft:moderateScaleVertical(249)}} size={22}></Icon>
            </View>
            <View style={{flexDirection:'row'}}>
              <Text style={{color:'#525252',fontSize:textScale(17),marginLeft:moderateScaleVertical(5)}}>Formica Bed</Text>
               <Icon name='close' style={{color:'grey',marginLeft:moderateScaleVertical(292)}} size={22}></Icon>
            </View>
            <View style={{flexDirection:'row'}}>
              <Text style={{color:'#525252',fontSize:textScale(17),marginLeft:moderateScaleVertical(4)}}>Dico Side Table</Text>
               <Icon name='close' style={{color:'grey',marginLeft:moderateScaleVertical(273)}} size={22}></Icon>
            </View>
          </View>
        </View>
       
      </View>
    );
  }
}
    
export default Search;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: moderateScaleVertical(20),
  },
});
