import React from 'react';

import Overview from './components/Overview';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks : [],
      textInput : ''
    }
    this.handleTextInput = this.handleTextInput.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }
  handleTextInput(e) {
    this.setState({
      textInput: e.target.value
    })
  }
  handleButton() {
    this.setState({
      tasks : [...this.state.tasks, this.state.textInput],
      textInput: ''
    })
  }
  render() {
    return (
      <div>
        <h1>Add tasks to the list</h1>
        <div>
          <input type="text" value={this.state.textInput}
            onChange={this.handleTextInput}/>
          <button type="button" name="add-task-btn"
            onClick={this.handleButton}
            >ADD</button>
        </div>
        <Overview tasks={this.state.tasks}/>
      </div>
    );
  }
}

export default App;
