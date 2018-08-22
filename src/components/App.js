import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { handleInitialData } from '../actions/shared'
import {connect} from 'react-redux'
import Nav from './Nav'
import Login from './Login'
import Logout from './Logout'
import Dashboard from './Dashboard'
import NewQuestion from './NewQuestion'
import Leaderboard from './Leaderboard'
import NotFound from './NotFound'


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    const {signedIn} = this.props
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

export default connect(mapStateToProps)(App)