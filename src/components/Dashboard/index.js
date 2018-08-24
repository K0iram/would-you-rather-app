import React, { Component } from 'react'
import { connect } from 'react-redux'
import List from '@material-ui/core/List'
import Switch from '@material-ui/core/Switch'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormGroup from '@material-ui/core/FormGroup'
import QuestionPreview from '../QuestionPreview'

import './style.css'


class Dashboard extends Component {
  state = {
    filtered: true
  }

  handleChange = () => {
    this.setState({filtered: !this.state.filtered})
  }

  render() {
    const { questionIds, unansweredIds } = this.props
    const { filtered } = this.state
    return (
      <div className='dashboard'>
        <FormGroup className='dashboard-filter'>
          <FormControlLabel
            control={
              <Switch checked={filtered} onChange={this.handleChange} aria-label='LoginSwitch' />
            }
            label={filtered ? 'Only Unanswered Questions' : 'All Questions'}
            className='dashboard-filter__label'
          />
        </FormGroup>
        <List className='dashboard-list'>
          {this.state.filtered ? (
            unansweredIds.map((id, i) => (
              <QuestionPreview id={id} key={i}/>
            ))
          ) : (
            questionIds.map((id, i) => (
              <QuestionPreview id={id} key={i}/>
            ))
          )}
        </List>
      </div>
    )
  }
}

const mapStateToProps = ({questions, users, authedUser}) => {
  const qids = Object.keys(questions).sort((a,b) => questions[b].timestamp - questions[a].timestamp)
  return {
    questionIds: qids,
    unansweredIds: qids.filter((id) => {
      return !Object.keys(users[authedUser.id].answers).includes(id)
    })
  }
}

export default connect(mapStateToProps)(Dashboard)