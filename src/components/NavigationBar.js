import React, { Component } from 'react'
//import { NavLink } from 'react-router-dom'
import {Button ,Nav,Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';

//import { render } from '@testing-library/react';
//we will import thechosenloginuser action
import {thechosenloginuser} from '../actions/loginuser'


class NavigationBar extends Component {

//we will make a method so that if the the user log out then we will dispath the action thechosenloginuser and the user will be null
  LogOutBtn = (e) =>{
    e.preventDefault();
    this.props.dispatch(thechosenloginuser(null))
  }


  render(){
    const {loginuser ,users} = this.props

    return( //we will made a navbar from bootstrap https://react-bootstrap.github.io/components/navbar/ and we will put all links '/' , "/add" ,"/leaderboard"
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">WYR</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          <Nav.Link as ={Link} to="/">Home</Nav.Link>
 
            <Nav.Link as={Link} to="/add">New Question</Nav.Link>
            <Nav.Link as ={Link} to="/leaderboard">LeaderBoard</Nav.Link>    
          </Nav>
          <Nav> {/*if the user login th we will show the name and the image of the loginuser and we will check the name the image of the login user */}
            <Navbar.Text>{users[loginuser] &&users[loginuser].name}</Navbar.Text>
            <img 
              className="d-inline-block align-top"
              src={users[loginuser]&&users[loginuser].avatarURL}
              alt =""
              width ='30'
              height ='30'
            />{/* we will make a button to log out */}
            <Button variant="outline-success" onClick ={this.LogOutBtn}>LogOut</Button>

  
          </Nav>
  
        </Navbar.Collapse>
      </Navbar>
  
    )
  }  
}
//we will get the loginuser and the users from the store
function mapStateToProps({loginuser,users}) {
  return{
    loginuser,
    users

  }
    
}
//we will connect this component to the store
export default connect(mapStateToProps)(NavigationBar)