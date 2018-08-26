import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { handleInitialData } from '../actions/shared'
import {connect} from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline';
import LoadingBar from 'react-redux-loading'
import Nav from './Nav'
import Login from './Login'
import Logout from './Logout'
import Dashboard from './Dashboard'
import NewQuestion from './NewQuestion'
import Leaderboard from './Leaderboard'
import QuestionPage from './QuestionPage'
import NotFound from './NotFound'

class App extends Component {
  componentDidMount() {
    const { onReceiveData } = this.props
    onReceiveData()
  }

  render() {
    const { signedIn, loading } = this.props

    return (
      <Router>
        <div className='container'>
          <CssBaseline/>
          <Nav/>
          <LoadingBar/>
          <div>
            {loading ? (
              null
            ): (
              signedIn ? (
                <div>
                  <Switch>
                    <Route path='/' exact component={Dashboard}/>
                    <Route path='/new_question' component={NewQuestion}/>
                    <Route path='/leaderboard' component={Leaderboard}/>
                    <Route path='/logout' component={Logout}/>
                    <Route path='/question/:questionId' component={QuestionPage}/>
                    <Route path='*' component={NotFound}/>
                  </Switch>
                </div>
              ):(
                <div>
                  <Switch>
                    <Route path='/' exact component={Login}/>
                    <Route path='*' component={NotFound}/>
                  </Switch>
                </div>
              )
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
    onReceiveData: () => dispatch(handleInitialData()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)