import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'

import './style.css'


class NotFound extends Component {

  render() {

    if(this.props.authedUser === null) {
      return (
        <div>
          <Redirect to='/' />
        </div>
      )
    } else {
      return (
        <div>
          <h1>PAGE NOT FOUND</h1>
          <Link to='/'>Please Go Home</Link>
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