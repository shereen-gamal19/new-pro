import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button ,Form ,Col ,Card , Row} from 'react-bootstrap';
import {TohandTheAnswerquestion} from '../actions/questions'
import { formatDate } from '../utils/helpers'
import Error404 from './Error404'
import { withRouter } from 'react-router-dom';

//here we will answer the question by the login user
class UnansweredQuestions extends Component{
    //here the loginuser when he click on any unanswered question then this component will show the question so he can answer to it 
    //here our state is thta the question doesn't solved yet
    state = {
        TheChoice : ''
    };
//we will get the chosen option and then update the state
    TheSelectedChoice = (e) =>{
        const TheChoice = e.target.value
        console.log(TheChoice)
        this.setState(()=>({
            TheChoice
        }));
    }        
    //here if the loginuse rchoose any option then we will save his answer by dispatch  TohandTheAnswerquestion
    SubmitTheAnswer =(e ) =>{
        e.preventDefault();
        if (this.state.TheChoice !== ''){

            const {TheChoice} =this.state
          //  const {id}=this.props


            this.props.dispatch(TohandTheAnswerquestion(TheChoice))
            console.log(this.props.dispatch(TohandTheAnswerquestion(TheChoice))
            )



        };   
    };
    render(){
        const {question , author } = this.props;
        const {optionOne ,optionTwo ,timestamp} = question ;
        console.log(question)

        if (question === null) {
			return <Error404 />;
		};
            
        return(
            //here we made a form for the question and its options
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={author.avatarURL} />
                <Card.Body>
                    <Card.Title>{author.name} asks Would You Rather?</Card.Title>
                        <Form onSubmit={this.SubmitTheAnswer} >   
                                <Col sm={10}>
                                    <Form.Check
                                    type="radio"
                                    label={optionOne.text}
                                    name="formHorizontalRadios"
                                    id="optionOne"
                                 //   checked={this.state.TheChoice ==='optionOne'}
                                    onChange ={this.TheSelectedChoice}
                                    />
                                    <Form.Check
                                    type="radio"
                                    label={optionTwo.text}
                                    name="formHorizontalRadios"
                                    id="optionTwo"
                                   // checked ={this.state.TheChoice === 'optionTwo'}
                                    onChange ={this.TheSelectedChoice}
                                    />
                                   
                                </Col>
                            <Form.Group as={Row}>
                                <Col sm={{ span: 10, offset: 2 }}>
                                    {/*here the button will not available if the login user doesn't choose any option */}
                                <Button type="submit" disabled={this.state.TheChoice === ''? true : false}>Answered</Button>
                                </Col>
                            </Form.Group>
                        </Form>                 
                               
                </Card.Body>
                 {formatDate(timestamp)}

            </Card>          
        )      
    }

}
    
function mapStateToProps({users ,questions},props) {
    console.log(users,questions)
    const { id } = props.match.params;

    const question = questions[id]
   // const question = id ? questions[id.id] : questions[match.params.id]

    // here we will return the 
    console.log(question)
    return {    
        question:question ? question :null,
        author :question ? users[question.author] : null
    }
    
}

export default  withRouter(connect(mapStateToProps)(UnansweredQuestions))