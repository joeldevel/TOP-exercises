import React from 'react';
import {component} from 'react';

import Overview from './components/Overview';

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <input type="text"/>
          <button type="button" name="add-task-btn">ADD</button>
        </div>
        <Overview people={['pepe','juancito','bolainas']}/>
      </div>
    );
  }
}

export default App;
