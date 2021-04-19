import React, { FormEvent } from 'react';
import './Form.scss'

type AppProps = {
    dataTestId: string
    handleSubmit: (e:FormEvent<HTMLFormElement>) => void
}

class Form extends React.Component<AppProps> {

  render () {

    return (
        <form className="form" onSubmit={this.props.handleSubmit} data-testid="addtodo-form">
            {this.props.children}
        </form>
    )
  }
}

export default Form;
