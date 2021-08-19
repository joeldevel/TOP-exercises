import React from 'react';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.deleteTask = this.deleteTask.bind(this);
  }
  deleteTask(e) {
    // console.log(e.target.parentElement.firstChild.textContent);
    this.props.handleDelete(e.target.parentElement.firstChild.textContent);
  }
  render() {
    return (
      <ul>
        {this.props.tasks.map((task,i)=>
          <li key={i}>
            {task}<button onClick={this.deleteTask}>X</button>
          </li>)}
        </ul>
      );
      }

  }


export default Overview;
