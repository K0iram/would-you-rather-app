import React, { Component } from 'react'
import {connect} from 'react-redux'
import LeaderTable from './LeaderTable'

import './style.css'


class Leaderboard extends Component {

  render() {
    const {users} = this.props
    return (
      <div>
        <h1>OFFICIAL LEADERBOARD</h1>
        <LeaderTable users={users}/>
      </div>
    )
  }
}

const mapStateToProps = ({users}) => {
  return {
    users
  }
}

export default connect(mapStateToProps)(Leaderboard)