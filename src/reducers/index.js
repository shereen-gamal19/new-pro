//we will combine all reducers in one reducer by importing all reducers in additional to combineReducers package from redux
import {combineReducers} from 'redux'
import loginuser from './loginuser'
import questions from './questions'
import users from './users'
//we will import the loading bar
//import {loadingBarReducer } from 'react-redux-loading'

export default combineReducers ({
    
    loginuser,
    questions,
    users,
   // loadingBar :loadingBarReducer,

})