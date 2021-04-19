import React from 'react';
import './Button.scss'

type AppProps = {
    type?: string
    dataTestId: string
    onClick?: () => void
}

class Button extends React.Component<AppProps> {

  render () {

    return (
        <button 
            className="button" 
            data-testid={this.props.dataTestId} 
            onClick={this.props.onClick}
                >{this.props.children}
        </button>
    )
  }
}

export default Button;
