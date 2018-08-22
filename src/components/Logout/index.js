import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import { handleLogoutUser }  from '../../actions/shared'

import './style.css'


class Logout extends Component {
  componentDidMount() {
    const {dispatch} = this.props
    dispatch(handleLogoutUser())
  }

  render() {
    return (
      <Redirect to='/'/>
    )
  }
}

export default connect()(Logout)