import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { getInitialData } from '../utils/api'
import { handleLoginUser } from '../actions/shared'
import {connect} from 'react-redux'
import Nav from './Nav'
import Login from './Login'
import Logout from './Logout'
import Dashboard from './Dashboard'
import NewQuestion from './NewQuestion'
import Leaderboard from './Leaderboard'
import NotFound from './NotFound'

import { receiveQuestions } from '../actions/questions'
import { receiveUsers } from '../actions/users'

class App extends Component {

  state = {
    loading: true
  }

  componentDidMount() {
    this.fetchInitial()
  }

  fetchInitial = () => {
    const { onReceiveQuestions, onReceiveUsers } = this.props

    const setLoaded = () => {
      this.setState({
        loading: false
      })
    }

    getInitialData()
      .then(({ users, questions }) => {
        onReceiveQuestions(questions)
        onReceiveUsers(users)
      })
      .then(this.checkForUser)
      .then(setLoaded)
  }

  checkForUser = () => {
    const { onReceiveUser } = this.props
    const persistedUser = localStorage.getItem('user') || null

    if(persistedUser) {
      onReceiveUser(persistedUser)
    }
  }

  render() {
    const { signedIn } = this.props
    const { loading } = this.state

    if(loading) return null

    return (
      <Router>
        <div className='container'>
          <Nav/>
          <div>
            {!signedIn ? (
              <div>
                <Switch>
                  <Route path='/' exact component={Login}/>
                  <Route path='*' component={NotFound}/>
                </Switch>
              </div>
            ):(
              <div>
                <Switch>
                  <Route path='/' exact component={Dashboard}/>
                  <Route path='/new_question' component={NewQuestion}/>
                  <Route path='/leaderboard' component={Leaderboard}/>
                  <Route path='/logout' component={Logout}/>
                  <Route path='*' component={NotFound}/>
                </Switch>
              </div>
            )}
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = ({authedUser}) => {
  return {
    signedIn: authedUser !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onReceiveUsers: users => dispatch(receiveUsers(users)),
    onReceiveQuestions: questions => dispatch(receiveQuestions(questions)),
    onReceiveUser: user => dispatch(handleLoginUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)