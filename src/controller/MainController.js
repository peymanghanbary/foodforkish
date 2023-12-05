import Api from "../api/api";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getCurrentUser=async()=>{
    const currentUser=await AsyncStorage.getItem('user');
    return JSON.parse(currentUser);
}
export const SendLocation=async(locations)=>{
    let res=await Api().post('/delivery/set-delivery-guy-gps-location?token=&user_id=11&delivery_lat=23&delivery_long=42&heading=0').then((response)=>{
        //console.log(response.data);
        let {data}=response;
        console.log(data);
    }).catch(function (thrown) {
    });
}