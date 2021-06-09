//we will import the TheQuestion component and connect and tab ,tabs ,css  from bootstrap
import React ,{Component} from 'react'
import {connect} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Tab,Tabs } from 'react-bootstrap';
import TheQuestion from './TheQuestion';

class Home extends Component {

//here we will make two tabs from bootstrap so that we will put the unanswered questions in the first tab and we will put the answered questions in the second tab  
    render(){// https://react-bootstrap.github.io/components/tabs/
        const {answered,unAnswered } = this.props


        return( //from bootstrap documentation we will make two tabs for the answered and un answered questions

            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                <Tab eventKey="unanswered" title="Unswered">
                    {/*we will map through all un answered ruestions and show them with  the question it self with the unique key id */}
                    {unAnswered.map((question) => //هنا الاسئله اللي مش متجاوب عليها هتجلنا علي شكل اسئله الاسئله دييه هنماب علي كل سؤال فيها
                        <TheQuestion key ={question} id ={question}/> // we will invoke the TheQuestion component and pass the key id and id to its id props
                    )}
                    
                </Tab>
                <Tab eventKey="answered" title="answered">
                 {/*we will map through all answered ruestions and show them with  the question it self with the unique key id*/}

                    {answered.map((question) => //هنا الاسئله اللي متجاوب عليها هتجلنا علي شكل اسئله الاسئله دييه هنماب علي كل سؤال فيها
                                <TheQuestion key ={question} id ={question}/> // we will invoke the TheQuestion component and pass the key id and id to its id props
                    )} 
                </Tab>

                
                
            </Tabs>
        )
    }
}

//here we will return an object that we will use it in this component so that we will get our all dates from the store and we will classify it to the answered and un answered questions as the following:
//the object will be the questions that the loginuser answer or unanswer to it 
function mapStateToProps({loginuser , users ,questions}) {
    // we will get all the questions that the login user answer to it 
    //console.log(JSON.stringify(loginuser),users ,questions) 
//من الفديو عاوزين الاجابات يبقي key
    const allAnswers = users[loginuser].answers
    //من الفديو عاوزين الاسئله يبقي values
    // we will  get the questions that the login user answer to it and sort them from the newest to the oldest
    const answered = Object.keys(allAnswers).sort((a,b) => questions[b].timestamp - questions[a].timestamp)
    //we will filter all questions that the login user didn't answer to it and sort them from the newest to the oldest
    const unAnswered = Object.keys(questions).filter(question => 
        !answered.includes(question)).sort((a,b) => questions[b].timestamp - questions[a].timestamp)
   //we will return an object that has both unswered and answered questions 
   console.log("all answers are",allAnswers)
   console.log('the answered questions are ' ,answered)
   console.log("the un answered questions", unAnswered) 
    return {
        answered,
        unAnswered
               }

    
}
//we will connect the Hom component to the store
export default connect(mapStateToProps)(Home)