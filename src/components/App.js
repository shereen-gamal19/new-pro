//we will initialize ou data  
import React, { Component, Fragment } from 'react'
// we will import connect
import {connect} from 'react-redux'
import  { AllInitialData } from '../actions/shared'
//we will import react router 
import { BrowserRouter as Router, Route ,Switch } from 'react-router-dom'
import { LoadingBar } from 'react-redux-loading'
import NavigationBar from './NavigationBar'
import Home from './Home'
import LeaderBoard from './LeaderBoard'
import NewQuestion from './NewQuestion'
import ThePageOfQuestions from './ThePageOfQuestions';
import Error404 from './Error404'
import Login from './Login'
class MyApp extends Component {
    //we will get our initial data by dispatching the AllInitialData
    componentDidMount(){
        this.props.dispatch(AllInitialData())
    }
    render(){
        console.log(this.props)
        //if the user did not login in the login page then we will return the login page else we will go into the home page
        const {loginuser} =this.props 
        return(//here we will add all our component of the navigation bar if the loading is completed and we will add the loading bar also
            // also we have a lot of elements so we will use the fragment element and wwe imported it from react
            <Router>
                <div>
                    {loginuser === null ? (
                              <Login/>
                        ):(   
                            <Fragment>

                                    <LoadingBar/>
                                        <NavigationBar/>
                                    
                                      
        {/*We need to tell the router to stop matching further once it matches a route. 
        This is done using the Switch component from React Router.
         https://www.freecodecamp.org/news/react-router-tutorial/*/}
                                                <Switch>
                                                        <Route path ='/' exact component ={Home}/>
                                                        <Route path ='/add' component={NewQuestion}/>
                                                        <Route path ='/leaderboard' component = {LeaderBoard}/>
                                                        <Route path ='/questions/:id' component ={ThePageOfQuestions}/>
                                                        <Route component={Error404} /> 
                                                </Switch>
                            </Fragment>


                        )                  
                    }    
                        

                </div>                  
            </Router>
        )
    }
}
// we will use mapStateToProps so that we will get the loginuser from the store and we will wait to get the loginuser if loading bar is null
function mapStateToProps({loginuser ,users ,questions}) {
    return {
                
     loginuser,
     users,
     questions 

    }
    
}

// we will get access to our dispatch (AllInitialData) by using connect() and upgrade the App compoenet to a container
export default connect(mapStateToProps )(MyApp)
