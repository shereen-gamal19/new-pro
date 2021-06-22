 


 
 
 This project is would you rather and its about that if the user login in the app then it will move to the home page and in this path he will see the answered and unanswered question arranged according to the time where when he clicks on the un answered question he will see the question and he can answer to it and he will after that see the number of voting and the percentage of each option and a badge on the option he choose.
The user can also make a new question 
 He can click on  the leaderboard and in it he can see the score of each user arranged in descending order
 The app can run by using npm install and yarn start
 I use create-react-app fo the configuration
i installed  "react-redux" , "react-router-dom" , "redux-thunk" , "react-bootstrap"
 In the index.js file i used a Provider so that we can provide the store for all components that will need it
 In the actions file i made actions for the questions to get the question and answer the questions and save the questions that the login user will make it and i made thunks to handle answers action and the new question 
In the user action i made action to get all users 
In the login user action i made action to set the login user .
I put the the users actions and the question action and the initial data in the shared.js file 
I made reducers for the users and question sand login user actions and i combine those reducers in the index.js file by using combineReducers()
I made some component
I made App component to put the navigation bar and login components to it and i put the paths for the home ,leaderboard , new question
in the App component i put a condition so that if the user doesn't log in then we will show the error404 component and if he log in then we will show the navigation component
In the login component i made the state is none for the TheChosenUser and i made a method called SelectedUser  to update the state
and i used react bootstrap to make a form with options
 and i made button so that the user cann't click on it and  go to the home page without login
I connect the login component with the store to get all users
I made a component for the answered questions so that it wil show the number of voting and the percentage of the options of each questions and i made a card by bootstrap and i put a badge to the selected option that the login user choose
and i push to the home page
I connect the AnsweredQuestions component with the store to get all users and questions and authedUser
I made a component for the Error and i put a button to link to the home page
I made Home component to put the answered an un answered questions in it
I made a leaderboardCard  component to put the users in descending order according to their score and the number if questions they made and they answered
I path the LeaderBoardCard component to the LeaderBoard component
I made UnanswredQuestion to answer the question and if the question is null then we will go to the Error page and i made a card to select any option
I made Question component to show part of the question in the Home page for answered and un answered question
I made ThePageOfQuestions and i put the answered and un answered question in the if statement
I made a NewQuestions to make a new question with the two options






# Would You Rather Project

This is the starter code for the final assessment project for Udacity's React & Redux course.

The `_DATA.js` file represents a fake database and methods that let you access the data. The only thing you need to edit in the ` _DATA.js` file is the value of `avatarURL`. Each user should have an avatar, so you’ll need to add the path to each user’s avatar.

Using the provided starter code, you'll build a React/Redux front end for the application. We recommend using the [Create React App](https://github.com/facebook/create-react-app) to bootstrap the project.

## Data

There are two types of objects stored in our database:

* Users
* Questions

### Users

Users include:

| Attribute    | Type             | Description           |
|-----------------|------------------|-------------------         |
| id                 | String           | The user’s unique identifier |
| name          | String           | The user’s first name  and last name     |
| avatarURL  | String           | The path to the image file |
| questions | Array | A list of ids of the polling questions this user created|
| answers      | Object         |  The object's keys are the ids of each question this user answered. The value of each key is the answer the user selected. It can be either `'optionOne'` or `'optionTwo'` since each question has two options.

### Questions

Questions include:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| id                  | String | The question’s unique identifier |
| author        | String | The author’s unique identifier |
| timestamp | String | The time when the question was created|
| optionOne | Object | The first voting option|
| optionTwo | Object | The second voting option|

### Voting Options

Voting options are attached to questions. They include:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| votes             | Array | A list that contains the id of each user who voted for that option|
| text                | String | The text of the option |

Your code will talk to the database via 4 methods:

* `_getUsers()`
* `_getQuestions()`
* `_saveQuestion(question)`
* `_saveQuestionAnswer(object)`

1) `_getUsers()` Method

*Description*: Get all of the existing users from the database.  
*Return Value*: Object where the key is the user’s id and the value is the user object.

2) `_getQuestions()` Method

*Description*: Get all of the existing questions from the database.  
*Return Value*: Object where the key is the question’s id and the value is the question object.

3) `_saveQuestion(question)` Method

*Description*: Save the polling question in the database.  
*Parameters*:  Object that includes the following properties: `author`, `optionOneText`, and `optionTwoText`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| author | String | The id of the user who posted the question|
| optionOneText| String | The text of the first option |
| optionTwoText | String | The text of the second option |

*Return Value*:  An object that has the following properties: `id`, `author`, `optionOne`, `optionTwo`, `timestamp`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| id | String | The id of the question that was posted|
| author | String | The id of the user who posted the question|
| optionOne | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option|
| optionTwo | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option|
|timestamp|String | The time when the question was created|

4) `_saveQuestionAnswer(object)` Method

*Description*: Save the answer to a particular polling question in the database.
*Parameters*: Object that contains the following properties: `authedUser`, `qid`, and `answer`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| authedUser | String | The id of the user who answered the question|
| qid | String | The id of the question that was answered|
| answer | String | The option the user selected. The value should be either `"optionOne"` or `"optionTwo"`|

## Contributing

This repository is the starter code for *all* Udacity students. Therefore, we most likely will not accept pull requests. For details, check out [CONTRIBUTING.md](https://github.com/udacity/reactnd-project-would-you-rather-starter/blob/master/CONTRIBUTING.md).
