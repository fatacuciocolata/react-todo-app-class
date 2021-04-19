import React from 'react';
import './InputCheckbox.scss';

type AppProps = {
    todoId: number;
    dataTestId: string;
    handleToggle: () => void;
    checked: boolean;
}

class InputCheckbox extends React.Component<AppProps> {

  render () {

    return (
        <div className="input--rounded">
            <input 
                type="checkbox" 
                id={`checkbox-${this.props.todoId}`} 
                data-testid="input-checkbox" 
                checked={this.props.checked} 
                onChange={this.props.handleToggle}
            /> 
            <label htmlFor={`checkbox-${this.props.todoId}`}></label>
        </div>
    )
  }
}

export default InputCheckbox;
