import * as React from 'react';

type Props = {
  id: string,
  label: string,
  value: string,
  onChange: any
}

const TextField = (props: Props) => {
  return(
    <div>
      <label htmlFor={props.id} >{props.label}</label>
      <input
        type="text"
        id={props.id}
        name={props.id}
        value={props.value}
        onChange={props.onChange} ></input>
    </div>
  )
}

export default TextField;
