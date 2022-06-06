export const BASKET_COUNT_NUMBER="BASKET_COUNT_NUMBER";
export const SET_USER_LOGIN_DATA="SET_USER_LOGIN_DATA";

export const setBasketCount= count=>dispatch=>{
    dispatch({
        type:BASKET_COUNT_NUMBER,
        payload:count
    })
}

export const setUserLoginData= data=>dispatch=>{
    dispatch({
        type:SET_USER_LOGIN_DATA,
        payload:data
    })
}