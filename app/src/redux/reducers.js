import { BASKET_COUNT_NUMBER,SET_USER_LOGIN_DATA } from "./actions";

const initialState={
    basketCount:0
}

const initialStateUserData={
    user:[]
}

export function basketCountReducer(state=initialState,action){

    switch(action.type){
        case BASKET_COUNT_NUMBER:
            return {...state,basketCount:action.payload}
        default:
            return state;
    }

}

export function userLoginDataReducer(state=initialStateUserData,action){

    switch(action.type){
        case SET_USER_LOGIN_DATA:
            return {...state,user:action.payload}
        default:
            return state;
    }

}