import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleWare from 'redux-thunk';
import homePage from './homePage/reducers';
//import authReducer from "./login/authReducer"


const store = createStore(combineReducers({
    homePage,
    //  authReducer
}), applyMiddleware(thunkMiddleWare));

export default store;