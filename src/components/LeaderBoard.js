//we will import the LeaderBoardCard component and connect 

import React ,{Component ,Fragment} from 'react'
import { connect } from 'react-redux'
import LeaderBoardCard from './LeaderBoardCard'
class LeaderBoard extends Component {
    render(){
        return (
            <Fragment>
                <h2>LeaderBoard</h2>
                {this.props.ScoreDesc.map((id) => (//here we will map  with   users's id through the ScoreDesc props and we will invoke LeaderBoardCard component and pass the id of each user to it and the key is user  
                    <LeaderBoardCard key ={id} id ={id}/> 
                ))}
            </Fragment>
        )
    }
}
//here we will map through all the users  that comming from the store and then we will make an object for each user so that we will add the answered questions to the created questions so that to get the total for each user (score) and then we will arrange them according to their total descendingly
function mapStateToProps ({users}){
    const ScoreDesc = Object.keys(users).sort((a ,b)  => { // we made an object so that we can sort through it 
        const theTotal1 = Object.keys(users[a].answers).length + users[a].questions.length 
        const theTotal2 = Object.keys(users[b].answers).length + users[b].questions.length 

        return theTotal2 -theTotal1
    }) // here we use .sort() to sort descendingly 
    return {
        ScoreDesc
    }

    
}
//we will connect LeaderBoard to the store
export default connect(mapStateToProps)(LeaderBoard)