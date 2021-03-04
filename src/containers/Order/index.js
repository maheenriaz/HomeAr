import React from 'react';
import {View, Text, StyleSheet,TextInput,Animated,ScrollView,Dimensions,TouchableOpacity,Image} from 'react-native';
import Header1 from '../../components/Header1';
import Icon from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {textScale,moderateScaleVertical}  from '../Responsive/index';

const { width } = Dimensions.get("window");

export default class Order extends React.Component {
    state = {
        active: 0,
        xTabOne: 0,
        xTabTwo: 0,
        open:false,
        translateX: new Animated.Value(0),
        translateXTabOne: new Animated.Value(0),
        translateXTabTwo: new Animated.Value(width),
        translateY: -1000
    };

    submit=()=>{
        alert("Are you sure, you want to submit?")
    }
    handleSlide = type => {
        let {
            active,
            xTabOne,
            xTabTwo,
            translateX,
            translateXTabOne,
            translateXTabTwo
        } = this.state;
        Animated.spring(translateX, {
            toValue: type,
            duration: 100
        }).start();
        if (active === 0) {
            Animated.parallel([
                Animated.spring(translateXTabOne, {
                    toValue: 0,
                    duration: 100
                }).start(),
                Animated.spring(translateXTabTwo, {
                    toValue: width,
                    duration: 100
                }).start()
            ]);
        } else {
            Animated.parallel([
                Animated.spring(translateXTabOne, {
                    toValue: -width,
                    duration: 100
                }).start(),
                Animated.spring(translateXTabTwo, {
                    toValue: 0,
                    duration: 100
                }).start()
            ]);
        }
    };

    render() {
        let {
            xTabOne,
            xTabTwo,
            translateX,
            active,
            translateXTabOne,
            translateXTabTwo,
            translateY
        } = this.state;
        return (
            <View style={{ flex: 1 }}>
                <Header1 />
             <View style={{padding:moderateScaleVertical(22)}}>
             <Text style={{color:'#525252',fontSize:textScale(17)}} >
                Orders
            </Text>
                <View
                    style={{
                        width: "100%",
                        marginHorizontal: "auto",
                        marginRight: "auto",
                        marginTop:moderateScaleVertical(-20)
                    }}
                >
                    
                    <View
                        style={{
                            flexDirection: "row",
                            marginTop: moderateScaleVertical(40),
                            marginBottom: moderateScaleVertical(20),
                            height: 36,
                            position: "relative"
                        }}
                    >
                        <Animated.View
                            style={{
                                position: "absolute",
                                width: "50%",
                                height: "100%",
                                top: 0,
                                left: 0,
                                backgroundColor: "#037276",
                                borderRadius: 4,
                                transform: [
                                    {
                                        translateX
                                    }
                                ]
                            }}
                        />
                        <TouchableOpacity
                            style={{
                                flex: 1,
                                justifyContent: "center",
                                alignItems: "center",
                                borderWidth: 1,
                                borderColor: "#037276",
                                borderRadius: 4,
                                borderRightWidth: 0,
                                borderTopRightRadius: 0,
                                borderBottomRightRadius: 0
                            }}
                            onLayout={event =>
                                this.setState({
                                    xTabOne: event.nativeEvent.layout.x
                                })
                            }
                            onPress={() =>
                                this.setState({ active: 0 }, () =>
                                    this.handleSlide(xTabOne)
                                )
                            }
                        >
                            <Text
                                style={{
                                    color: active === 0 ? "#fff" : "#037276"
                                }}
                            >
                                Pending
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                flex: 1,
                                justifyContent: "center",
                                alignItems: "center",
                                borderWidth: 1,
                                borderColor: "#037276",
                                borderRadius: 4,
                                borderLeftWidth: 0,
                                borderTopLeftRadius: 0,
                                borderBottomLeftRadius: 0
                            }}
                            onLayout={event =>
                                this.setState({
                                    xTabTwo: event.nativeEvent.layout.x
                                })
                            }
                            onPress={() =>
                                this.setState({ active: 1 }, () =>
                                    this.handleSlide(xTabTwo)
                                )
                            }
                        >
                            <Text
                                style={{
                                    color: active === 1 ? "#fff" : "#037276"
                                }}
                            >
                                Past
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <ScrollView>
                        <Animated.View
                            style={{
                                justifyContent: "center",
                                transform: [
                                    {
                                        translateX: translateXTabOne
                                    }
                                ]
                            }}
                            onLayout={event =>
                                this.setState({
                                    translateY: event.nativeEvent.layout.height
                                })
                            }
                        >
                           <View style={{ marginTop: moderateScaleVertical(20) }}>
                               <View style={{flexDirection:'row'}}>
                                 <Icon  name="md-phone-portrait-sharp" size={20} color='#037276' />
                                <Text style={{fontSize:18,fontWeight:'bold',color:'grey',marginHorizontal:17}}>Model Furniture</Text>
                              </View>
                              <View style={{flexDirection:'row',marginTop:moderateScaleVertical(10)}}>
                                 <Icon  name="home" size={20} color='#037276' />
                                 <View>
                                    <Text style={{fontSize:18,fontWeight:'bold',color:'grey',marginHorizontal:17}}>Home</Text>
                                    <Text style={{fontSize:12,marginHorizontal:17,color:'grey'}}>R920 Block 14 Karachi.</Text>
                                 </View>
                              </View>
                              <View style={{flexDirection:'row',marginTop:moderateScaleVertical(10)}}>
                                 <Icon  name="map-sharp" size={20} color='#037276' />
                                 <View>
                                    <Text style={{fontSize:18,fontWeight:'bold',color:'grey',marginHorizontal:17}}>ORD-4172</Text>
                                    <Text style={{fontSize:12,marginHorizontal:17,color:'grey'}}>On Sept 12, 03:10 PM</Text>
                                 </View>
                              </View>
                              <View style={{borderWidth:0.3,borderColor:'grey',marginVertical:17}}>
                                </View>
                                <View>
                                  <Text style={{fontSize:18,fontWeight:'bold',color:'grey',marginHorizontal:17}}>Order Status</Text>
                                    <View style={{justifyContent:'flex-end',flexDirection:'row',marginVertical:-20}}>
                                      <Text style={{fontSize:18,fontWeight:'bold',color:'grey',marginHorizontal:17}}>Pending</Text>
                                    </View>
                                </View>
                            </View>
                        </Animated.View>

