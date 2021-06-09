//we will import the connect ,Error404 component and Card,ProgressBar,css  from bootstrap

import React ,{Component} from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom';
import Error404 from './Error404'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card ,ProgressBar, Badge ,Button } from 'react-bootstrap';
import { formatDate } from '../utils/helpers'



class AnsweredQuestions extends Component {
    //to back to the home page by the method BackToHome
    BackToHome = () =>{
        this.props.history.push('/')
    }
    render(){
        const {question ,author ,loginuser} =this.props

        if (question === null){
            return <Error404 />
        }
 // we made a variables for each option to calculate the percentage of each option by dividing the number of votes for each option by the total number of all votes and then we will multiply by 100
        //we also used Math.round to approximate the result to the whole number
        const {optionOne,optionTwo ,timestamp} = question
        const {name , avatarURL} = author 
        const TheTotalVotes = optionOne.votes.length + optionTwo.votes.length
        const ThePercentageOfOptionOne = Math.round((optionOne.votes.length / TheTotalVotes) *100)
        const ThePercentageOfOptionTwo = Math.round((optionTwo.votes.length / TheTotalVotes) *100)


        return(//here we will show each question with its options and the number of users whose choose each option and the percentage 
            //And the option which the loginuser choose it will have a padge on it 
            //And we will show the progress line bar
            // also use react bootstrap to create a card for each option

            <Card style={{ width: '19rem' }}>
                <Card.Img variant="top" src={avatarURL} />
                <Card.Body>
                    <Card.Title>{name} Asks</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Would you Rather?</Card.Subtitle>
                    <ul>
                        <li >
                            {optionOne.text}
                            {optionOne.votes.includes(loginuser)? (
                                <h1>
                                You Choose <Badge variant="secondary"></Badge>
                              </h1>
                            ): null}
                        </li> 
                        <ProgressBar variant="success" now={ThePercentageOfOptionOne} label ={`${ThePercentageOfOptionOne}%`} />
 
                        <Card.Text>
                            {optionOne.votes.length} from {TheTotalVotes}
                        </Card.Text>
                        <li>
                            {optionTwo.text}
                            {optionTwo.votes.includes(loginuser)? (
                                <h1>
                                You Choose <Badge variant="secondary"></Badge>
                              </h1>
                            ): null}
                        </li> 
                        <ProgressBar variant="success" now={ThePercentageOfOptionTwo} label ={`${ThePercentageOfOptionTwo}%`}/>
 
                        <Card.Text>
                            {optionTwo.votes.length} from {TheTotalVotes}
                        </Card.Text>   

                    </ul>
                    <div>{formatDate(timestamp)}</div>

                    <Button variant="primary" type="submit" onClick={this.BackToHome}>
                            back
                    </Button>
                </Card.Body>
                
              </Card>
        )
    }
}
//we taked all the data from the store so that we will get all questions with their ids and the author of each question and the loginuser
function mapStateToProps({questions,users,loginuser},{id}) {
    const question =questions[id]

    return {
        question :question ?question: null,
        author :question ? users[question.author] :null ,
        loginuser
    }
}
export default   withRouter(connect(mapStateToProps)(AnsweredQuestions))