import React from "react";
import "./Person.css";

const person = props => {
  const name = props.name;

  const age = props.age;

  return (
    <div className="Person">
      <p onClick={props.click}>
        I'm {name} and I am {age} year's old
      </p>
      <input type="text" onChange={props.changed} value={name} />
    </div>
  );
};

export default person;