                        <Animated.View
                            style={{
                                justifyContent: "center",
                               transform: [
                                    {
                                        translateX: translateXTabTwo
                                    },
                                    {
                                        translateY: -translateY
                                    }
                                ]
                            }}
                        >
                           <View style={{ marginTop: moderateScaleVertical(20) }}>
                               <View style={{flexDirection:'row'}}>
                                 <Icon  name="md-phone-portrait-sharp" size={20} color='#037276' />
                                <Text style={{fontSize:18,fontWeight:'bold',color:'grey',marginHorizontal:17}}>Model Furniture</Text>
                              </View>
                              <View style={{flexDirection:'row',marginTop:moderateScaleVertical(10)}}>
                                 <Icon  name="home" size={20} color='#037276' />
                                 <View>
                                    <Text style={{fontSize:18,fontWeight:'bold',color:'grey',marginHorizontal:17}}>Home</Text>
                                    <Text style={{fontSize:12,marginHorizontal:17,color:'grey'}}>R920 Block 14 Karachi.</Text>
                                 </View>
                              </View>
                              <View style={{flexDirection:'row',marginTop:moderateScaleVertical(10)}}>
                                 <Icon  name="map-sharp" size={20} color='#037276' />
                                 <View>
                                    <Text style={{fontSize:18,fontWeight:'bold',color:'grey',marginHorizontal:17}}>ORD-4172</Text>
                                    <Text style={{fontSize:12,marginHorizontal:17,color:'grey'}}>On Sept 12, 03:10 PM</Text>
                                 </View>
                              </View>
                              <View style={{borderWidth:0.3,borderColor:'grey',marginVertical:17}}>
                                </View>
                                <View>
                                  <Text style={{fontSize:18,fontWeight:'bold',color:'grey',marginHorizontal:17}}>Order Status</Text>
                                    <View style={{justifyContent:'flex-end',flexDirection:'row',marginVertical:-20}}>
                                      <Text style={{fontSize:18,fontWeight:'bold',color:'grey',marginHorizontal:17}}>Delivered</Text>
                                    </View>
                             </View>

                             <TouchableOpacity onPress={()=> this.setState({open:!this.state.open})}>
                             <View style={{flexDirection:'row',marginVertical:30}}>
                                <Text style={{fontSize:18,fontWeight:'bold',color:'grey',marginHorizontal:17}}>Rate Us</Text>
                                <Icon  name="chevron-down-outline" size={18} color='#037276' style={{marginHorizontal:-10}} />
                              </View>
                              </TouchableOpacity>
                            { this.state.open ? 
                            <View  style={{marginHorizontal:20,marginVertical:-27}}>
                              <View style={{flexDirection:"row"}}>
                                <Icon  name="star" size={18} color='orange'  />
                                <Icon  name="star" size={18} color='orange'  />
                                <Icon  name="star" size={18} color='orange'  />
                                <Icon  name="star-outline" size={18} color='orange'  />
                             </View>
                            <View style={{flexDirection:"column"}}>
                              <TextInput 
                                    icon="login"
                                        mode="contained"
                                        placeholder="For Example(denny1)"
                                        placeholderTextColor="grey" 
                                        underlineColorAndroid="transparent"
                                        multiline={true}
                                        value={this.state.name} onChangeText={(text)=> this.setState({name:text})}
                                    style={{borderRadius:10,borderWidth:1,borderColor:'#707070',height:81,marginVertical:20,textAlignVertical:'top'}} />
                                      <TouchableOpacity onPress={this.submit}>
                                        <View style={{backgroundColor:'#037276',width:120,height:31,alignSelf:'flex-end',marginRight:moderateScaleVertical(20),borderRadius:20}}>
                                                <Text style={{fontSize:textScale(14),alignSelf:'center',color:'white',fontWeight:'bold',marginTop:moderateScaleVertical(7)}}>
                                                                Submit
                                                       </Text>
                                         </View>
                                         </TouchableOpacity>
                             </View>
                             </View>
                             
                             :
                             <View></View>
                             }
                            </View>
                        </Animated.View>
                    </ScrollView>
                </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: moderateScaleVertical(20),
  },
});
