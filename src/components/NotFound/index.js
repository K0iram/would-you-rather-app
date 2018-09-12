import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'

import './style.css'


class NotFound extends Component {

  render() {
    const isAuthed = !!window.localStorage.user
    if(isAuthed) {
      return (
        <Paper className='message-container'>
          <h1>PAGE NOT FOUND</h1>
          <Link to='/'><Button variant='outlined' color='primary'>Please Go Home</Button></Link>
        </Paper>
      )
    } else {
      return (
        <div>
          <Redirect to='/' />
        </div>
      )
    }
  }
}

const mapStateToProps = ({authedUser}) => {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(NotFound)