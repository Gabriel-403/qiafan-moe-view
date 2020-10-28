import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleWare from 'redux-thunk'
import homePage from './homePage/reducers'

const store = createStore(combineReducers({
    homePage
}), applyMiddleware(thunkMiddleWare));

export default store;
