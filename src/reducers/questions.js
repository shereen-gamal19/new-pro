import {GET_ALL_QUESTIONS} from '../actions/questions'
import{ ADD_A_QUESTION } from '../actions/questions'

import { ANSWER_THE_QUESTION}from '../actions/questions'




// we will make a reducer for the action receiveThequestions
export default function questions(state={},action) {
    switch (action.type) {
        case GET_ALL_QUESTIONS:
            return {
                //we will use spread operator to put all the state and the actioned questions
                ...state,
                ...action.questions
            }
        case ADD_A_QUESTION :
            return{
                ...state,
                [action.question.id]:action.question

            }

        case ANSWER_THE_QUESTION :
            return{
                ...state,
                [action.qid]:{
                    ...state[action.qid],
                    [action.answer]:{
                        ...state[action.qid][action.answer],
                        votes:state[action.qid][action.answer].votes.concat([action.authedUser])
                    }
                }
                
            }
            
            
    
        default:
            return state
    }
    
}