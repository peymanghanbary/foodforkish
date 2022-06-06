import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from '../screens/index';
import Search from '../screens/product/search';
import Profile from '../screens/profile/index';
import EditProfile from '../screens/profile/edit';
import createStore from '../screens/store/create';
import createPost from '../screens/post/create';
import Register from '../screens/profile/register';
import Login from '../screens/profile/login';
import Product from '../screens/product/product';
import Header from './header';
import { AntDesign,Feather } from '@expo/vector-icons';
import {VStack,Text,Badge} from 'native-base'; 
import { StyleSheet } from 'react-native';
import { useSelector,useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Tab = createBottomTabNavigator();

const headerTitle=(props)=>(
  <Header {...props} />
)

const headerRight=()=>{
  const {basketCount}=useSelector(state=>state.basketCountReducer);
  return (
    <VStack position={'relative'}>
        <Badge
          colorScheme="danger"
          rounded="999px"
          zIndex={1}
          variant="solid"
          alignSelf="flex-end"
          _text={{
            fontSize: 10,
            fontWeight:'bold'
          }}
          position={'absolute'}
          top={-8}
          left={2}
        >
          {basketCount}
        </Badge>
        <Feather style={{color:'#facc15',marginRight:0}} name="shopping-cart" size={24} color="black" />
    </VStack>
  )
}

const Tabs=()=> {

  const userRedux=useSelector(state=>state.userLoginDataReducer.user);
  let userStorage=null;
  const getUser = async () => {
    try {
    let jsonValue = await AsyncStorage.getItem('@user')
    userStorage=jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
        // error reading value
  }
  }
  const screenOptions={
    headerTitle :headerTitle,
    headerRight:headerRight,
    headerRightContainerStyle:{
      paddingRight:15,
    },
    headerTitleAlign:'center',
    tabBarShowLabel:false,
    tabBarStyle:{
        position:'absolute',
        bottom:20,
        right:20,
        left:20,
        elevation:0,
        backgroundColor:'#ffffff',
        borderRadius:5,
        height:70,
        marginTop:30,
        borderTopWidth:2,
        borderTopColor:'#facc15',
        ...styles.shadow
    }
  }
  return (
    <Tab.Navigator backBehavior='history' sceneContainerStyle={{paddingBottom:90}}>

    <Tab.Screen name="Home" component={Index} options={{...screenOptions,tabBarIcon:({focused})=>(
        <VStack alignItems={'center'}>
            <AntDesign style={{color:focused?'#facc15':'#000'}} name="home" size={24} color="black" />
            <Text color={focused?'#facc15':'#000'} fontFamily={'IranSans'}>خانه</Text>
        </VStack>
    )}} />
    
    <Tab.Screen name="Search" component={Search} options={{...screenOptions,headerShown:false,tabBarIcon:({focused})=>(
      <VStack alignItems={'center'}>
          <AntDesign style={{color:focused?'#facc15':'#000'}} name="search1" size={24} color="black" />
          <Text color={focused?'#facc15':'#000'} fontFamily={'IranSans'}>بگرد</Text>
      </VStack>
    )}} headerShown={false} />
    <Tab.Screen name="PostNavigator" component={PostNavigator} listeners={({ navigation }) => ({tabPress: onPostPress(navigation,{userRedux,userStorage}),})} options={{...screenOptions,headerShown:false,tabBarIcon:({focused})=>(
      <VStack alignItems={'center'}>
          <AntDesign style={{color:'#facc15'}} name="pluscircle" size={40} color="black" />
          <Text color={focused?'#facc15':'#000'} fontFamily={'IranSans'}>جدید</Text>
      </VStack>
    )}} />
    <Tab.Screen name="Favorites" component={Index} options={{...screenOptions,tabBarIcon:({focused})=>(
      <VStack alignItems={'center'}>
          <AntDesign style={{color:focused?'#facc15':'#000'}} name="hearto" size={24} color="black" />
          <Text color={focused?'#facc15':'#000'} fontFamily={'IranSans'}>علاقه</Text>
      </VStack>
    )}} />
    <Tab.Screen name="ProfileNavigator" component={ProfileNavigator} listeners={({ navigation }) => ({tabPress: onProfilePress(navigation,{userRedux,userStorage}),})} options={{...screenOptions,headerShown:false,tabBarIcon:({focused})=>(
      <VStack alignItems={'center'}>
          <AntDesign style={{color:focused?'#facc15':'#000'}} name="user" size={24} color="black" />
          <Text color={focused?'#facc15':'#000'} fontFamily={'IranSans'}>پروفایل</Text>
      </VStack>
    )}} />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

const ProfileNavigator=()=>{
  return (
    <Stack.Navigator initialRouteName='Profile' screenOptions={{headerTitle :headerTitle,headerRight:headerRight,headerTitleAlign:'center'}}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="Edit" component={EditProfile} />
    </Stack.Navigator>
  )
}

const PostNavigator=()=>{
  return (
    <Stack.Navigator initialRouteName='createPost' screenOptions={{headerTitle :headerTitle,headerRight:headerRight,headerTitleAlign:'center'}}>
      <Stack.Screen name="createPost" component={createPost} />
      <Stack.Screen name="createStore" component={createStore} />
    </Stack.Navigator>
  )
}

const onProfilePress=(navigation,user)=>(e) => {
  // Prevent default action
  e.preventDefault();
  let userObject=user.userRedux??user.userStorage;

  if(userObject){
    if(userObject.api_token){
      navigation.navigate("ProfileNavigator",{screen:'Profile'});
    }else{
      navigation.navigate("ProfileNavigator",{screen:'Register'});
    }
  }else{
    navigation.navigate("ProfileNavigator",{screen:'Register'});
  }
}

const onPostPress=(navigation,user)=>(e) => {
  // Prevent default action
  e.preventDefault();
  let userObject=user.userRedux??user.userStorage;

  if(userObject){
    if(userObject.storeName!=''){
      navigation.navigate("PostNavigator");
    }else{
      navigation.navigate("PostNavigator",{screen:'createStore'});
    }
  }else{
    navigation.navigate("ProfileNavigator",{screen:'Register'});
  }

}

const styles=StyleSheet.create({
  shadow:{
    shadowColor:'#7F5DF0',
    shadowOffset:{
      width:0,
      height:10
    }
  },
  shadowOpacity:0.25,
  shadowRadius:3.5,
  elevation:5
});

export default Tabs;