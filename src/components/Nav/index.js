import React, { Component } from 'react'
import {connect} from 'react-redux'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Avatar from '@material-ui/core/Avatar'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { Link } from 'react-router-dom'


import './style.css'


class Nav extends Component {
  state = {
      anchorEl: null,
    }

    handleChange = (event, checked) => {
      this.setState({ auth: checked })
    }

    handleMenu = event => {
      this.setState({ anchorEl: event.currentTarget })
    }

    handleClose = () => {
      this.setState({ anchorEl: null })
    }

    render() {
      const { anchorEl } = this.state
      const open = Boolean(anchorEl)
      console.log(this.props.authedUser)

      return (
        <div className="nav">
          <AppBar position="static">
            <Toolbar>
              <Typography variant="title" color="inherit" className='nav-title'>
                Would You Rather?
              </Typography>
              {this.props.authedUser !== null && (
                <Typography variant="subheading" color="inherit" className='nav-user'>
                  Hello, {this.props.authedUser.name}!
                </Typography>
              )}
              {this.props.authedUser !== null && (
                <div>
                  <IconButton
                    aria-owns={open ? 'menu-appbar' : null}
                    aria-haspopup="true"
                    onClick={this.handleMenu}
                    color="inherit"
                  >
                    <Avatar src={this.props.authedUser.avatarURL}/>
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={open}
                    onClose={this.handleClose}
                    className='user-menu'
                  >
                    <MenuItem disabled={true}>
                      <ListItemIcon>
                        <Avatar src={this.props.authedUser.avatarURL}/>
                      </ListItemIcon>
                      <ListItemText inset primary={this.props.authedUser.name} />
                    </MenuItem>
                    <Link to='/'><MenuItem onClick={this.handleClose}>Dashboard</MenuItem></Link>
                    <Link to='/new_question'><MenuItem onClick={this.handleClose}>Add A Question</MenuItem></Link>
                    <Link to='/leaderboard'><MenuItem onClick={this.handleClose}>Leaderboard</MenuItem></Link>
                    <Link to='/logout'><MenuItem onClick={this.handleClose}>Log Out</MenuItem></Link>
                  </Menu>
                </div>
              )}
            </Toolbar>
          </AppBar>
        </div>
      )
    }
  }

  const mapStateToProps = ({ authedUser }) => {
    return {
      authedUser
    }
  }
export default connect(mapStateToProps)(Nav)