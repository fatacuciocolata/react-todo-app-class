import React from 'react';
import './Label.scss'

type AppProps = {
    completed: boolean;
    dataTestId: string;
    htmlFor?: string;
}

class Label extends React.Component<AppProps> {

  render () {

    return (
        <label
            className={`label ${this.props.completed ? 'label--completed' : ''}`}
            htmlFor={this.props.htmlFor}
            data-testid={this.props.dataTestId}
                >{this.props.children}
        </label> 
    )
  }
}

export default Label;
