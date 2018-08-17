import React, { Component } from 'react'
import {handleInitialData} from '../actions/shared'
import {connect} from 'react-redux'
import Question from './Question'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    console.log(this.props)
    return (
      <div className="App">
        Would You Rather
        <ul>
          {this.props.questionIds.map((id, i) => (
              <li key={i}><Question id={id}/></li>
          ))}
        </ul>
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
