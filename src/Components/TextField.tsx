import * as React from 'react';

type Props = {
  id: string,
  label: string,
  value: string,
  optional?: true,
  onChange: any
}

const TextField = (props: Props) => {
  return(
    <div className="form-group">
      <label htmlFor={props.id} >{props.label}</label>
      <input
        className="form-control"
        type="text"
        id={props.id}
        name={props.id}
        value={props.value}
        onChange={props.onChange}
        required={props.optional ? false : true}
      ></input>
    </div>
  )
}

export default TextField;
