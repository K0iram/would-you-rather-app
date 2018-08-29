import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleLoginUser }  from '../../actions/shared'
import Paper from '@material-ui/core/Paper'
import MenuItem from '@material-ui/core/MenuItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'


import './style.css'


class Login extends Component {
  state = {
    selectedUser: ''
  }

  onSelectChange = (e) => {
    this.setState({
      selectedUser: e.target.value
    })
  }

  handleSubmit = () => {
    const { onReceiveUser } = this.props
    const { selectedUser } = this.state

    localStorage.setItem('user', selectedUser)
    onReceiveUser(selectedUser)
  }

  render() {
    return (
      <div className="login">
      <h1>Please Login To Use The App</h1>
        <Paper className='login-card'>
          <h2>Pick A User</h2>
          <FormControl>
            <InputLabel>Select a User</InputLabel>
            <Select onChange={this.onSelectChange} value={this.state.selectedUser} className='login-select'>
              <MenuItem value="">
                <em>User</em>
              </MenuItem>
              {Object.values(this.props.users).map((user, i) => (
                <MenuItem value={user.id} key={i} className='user-item'>
                  <ListItemIcon>
                    <Avatar src={user.avatarURL}/>
                  </ListItemIcon>
                  <ListItemText inset primary={user.name} />
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>Choose a user from the list</FormHelperText>
          </FormControl>
          <Button variant='contained' color='primary' onClick={this.handleSubmit}>Login</Button>
        </Paper>
      </div>
    )
  }
}

const mapStateToProps = ({users}) => {
  return {
    users
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onReceiveUser: user => dispatch(handleLoginUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)