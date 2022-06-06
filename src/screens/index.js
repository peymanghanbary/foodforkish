import React, { useEffect, useState,useRef } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, TouchableOpacity,Dimensions,StyleSheet,LogBox,Platform, ToastAndroid } from 'react-native';
import * as TaskManager from 'expo-task-manager';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Location from 'expo-location';
import { Box, Button, Center,Image,Text,Pressable,Fab,Icon,StatusBar } from 'native-base';
import Api from '../../api/api';
import MainController, { getCurrentUser } from '../../controller/MainController';
import Pushe from "pushe-react-native";
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
//import * as Permissions from 'expo-permissions';
import { WebView } from 'react-native-webview';
import { AntDesign } from '@expo/vector-icons';
import Constants from 'expo-constants';


const LOCATION_TASK_NAME = 'background-location-task';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const Index = ({navigation}) => {
  //LogBox.ignoreAllLogs();
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();
  const {width,height}=Dimensions.get('window');
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

  registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

  // This listener is fired whenever a notification is received while the app is foregrounded
  // notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
  //   setNotification(notification);
  // });

  // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
  // responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
  //   console.log(response);
  // });

  // return () => {
  //   Notifications.removeNotificationSubscription(notificationListener.current);
  //   Notifications.removeNotificationSubscription(responseListener.current);
  // };

},[])

  const requestPermissions = async () => {
    const { status } = await Location.requestBackgroundPermissionsAsync();
    if (status === 'granted') {
      let locations=await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
        accuracy: Location.Accuracy.Highest, maximumAge: 10000,
      });
    }
  };

  // useFocusEffect(
  //   React.useCallback(() => {
  //     getUserData();
  //   }, [])
  // );
  
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
        //console.log('payload',data!=undefined?data.id:[]);
        setUserData(data)
      }
    }else{
      if(Object.keys(user).length>=0){
        setUser([]);
        signOut();
        //console.log('payload',data!=undefined?data.id:[]);
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
        source={{ uri: 'https://foodforkish.ir/delivery' }}
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

const SetExpoPushToken=async(expoPushToken,user)=>{
  let url='/delivery/set-expo-push-token?token='+user.auth_token+'&expoPushToken='+expoPushToken;
  await Api().post(url).then((response)=>{
      let {data}=response;
      console.log(response.data);
      ToastAndroid.show(response.data,ToastAndroid.LONG);
  }).catch(function (thrown) {
    console.log(thrown);
  });
}

// push notification
// Can use this function below, OR use Expo's Push Notification Tool-> https://expo.dev/notifications
// async function sendPushNotification(expoPushToken) {
//   const message = {
//     to: expoPushToken,
//     sound: 'default',
//     title: 'Original Title',
//     body: 'And here is the body!',
//     data: { someData: 'goes here' },
//   };

//   await fetch('https://exp.host/--/api/v2/push/send', {
//     method: 'POST',
//     headers: {
//       Accept: 'application/json',
//       'Accept-encoding': 'gzip, deflate',
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(message),
//   });
// }

async function registerForPushNotificationsAsync() {
  let token;
  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    ToastAndroid.show(token,ToastAndroid.LONG);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  let currentUser=await getCurrentUser();
  if(typeof currentUser=='object'){
    if(currentUser!=null){
      console.log(currentUser.auth_token);
      let result=await SetExpoPushToken(token,currentUser);
    }
  }

  return token;
}

export default Index;
