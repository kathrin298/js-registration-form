import * as React from 'react';

const RadioField = (props) => {
  return(
    <div>
      <label htmlFor={ props.id } >{props.label}</label>
      <input
        type="radio"
        id={props.id}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      ></input>
    </div>
  )
}

export default RadioField;
