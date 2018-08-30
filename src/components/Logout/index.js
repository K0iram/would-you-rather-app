import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import { handleLogoutUser }  from '../../actions/shared'

import './style.css'


class Logout extends Component {
  componentDidMount() {
    const { onLogOut } = this.props
    onLogOut()
    localStorage.clear()
  }

  render() {
    return (
      <Redirect to='/'/>
    )
  }
}

const mapStateToProps = ({dispatch}) => {
  return {
    dispatch
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogOut: () => dispatch(handleLogoutUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout)