import axios from 'axios';

const Api=()=>{
    //let api_token=user&&user!=undefined?user.api_token:'api_token';
    return axios.create({
        baseURL:'https://foodforkish.ir/public/api/',
        headers: {
            'Authorization': 'Bearer ',
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data',
        }
    })
}

export default Api;