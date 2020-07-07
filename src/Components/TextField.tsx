import * as React from 'react';

const TextField = (props) => {
  return(
    <div>
      <label htmlFor={ props.id } >{props.label}</label>
      <input type="text" id={props.id} name={props.id} ></input>
    </div>
  )
}

export default TextField;
