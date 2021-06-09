//we will get all datas and put them here
import { getInitialData } from '../utils/api'
//import { thechosenloginuser } from '../actions/loginuser'
import { receiveAllUsers } from './users'
import { receiveThequestions} from './questions'


// we will make a middleware thunk for async operation called AllInitialData
export function AllInitialData (){
    return (dispatch) => {
//when we getInitialData promise is done
        return getInitialData ()
          //if the promise is true the dispatch all actions
          .then(({users , questions})=>{
              dispatch(receiveAllUsers(users))
              dispatch(receiveThequestions(questions))
              

          })

    }
}