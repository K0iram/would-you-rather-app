import React, { Component } from 'react'
import {handleInitialData} from '../actions/shared'
import {connect} from 'react-redux'
import List from '@material-ui/core/List';
import Question from './Question'
import NewQuestion from './NewQuestion'


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    const {questionIds} = this.props
    return (
      <div className="App">
        Would You Rather
        <NewQuestion/>
        <List>
          {questionIds.map((id, i) => (
            <Question id={id} key={i}/>
          ))}
        </List>
      </div>
    );
  }
}

const mapStateToProps = ({questions}) => {
  return {
    questionIds: Object.keys(questions).sort((a,b) => questions[b].timestamp - questions[a].timestamp)
  }
}

export default connect(mapStateToProps)(App)
