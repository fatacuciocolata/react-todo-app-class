import React from 'react';
import './InputRadio.scss'

type AppProps = {
  dataTestId: string
  onChange: () => void
  checked: boolean
  id: string
  value: string
}

class InputRadio extends React.Component<AppProps> {

  render () {

    return (
      <label className={`input__label ${this.props.checked ? "input__label--bold" : ""}`}>
        <input 
            data-testid={this.props.dataTestId}
            className="input__radio--hidden"
            type="radio" 
            id={this.props.id} 
            value={this.props.value}
            checked={this.props.checked} 
            onChange={this.props.onChange}
        /> {this.props.children}
      </label> 
    )
  }
}

export default InputRadio;
