import * as React from 'react';

type State = {
  value: string
}

type Props = {
  id: string,
  label: string,
  value?: string,
  onChange?: any
}

class TextField extends React.Component<Props, {}> {
  render() {
    return(
      <div>
        <label htmlFor={ this.props.id } >{this.props.label}</label>
        <input
          type="text"
          id={this.props.id}
          name={this.props.id}
          value={this.props.value}
          onChange={this.props.onChange} ></input>
      </div>
    )
  }
}

export default TextField;
