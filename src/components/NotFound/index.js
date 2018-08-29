import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'

import './style.css'


class NotFound extends Component {

  render() {
    const isAuthed = !!window.localStorage.user
    if(isAuthed) {
      return (
        <div className='message-container'>
          <h1>PAGE NOT FOUND</h1>
          <Link to='/'>Please Go Home</Link>
        </div>
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