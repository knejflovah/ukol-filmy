import React from 'react';
import './style.css';


const Actor = ({name, as}) => (
  <>
  <div className="starring">
  <p className ="actor">{name} {"\n"}
  <text className="as">{"\n"}{ `as ${as}`}</text>
  </p>
  </div>
   
  </>
);

export default Actor;