This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) and [Material UI](https://material-ui.com/).


# Would You Rather Project

This is the final assessment project for Udacity's React & Redux course. In this app users can ask and answer
simple would you rather questions with 2 possible answers. when a question is answered the user sees their
answer as well as the statistics for that question(number of votes and % of total votes). There is a leaderboard
that shows the users questions asked and answered that is arranged by whatever user has the most of the 2 combined. This
Project has a mock api so if the page is reloaded the users data will be lost and the sample data will be reinstated. I did however chose to persist the user in the windows local storage so if the page is reloaded you will not be prompted to log in
again until you sign out of the current user.

## Get It Running
To run this project please have yarn or npm installed on your machine and run:

* `npm install`
* `npm start`
#### or
* `yarn install`
* `yarn start`

## How It Works

When the app loads a login form is show and the user is prompted to login to start. No other routes are available to the user until they successfully login. One logged in the users avatar and name appear on the top right of the screen in the nav bar.
in the main dashboard view a list of all the questions the user has not answered yet is shown. A small toggle switch on the top right of the dashboard will show all answered and unanswered questions. Clicking on one the the questions will bring you the that questions page with the url ```question/:questionId``` if unanswered the user is prompted to answer the question and once answered the question will show the users answer and a pie chart with the questions statistics will appear. If the question has been previously answered that view will show automatically.


If the user clicks on the avatar in the nav bar a drop down menu will show with the options:
  * Dashboard - Main View
  * Ask A Question - Create a new question view
  * Leaderboard - Leaderboard Table
  * Log Out - Logs user out and shows the login view
When adding a new question, the user is prompted to enter 2 options. If either of the options are blank the submit button will
be disabled. Once the user enters the options and clicks submit they will be redirected to the dashboard where their question will appear when the page loads.

When navigating to the leaderboard, a table is show with the current users. The rank is based on the number of questions asked and answered added together. If a user is in the #1 position a star icon is show. This can be tested by answering and asking multiple questions and going back to the leaderboard to see the data change.

If the user tries to go to any url that does not match a described route they will be directed to a danger page telling then this page does not exist and given a back button to direct the user to the home page. If the user is not signed in and tries to navigate to any page other than the root '/' they will be redirected back to the the login.

### Reach Goal
For the next iteration of this project I would like to implement a real database so that users data will be saved. This would also give the possibility of users having profiles with they're questions and being able to as specific users questions.

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
