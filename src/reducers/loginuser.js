//we will make a reducer for the login user 
import {THE_LOGIN_USER} from '../actions/loginuser'
//our state is null
//we will use switch
export default function loginuser (state = null, action) {
    switch (action.type) {
        // in case of THE_LOGIN_USER
      case THE_LOGIN_USER :
        return action.id
      default :
        return state
    }
}