import {
  BASKET_COUNT_NUMBER,
  SET_USER_LOGIN_DATA,
  INBOX_COUNT_NUMBER,
  PROFILE_COUNT_NUMBER,
  BASKET_ITEMS,
  SET_SEARCH_HISTORY,
  SET_MESSAGE_COUNT,
  SET_COMMISSION,
} from "./actions";
import { profileCountInit, userDataInit } from "../components/constant";

const initialState = {
  basketCount: 0,
};

const initialInboxState = {
  inboxCount: 0,
};

const initialMessageState = {
  messageCount: 0,
};

const initialProfileState = {
  profileCount: profileCountInit,
};

const initialStateUserData = {
  user: userDataInit,
};

const initialCommission = {
  commission: {
    product: 0,
  },
};

const initialBasket = {
  basket: [],
};

const initialSearchHistory = {
  searchHistoryItems: [],
};

export function basketCountReducer(state = initialState, action) {
  switch (action.type) {
    case BASKET_COUNT_NUMBER:
      return { ...state, basketCount: action.payload };
    default:
      return state;
  }
}

export function basketReducer(state = initialBasket, action) {
  switch (action.type) {
    case BASKET_ITEMS:
      return { ...state, basket: action.payload };
    default:
      return state;
  }
}

export function inboxCountReducer(state = initialInboxState, action) {
  switch (action.type) {
    case INBOX_COUNT_NUMBER:
      return { ...state, inboxCount: action.payload };
    default:
      return state;
  }
}

export function messageCountReducer(state = initialMessageState, action) {
  switch (action.type) {
    case SET_MESSAGE_COUNT:
      return { ...state, messageCount: action.payload };
    default:
      return state;
  }
}

export function userLoginDataReducer(state = initialStateUserData, action) {
  switch (action.type) {
    case SET_USER_LOGIN_DATA:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}

export function commissionReducer(state = initialCommission, action) {
  switch (action.type) {
    case SET_COMMISSION:
      return { ...state, commission: action.payload };
    default:
      return state;
  }
}

export function profileCountReducer(state = initialProfileState, action) {
  switch (action.type) {
    case PROFILE_COUNT_NUMBER:
      return { ...state, profileCount: action.payload };
    default:
      return state;
  }
}

export function searchHistoryReducer(state = initialSearchHistory, action) {
  switch (action.type) {
    case SET_SEARCH_HISTORY:
      return { ...state, searchHistoryItems: action.payload };
    default:
      return state;
  }
}
