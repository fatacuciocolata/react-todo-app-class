import React, { FormEvent } from 'react';
import { connect } from "react-redux"
import { addTodoActionCreator } from "../redux/actions/todosActions"

import Form from "./common/Form"
import InputText from "./common/InputText"

type AppProps = {
    addTodo: (title:string) => void
}

type AppState = { title: string }

class AddTodo extends React.Component<AppProps, AppState> {
    constructor(props:any) {
        super(props);
        this.state = {
            title: '',
        }
    }

    handleChange = (value:string) => {
        const title = value;
        this.setState({ title });
    }

    handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' })
    }

  render () {

    return (
        <Form dataTestId="addtodo-form" handleSubmit={this.handleSubmit}>
            <InputText 
                dataTestId="addtodo-input" 
                onChange={this.handleChange.bind(this)}
                value={this.state.title}
            />
        </Form>
    )
  }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        addTodo: (title:string) => dispatch(addTodoActionCreator(title))
    }
}

export default connect(null, mapDispatchToProps)(AddTodo)
