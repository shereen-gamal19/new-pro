//we will make action to receive all questions
import { showLoading, hideLoading } from 'react-redux-loading'
import { saveQuestion, saveQuestionAnswer } from '../utils/api'
export const GET_ALL_QUESTIONS = 'GET_ALL_QUESTIONS'
export const ADD_A_QUESTION ='ADD_A_QUESTION'
export const ANSWER_THE_QUESTION ='ANSWER_THE_QUESTION'
//we will make an action to add a new question
export function addAquestion(question){
    return{
        type : ADD_A_QUESTION,
        question
    }
    
}
//here we add a thunk middleware addYourquestion to add a new question
export default function TohandleaddYourquestion (optionOne,optionTwo){
    return (dispatch ,getState) =>{
        const {loginuser} =getState()
        dispatch(showLoading())

        return saveQuestion({
            // the response of saveQuestion is formatQuestion which has the following object ({ optionOneText, optionTwoText, author }
            optionOneText:optionOne,
            optionTwoText:optionTwo,
            author: loginuser
        })
            .then((question) => dispatch(addAquestion(question)))
            .then(() => dispatch(hideLoading()))
    }

}
// we will make action and middleware thunk to the answered question
export function answerThequestion( loginuser, qid, answer) {
    return {
        type:ANSWER_THE_QUESTION,
        loginuser,
        qid,
        answer
    }
    
}

export function TohandTheAnswerquestion (qid, answer){
    return (dispatch ,getState) =>{
        const {loginuser} =getState()
        dispatch(showLoading())

        return saveQuestionAnswer({
            // the response of saveQuestion is formatQuestion which has the following object ({ optionOneText, optionTwoText, author }
            qid,
            answer,
            loginuser
        })
            .then(() => dispatch(answerThequestion(qid,answer,loginuser)))
            .then(() => dispatch(hideLoading()))
    }

}
//we will make an action to receive the question

export function receiveThequestions (questions){
    return{
        type : GET_ALL_QUESTIONS,
        questions
    }
}