//we will import connect and Card ,css  from bootstrap


import React, { Component } from 'react'
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card } from 'react-bootstrap';
 
class LeaderBoardCard extends Component {

    render(){
        const {singleUser} = this.props

        return( //here we will make a Card from the bootstrap https://react-bootstrap.github.io/components/cards/
              // this card will contain the name and the image of the user and will contain the number of the questions that user answer to them and questions that he/she created and the total by adding the two numbers 
            // so that we will put the user's name in the title and the avatatr of the user in the image 
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={singleUser.avatarURL} />
                <Card.Body>
                    <Card.Title>{singleUser.name}</Card.Title>
                    <Card.Text>
{/*we use the Object.values and .length to get the answers and the questions for each users and their numbers */}
                        The number of the answered questions : {Object.values(singleUser.answers).length} <br/>
                        the number of the questions he /she made: {singleUser.questions.length} <br/>
                        The Score = { Object.values(singleUser.answers).length + singleUser.questions.length }
                    
                    </Card.Text>
                </Card.Body>
            </Card>

        )
    }
}
//here we will get users from the store and the props id 
function mapStateToProps({users} ,{id}) {
    return{ // her ewe will return an object that has all users with their ids
        singleUser:users[id]
    }
    
}

export default connect (mapStateToProps)(LeaderBoardCard)