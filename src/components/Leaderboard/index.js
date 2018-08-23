import React, { Component } from 'react'
import {connect} from 'react-redux'
import LeaderTable from './LeaderTable'

import './style.css'


class Leaderboard extends Component {

  render() {
    const {userDetails} = this.props
    return (
      <div className="leaderboard-title">
        <h1>OFFICIAL LEADERBOARD</h1>
        <LeaderTable users={userDetails}/>
      </div>
    )
  }
}

const mapStateToProps = ({users}) => {
  return {
    userDetails: Object.values(users).map((user) => {
      return {
        name: user.name,
        questionsLength: user.questions.length,
        answersLength: Object.keys(user.answers).length,
        total: user.questions.length + Object.keys(user.answers).length

      }
    })
  }
}

export default connect(mapStateToProps)(Leaderboard)