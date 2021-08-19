import React from 'react';
import {component} from 'react';

import Overview from './components/Overview';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks : ['buy paper', 'walk the cat', 'sleep a lot']
    }
  }
  render() {
    return (
      <div>
        <div>
          <input type="text"/>
          <button type="button" name="add-task-btn">ADD</button>
        </div>
        <Overview tasks={this.state.tasks}/>
      </div>
    );
  }
}

export default App;
