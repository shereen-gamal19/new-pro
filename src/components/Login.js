
//we will import connect and Button,css  from bootstrap
//we import link and withRouter
//we import thechosenloginuser action

import React ,{Component} from 'react'
import {connect} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Link } from 'react-router-dom';
//import { withRouter } from 'react-router-dom';
import {Button } from 'react-bootstrap';
import {thechosenloginuser} from '../actions/loginuser'

// here we will make the user login through the and when the user login then we will go through the Home component and if the user didn't log then he/she cann't go to the home
class Login extends Component {
//We will make our state so that the TheChosenUser is empty 'none'
    state ={
        TheChosenUser:'none',
    };
    //We made a method so that the user can select any of other user and then we will update the state
    SelectedUser = (e) =>{
        const TheChosenUser =e.target.value
        console.log(TheChosenUser)
        this.setState(() =>({
            TheChosenUser
        }))
    }
   // We made a method so that when the user is login then we will dispatch the action thechosenloginuser
    LoginClick =(e) =>{//here we added the loginuser to the store
        e.preventDefault();
        console.log(this.state.TheChosenUser)
        //console.log(this.props)
        this.props.dispatch(thechosenloginuser(this.state.TheChosenUser))

       

    }


    render(){
        
        

        return(
            <div>
                <h1 >Welcome to would you rather game</h1>
                <div> {/*Here we made a form that take event onSubmit and the methid LoginClick */}
                    <form onSubmit = {this.LoginClick}>
                            {/*Here the select will change if the user choose any login user and we passed SelectedUser to it and its value will be the TheChosenUser from the state */}
                            <select onChange ={this.SelectedUser} value={this.state.TheChosenUser}>
                             {/*here we will map through all users so that each option should have the user name */}
                               {/*Here we wil make an option none so that this option will be the default if the user doesn't choose any user yet */} 
                                <option value ='none' disabled></option> 
                                {/*The other options will be we will map through all users and each option will has a unique key which will the user's id and will has the name of the user */}
                                {this.props.users.map(User =>(
                                    <option key={User.id} value ={User.id}>{User.name}</option>
                                ))}

                            </select>    
                        <Button disabled={this.state.TheChosenUser === "none"} onClick={this.LoginClick}>Login</Button> 
                
                    </form> {/*we will make the button unClicked if the user did not choose any user */}
                        

                    
                </div>
            </div>

        )
    }

}
//we will get all users from our store with mapStateToProps
function mapStateToProps({users}) {
    return {
        users:Object.values(users),
        
    }
    
}
//We will connect our component Login with the store
export default connect(mapStateToProps)(Login)
