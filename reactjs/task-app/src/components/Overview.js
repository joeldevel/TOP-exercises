import React from 'react';

function Overview(props) {
  return (
    <ul>
      {props.people.map((person,i)=><li key={i}>{person}</li>)}
    </ul>
  );
}

export default Overview;
