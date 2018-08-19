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
    return (
      <div className="App">
        Would You Rather
        <NewQuestion/>
        <List>
          {this.props.questionIds.map((id, i) => (
              <Question id={id} key={i}/>
          ))}
        </List>
      </div>
    );
  }
}

const mapStateToProps = ({questions}) => {
  return {
    questionIds: Object.keys(questions)
  }
}

export default connect(mapStateToProps)(App)
