import React from 'react';
import './InputText.scss';

type AppProps = {
    dataTestId: string
    onChange: (value:string) => void
    value: string}

class InputText extends React.Component<AppProps> {

  render () {

    return (
        <input 
            className="form__input" 
            type="text" 
            data-testid={this.props.dataTestId}
            onChange={e => this.props.onChange(e.target.value)} 
            value={this.props.value} 
            placeholder="Type something..."
        />
    )
  }
}

export default InputText;
