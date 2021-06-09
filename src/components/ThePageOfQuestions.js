import React ,{Component ,Fragment} from 'react'
import {connect} from 'react-redux'
import UnansweredQuestions from './UnansweredQuestions'
import AnsweredQuestions from './AnsweredQuestions'
class ThePageOfQuestions extends Component {

    render(){
        const { id } =this.props.match.params

        const {loginUserAnawers} =this.props
        const isanswered = loginUserAnawers.hasOwnProperty(id) ? true :false


        return (
            <Fragment>
                {isanswered ? <AnsweredQuestions id={id}/>:<UnansweredQuestions id={id}/> }

            </Fragment>
        )

    
    }
}
function mapStateToProps({loginuser,users}) {
//here we will return the state of the question either answered or unswered by the question id and match.params
    const loginUserAnawers = users[loginuser].answers

    return {
        
        loginUserAnawers
    }


    
}
export default connect(mapStateToProps)(ThePageOfQuestions)