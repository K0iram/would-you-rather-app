import React, { Component } from 'react'
import { connect } from 'react-redux'
import List from '@material-ui/core/List'
import Question from '../Question'

import './style.css'


class Dashboard extends Component {

  render() {
    const {questionIds} = this.props
    return (
      <div>
        <List>
        {questionIds.map((id, i) => (
          <Question id={id} key={i}/>
        ))}
        </List>
      </div>
    )
  }
}

const mapStateToProps = ({questions}) => {
  return {
    questionIds: Object.keys(questions).sort((a,b) => questions[b].timestamp - questions[a].timestamp)
  }
}

export default connect(mapStateToProps)(Dashboard)