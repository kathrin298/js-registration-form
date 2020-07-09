import * as React from 'react';

type Props = {
  id: string,
  name: string,
  label: string,
  options: string[],
  onChange: (e: any) => void
}

const RadioField = (props: Props) => {
  return(
    <div className="form-group">
      <label htmlFor={ props.id } >{props.label}</label>
      <select
        className="form-control"
        id={props.id}
        name={props.name}
        onChange={props.onChange}
       >
        {props.options.map((element) => {
          return <option value={element} key={element} >{element}</option>
        })}
      </select>
    </div>
  )
}

export default RadioField;
