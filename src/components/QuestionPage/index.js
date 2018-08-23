import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Question from '../Question'

import './style.css'


class QuestionPage extends Component {

  render() {
    const { questionId } = this.props
    return (
      <div>
        <Question id={questionId}/>
      </div>
    )
  }
}

const mapStateToProps = ({users}, props) => {
  const { questionId } = props.match.params
  return {
    questionId
  }
}

export default connect(mapStateToProps)(QuestionPage)