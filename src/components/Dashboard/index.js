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
    this.setState(prevState => ({
      filtered: !prevState.filtered
    }))
  }

  render() {
    const { questionIds, unansweredIds } = this.props
    const { filtered } = this.state
    return (
      <div>

        <FormGroup className='dashboard-filter'>
          <FormControlLabel
            control={
              <Switch checked={filtered} onChange={this.handleChange} aria-label='LoginSwitch' />
            }
            label={filtered ? 'Only Unanswered Questions' : 'All Questions'}
            className='dashboard-filter__label'
          />
        </FormGroup>

        <div className={unansweredIds.length ? 'dashboard' : 'dashboard-empty'}>
          <List className='dashboard-list'>
            {this.state.filtered ? (
              unansweredIds.length > 0 ? (
                unansweredIds.map((id) => (
                  <QuestionPreview id={id} key={id}/>
                ))
              ): (
                <div className="no-questions">
                  <h1>You Have No More Question To Answer</h1>
                </div>
              )
            ) : (
              questionIds.map((id) => (
                <QuestionPreview id={id} key={id}/>
              ))
            )}
          </List>
        </div>
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