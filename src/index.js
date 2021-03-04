//Navigations here
import React, {Component} from 'react';
import { SafeAreaView,ImageBackground,View,Text,TouchableOpacity,Image,ScrollView,Dimensions } from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/Ionicons';
//Screens
import {Splash, Home,OnboardingScreen,Products,Search,DetailedProduct,ContactUs,Help,Wishlist,MyCart,Responsive,About,Login,Signup,Signup2,Signup3,Signup4,Signup5,Order,AddCart,Checkout,Delivery,Payment,OrderStep} from './containers';
import { createMaterialBottomTabNavigator,BottomTabBar } from "react-navigation-material-bottom-tabs";

const {width}= Dimensions.get('window')
const SplashStack = createStackNavigator(
  {
    Splash: {screen: Splash},
  },
  {
    initialRouteParams: 'Splash',
    headerMode: 'none',
  },
);

const OnboardingScreenStack = createStackNavigator(
  {
    OnboardingScreen: {screen: OnboardingScreen},
  },
  {
    initialRouteParams: 'OnboardingScreen',
    headerMode: 'none',
  },
);
const HomeScreenStack = createStackNavigator(
  {
    Home: {screen: Home},
    ContactUs: {screen: ContactUs},
    Products: {screen: Products},
    About: {screen: About},
    DetailedProduct: {screen: DetailedProduct},
    Help: {screen: Help},
    Wishlist: {screen: Wishlist},
    MyCart: {screen: MyCart},
    Order: {screen: Order},
  },
  {
    initialRouteParams: 'Home',
    headerMode: 'none',
  },
);
const SearchScreenStack = createStackNavigator(
  {
    Search: {screen: Search},  
  },
  {
    initialRouteParams: 'Search',
    headerMode: 'none',
  },
);
const AddCartScreenStack = createStackNavigator(
  {
    AddCart: {screen: AddCart}, 
    Checkout: {screen: Checkout},  
    Delivery: {screen: Delivery},  
    Payment: {screen: Payment},  
    OrderStep: {screen: OrderStep},  
  },
  {
    initialRouteParams: 'AddCart',
    headerMode: 'none',
  },
);
const LoginScreenStack = createStackNavigator(
  {
    Login: {screen: Login},  
  },
  {
    initialRouteParams: 'Login',
    headerMode: 'none',
  },
);
const SignupScreenStack = createStackNavigator(
  {
    Signup: {screen: Signup},  
    Signup2: {screen: Signup2},  
    Signup3: {screen: Signup3},  
    Signup4: {screen: Signup4},  
    Signup5: {screen: Signup5},  
  },
  {
    initialRouteParams: 'Signup',
    headerMode: 'none',
  },
);
const CustomDrawerContentComponent=(props)=>{
  return (
  <View style={{backgroundColor:'#037276',flex:1,justifyContent:'flex-start'}}  >
    <SafeAreaView>
    <View style={{height:170,borderWidth:2,borderColor:'white',flexDirection:'row'}}>
         <Image source={require('./assets/default.png')} style={{width:100,height:100,marginHorizontal:10,borderRadius:70,marginTop:30}}/>
          <View style={{flexDirection:'column'}}>
            <Text style={{fontSize:18,marginTop:32,marginLeft:10,color:'white'}}>Anila Ali</Text>
            <Text style={{fontSize:18,marginTop:2,marginLeft:10,color:'white'}}>03314928910</Text>
          </View>
         </View>
     <View>
     <TouchableOpacity onPress={()=> {props.navigation.navigate('Products'); props.navigation.closeDrawer();}} >
        <View style={{flexDirection:'row',padding:20}}>
          <Icon  name="basket-outline" size={20} color='white' />
          <Text style={{fontSize:18,color:'white', marginLeft:10}}>Products</Text>
        </View>
        </TouchableOpacity >
     <TouchableOpacity onPress={()=> {props.navigation.navigate('ContactUs'); props.navigation.closeDrawer();}} >
        <View style={{flexDirection:'row',padding:20}}>
        <Icon  name="call-outline" size={20} color='white' />
          <Text style={{fontSize:18,color:'white', marginLeft:10}}>Contact Us</Text>
        </View>
        </TouchableOpacity>
     <TouchableOpacity onPress={()=> {props.navigation.navigate('About'); props.navigation.closeDrawer();}} >
        <View style={{flexDirection:'row',padding:20}}>
        <Icon  name="color-filter-outline" size={20} color='white' />
         <Text style={{fontSize:18,color:'white', marginLeft:10}}>About Us</Text>
        </View>
        </TouchableOpacity>
     <TouchableOpacity onPress={()=> {props.navigation.navigate('MyCart'); props.navigation.closeDrawer();}} >
        <View style={{flexDirection:'row',padding:20}}>
        <Icon  name="cart-outline" size={20} color='white' />
          <Text style={{fontSize:18,color:'white', marginLeft:10}}>My Cart</Text>
        </View>
        </TouchableOpacity>
     <TouchableOpacity onPress={()=> {props.navigation.navigate('Wishlist'); props.navigation.closeDrawer();}} >
        <View style={{flexDirection:'row',padding:20}}>
        <Icon  name="heart-outline" size={20} color='white' />
          <Text style={{fontSize:18,color:'white', marginLeft:10}}>Wishlist</Text>
        </View>
        </TouchableOpacity>
     <TouchableOpacity onPress={()=> {props.navigation.navigate('Order'); props.navigation.closeDrawer();}} >
        <View style={{flexDirection:'row',padding:20}}>
        <Icon  name="cart-outline" size={20} color='white' />
          <Text style={{fontSize:18,color:'white', marginLeft:10}}>Orders</Text>
        </View>
        </TouchableOpacity>

     <TouchableOpacity onPress={()=> {props.navigation.navigate('Help'); props.navigation.closeDrawer();}} >
        <View style={{flexDirection:'row',padding:20}}>
        <Icon  name="md-help-circle-outline" size={20} color='white' />
          <Text style={{fontSize:18,color:'white', marginLeft:10}}>Help</Text>
        </View>
        </TouchableOpacity>
     <TouchableOpacity onPress={()=> {props.navigation.navigate('Login'); props.navigation.closeDrawer();}} >
        <View style={{flexDirection:'row',padding:20}}>
        <Icon  name="ios-power-outline" size={20} color='white' />
          <Text style={{fontSize:18,color:'white', marginLeft:10}}>Login</Text>
        </View>
        </TouchableOpacity>

      </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
      </SafeAreaView>
  </View>
  )
}
LoginScreenStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible;
  if (navigation.state.routes.length === 1) {
    navigation.state.routes.map(route => {
      if (route.routeName === "Login" ) {
        tabBarVisible = true;
      } else {
        tabBarVisible = false;
      }
    });
  }
  return {
    tabBarVisible
  };
};
AddCartScreenStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible;
  if (navigation.state.routes.length === 1 || navigation.state.routes.length === 2 || navigation.state.routes.length === 3 || navigation.state.routes.length === 4 || navigation.state.routes.length === 5) {
   navigation.state.routes.map(route => {
      if (route.routeName === "AddCart" || route.routeName === "Checkout" || route.routeName === "Delivery" || route.routeName === "Payment" || route.routeName === "OrderStep") {
       tabBarVisible = false;
      } else {
        tabBarVisible = true;
      }
    });
  }
  return {
    tabBarVisible
  };
};
const TabNavigator = createMaterialBottomTabNavigator({
  Home: { screen: HomeScreenStack,
  navigationOptions:{
    tabBarIcon:({tintColor})=>(
      <View>
        <Icon name='ios-home' style={{color:tintColor}} size={22}></Icon>
      </View>
    )
  } },
  AddCart: { screen: AddCartScreenStack,
    navigationOptions:{
      tabBarIcon:({tintColor})=>(
        <View>
          <Icon name='ios-home' style={{color:tintColor}} size={22}></Icon>
        </View>
      )
    } },
  Search: { screen:  SearchScreenStack, 
    navigationOptions:{
    tabBarIcon:({tintColor})=>(
      <View>
        <Icon name='ios-search' style={{color:tintColor}} size={22}></Icon>
      </View>
    )
  }},
},

{
  initialRouteName: 'Home',
  activeColor: '#ffffffff',
  inactiveColor: '#434444',
  barStyle: { backgroundColor: '#037276' },
},
)
const DrawerNavigator = createDrawerNavigator({
  Tab: {
    screen: TabNavigator,
  },
  Search: {
    screen: SearchScreenStack
  },
  Products: {
    screen: HomeScreenStack
  },
  ContactUs: {
    screen: HomeScreenStack
  },
  Help: {
    screen: HomeScreenStack
  },
  Wishlist: {
    screen: HomeScreenStack
  },
  MyCart: {
    screen: HomeScreenStack
  },
  About: {
    screen: HomeScreenStack
  },
  Login: {
    screen: LoginScreenStack
  },
  Signup: {
    screen: SignupScreenStack
  },
  Signup2: {
    screen: SignupScreenStack
  },
  Signup3: {
    screen: SignupScreenStack
  },
  Signup4: {
    screen: SignupScreenStack
  },
  Signup5: {
    screen: SignupScreenStack
  },
  Order: {
    screen: HomeScreenStack
  },

},
{
  contentComponent:CustomDrawerContentComponent,
  drawerBackgroundColor: '#037276',
  drawerPosition:'left',
  drawerOpenRoute:'DrawerOpen',
  drawerOpenRoute:'DrawerOpen',
  drawerWidth:width*2/3,
  contentOptions:{
    activeTintColor:'orange'
  }
}
);
const RootStack = createAppContainer(
  createSwitchNavigator(
    {
      Splash:SplashStack,
      OnboardingScreen: OnboardingScreenStack,
      DrawerNavigator: DrawerNavigator,
      Login:LoginScreenStack,
      Signup:SignupScreenStack,
      Signup2:SignupScreenStack,
      Signup3:SignupScreenStack,
      Signup4:SignupScreenStack   ,
      Signup5:SignupScreenStack   
    },
    {
      initialRouteParams: 'DrawerNavigator',
    },
  ),
);

export default RootStack;
