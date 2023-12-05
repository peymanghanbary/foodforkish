import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import {
  basketCountReducer,
  userLoginDataReducer,
  inboxCountReducer,
  profileCountReducer,
  basketReducer,
  searchHistoryReducer,
  messageCountReducer,
  commissionReducer,
} from "./reducers";

const reducers = combineReducers({
  basketCountReducer,
  userLoginDataReducer,
  inboxCountReducer,
  profileCountReducer,
  basketReducer,
  searchHistoryReducer,
  messageCountReducer,
  commissionReducer,
});

export const Store = createStore(reducers, applyMiddleware(thunk));
