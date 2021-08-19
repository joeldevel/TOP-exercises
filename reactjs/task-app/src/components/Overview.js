import React from 'react';

function Overview(props) {
  return (
    <ul>
      {props.tasks.map((task,i)=><li key={i}>{task}</li>)}
    </ul>
  );
}

export default Overview;
