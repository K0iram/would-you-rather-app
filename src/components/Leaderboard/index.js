import React from 'react'
import {connect} from 'react-redux'
import LeaderTable from './LeaderTable'

import './style.css'


const Leaderboard = ({userDetails}) => {
  return (
    <div className='leaderboard'>
      <h1>OFFICIAL LEADERBOARD</h1>
      <div className="leaderboard-container">
        <LeaderTable users={userDetails}/>
      </div>
    </div>
  )
}

const mapStateToProps = ({users}) => {
  return {
    userDetails: Object.values(users).map((user) => {
      return {
        name: user.name,
        avatarUrl: user.avatarURL,
        questionsLength: user.questions.length,
        answersLength: Object.keys(user.answers).length,
        total: user.questions.length + Object.keys(user.answers).length

      }
    })
  }
}

export default connect(mapStateToProps)(Leaderboard)