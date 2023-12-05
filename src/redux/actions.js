export const INBOX_COUNT_NUMBER = "INBOX_COUNT_NUMBER";
export const BASKET_COUNT_NUMBER = "BASKET_COUNT_NUMBER";
export const BASKET_ITEMS = "BASKET_ITEMS";
export const PROFILE_COUNT_NUMBER = "PROFILE_COUNT_NUMBER";
export const SET_USER_LOGIN_DATA = "SET_USER_LOGIN_DATA";
export const SET_COMMISSION = "SET_COMMISSION";
export const SET_SEARCH_HISTORY = "SET_SEARCH_HISTORY";
export const SET_MESSAGE_COUNT = "SET_MESSAGE_COUNT";

export const setBasketCount = (count) => (dispatch) => {
  dispatch({
    type: BASKET_COUNT_NUMBER,
    payload: count,
  });
};

export const setBasket = (count) => (dispatch) => {
  dispatch({
    type: BASKET_ITEMS,
    payload: count,
  });
};

export const setInboxCount = (count) => (dispatch) => {
  dispatch({
    type: INBOX_COUNT_NUMBER,
    payload: count,
  });
};

export const setMessageCount = (count) => (dispatch) => {
  dispatch({
    type: SET_MESSAGE_COUNT,
    payload: count,
  });
};

export const setUserLoginData = (data) => (dispatch) => {
  dispatch({
    type: SET_USER_LOGIN_DATA,
    payload: data,
  });
};

export const setCommission = (data) => (dispatch) => {
  dispatch({
    type: SET_COMMISSION,
    payload: data,
  });
};

export const setProfileCount = (data) => (dispatch) => {
  dispatch({
    type: PROFILE_COUNT_NUMBER,
    payload: data,
  });
};

export const setSearchHistory = (data) => (dispatch) => {
  dispatch({
    type: SET_SEARCH_HISTORY,
    payload: data,
  });
};
