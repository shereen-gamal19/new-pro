//we will import the TohandleaddYourquestion action and connect ,Redirect and button,form,css  from bootstrap

import React ,{Component} from 'react'
import { connect } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';

import {Button ,Form } from 'react-bootstrap';
import { Redirect } from 'react-router'
import TohandleaddYourquestion from '../actions/questions'
class NewQuestion extends Component {
//here we make the loginuser to insert a new question to /add path so that we will make the state yo be optionOne,optionTwo ,toHome    
    state ={
        optionOne: '',
        optionTwo:'',
        toHome:false
    }
//we will make a method for optionOne  EnterOptionOne so that if the user enter this option then we will update our state
    EnterOptionOne =(e) =>{
        e.preventDefault()
        const optionOne = e.target.value
        this.setState (() =>({
            optionOne
        }))
    }

 //we will make a method for optionaTwo EnterOptionTwo so that if the user enter this option then we will update our state   
    EnterOptionTwo =(e) =>{
        e.preventDefault()
        const optionTwo = e.target.value
        this.setState (() =>({
            optionTwo
        }))
    }
    //we will add the method AddBtn so tha when the user write the two options and clicks on the button then we will dispatch the action TohandleaddYourquestion so that to save the entered question

    AddBtn =(e) =>{
        e.preventDefault()
        const {optionOne,optionTwo} = this.state
// add the entered question to store
        this.props.dispatch(TohandleaddYourquestion(optionOne, optionTwo))
        this.setState ({
            optionOne :'',
            optionTwo :'',
            toHome : true
        })

    }


    render(){
        const { optionOne,optionTwo,toHome } = this.state
        const disabled = this.state.optionOne === '' || this.state.optionTwo === '';
//if the toHome is true then we will redirect to the home
        if(toHome === true){
            return <Redirect to ='/' />
        }

        return(
            
           //* here we will make a Form from react bootstrap https://react-bootstrap.github.io/components/forms/ and will have event onSubmit when we click on the button and the method AddBtn 
            
            <Form onSubmit ={this.AddBtn}> 
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>would you rather</Form.Label> {/*Each field on the from will be optionOne ,optionTwo with thee methods*/}
                    <Form.Control type="text" name='optionOne' value={optionOne} onChange={this.EnterOptionOne} placeholder="Enter option one" />
                    <Form.Text className="text-muted">
                    OR
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    
                    <Form.Control type="text" name='optionTwo' value={optionTwo} onChange={this.EnterOptionTwo} placeholder="Enter option two" />
                </Form.Group>
{/*we will make the button is disabled if the optionOne or optionTwo are empty*/}
                <Button variant="primary" type="submit" disabled ={disabled}>
                    Submit
                </Button>
            </Form>
        )
    }

}

//we will connect this component to the store
export default connect()(NewQuestion) 
