import { RECEIE_ALL_USERS } from '../actions/users'
import{ ADD_A_QUESTION } from '../actions/questions'
import { ANSWER_THE_QUESTION}from '../actions/questions'



//our state is null
//we will use switch
export default function users (state={},action) {
    switch (action.type) {
        case RECEIE_ALL_USERS:
            return {
                //here we used the spread operator to return all the state in addition the users
                ...state,
                ...action.users
            }

        case ADD_A_QUESTION:
            return {
                ...state,
                [action.question.author]:{
                    ...state[action.question.author],
                    questions:state[action.question.author].questions.concat([action.question.id])
                }

            }

        case ANSWER_THE_QUESTION :
            return {
                ...state,
                [action.authedUser]:{
                    ...state[action.authedUser],
                    answers:{
                        ...state[action.authedUser].answers,
                        [action.qid]:action.answer

                    }
                }


            }
    
        default:
            return state;
    }
} 