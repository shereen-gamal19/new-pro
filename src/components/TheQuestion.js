import React ,{Component} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button ,Card } from 'react-bootstrap';
import { formatDate } from '../utils/helpers'

class TheQuestion extends Component {
    render(){//here we will show the question with the author of the question and his avatar and the test of optionOne
        const {question , author  } = this.props
        const {optionOne, id ,timestamp} = question
        const {name ,avatarURL} = author
        return(
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={`/${avatarURL}`} />
                <Card.Body>
                    <Card.Title>{name} Asks</Card.Title>
                    <div>{formatDate(timestamp)}</div>

                    <Card.Subtitle className="mb-2 text-muted">Would You Rather ?</Card.Subtitle>
                    <Card.Text>
                    {optionOne.text}.OR......
                    </Card.Text> {/*here if the user click on the button then we will go to the question it self */}
                    <Link to = {`/questions/${id}`} > 
                        <Button variant="primary">SHOW THE QUESTION</Button>
                    </Link>
                </Card.Body>
            </Card>
        )
    }
}
//we want to show the question with the author of that question and the loginuser that answered or will answer this question 
function mapStateToProps({users ,questions},{id}) {
    console.log(questions,users )

    const question = questions[id]
   // const question = questions[match.params.id]
    console.log(question)
    
    return {
        
        question:question ? question :null,
        author :question ? users[question.author] : null ,
        //optionOne:question ? users[question.optionOne] :null ,
    }    
}
export default connect(mapStateToProps)(TheQuestion)