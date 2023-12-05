import React, { useEffect, useState,useRef } from 'react';
import * as TaskManager from 'expo-task-manager';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Box,StatusBar } from 'native-base';
import { WebView } from 'react-native-webview';
import Api from '../../api/api';
import { getCurrentUser } from '../../controller/MainController';
const LOCATION_TASK_NAME = 'background-location-task';

const HomeIndex = ({navigation}) => {

  const [loggedIn,setIsLoggedIn]=useState(true);
  const [user,setUser]=useState([]);
  const [js,setJs]=useState(`(function(){ 
    setInterval(()=>{
    let tk=window.localStorage.getItem('state');
    window.ReactNativeWebView.postMessage(tk);
    },5000)
  })();`);
  const [loginData,setLoginData]=useState([]);
  const webViewRef = useRef();

useEffect(()=>{
  getStorageData();
  if(webViewRef.current){
    webViewRef.current.reload();
  }
},[])

  const getStorageData = async () => {
      try {
        let userJson = await AsyncStorage.getItem('user')
        let loginJson = await AsyncStorage.getItem('loginData')
        userJson=userJson != null ? JSON.parse(userJson) : null;
        if(userJson!=null){
          setUser(userJson);
          setIsLoggedIn(true);
        }
      } catch(e) {

      }
  }  
  
  const setUserData = async (user) => {
    try {
      await AsyncStorage.setItem('user',JSON.stringify(user));
    } catch(e) {
      console.log(e);
    }
  }

  const onMessage = (payload) => {
    let data=JSON.parse(payload.nativeEvent.data).delivery_user.delivery_user.data;
    if(data!=undefined){
      if(Object.keys(user).length<=0){
        setUser(data);
        setUserData(data)
      }
    }else{
      if(Object.keys(user).length>=0){
        setUser([]);
        signOut();
      }
    }
  };

  const signOut=()=>{
    AsyncStorage.clear();
    setIsLoggedIn(false);
    setUser([]);
    setLoginData([]);
  }

  return (
      <Box bg={'#282c3f'} flex={1}>
        <StatusBar barStyle='light-content'/>
        <WebView
        ref={(ref) => webViewRef.current = ref}
        javaScriptEnabled={true}
        injectedJavaScript={js}
        domStorageEnabled={true}
        style={{flex: 1,backgroundColor:'#282c3f'}}
        source={{ uri: 'https://delivery.f4k.ir/delivery' }}
        onMessage={onMessage}
      />
    </Box>
  )

};

TaskManager.defineTask(LOCATION_TASK_NAME, async({ data, error }) => {
  if (error) {
    // Error occurred - check `error.message` for more details.
    return;
  }
  if (data) {
    const { locations } = data;
    let currentUser=await getCurrentUser();
    if(typeof currentUser=='object'){
      if(currentUser!=null){
        console.log(currentUser.auth_token);
        let result=await SendLocation(locations[0].coords,currentUser);
      }
    }
  }
});

const SendLocation=async(location,user)=>{
  let url='/delivery/set-delivery-guy-gps-location?token='+user.auth_token+'&user_id='+user.id+'&delivery_lat='+location.latitude+'&delivery_long='+location.longitude+'&heading='+location.heading;
  await Api().post(url).then((response)=>{
      let {data}=response;
      console.log(response.data);
  }).catch(function (thrown) {
    console.log(thrown);
  });
}

export default HomeIndex;