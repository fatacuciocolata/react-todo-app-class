import React from 'react';
import { connect } from "react-redux"
import { removeTodoActionCreator, toggleTodoActionCreator } from '../redux/actions/todosActions';
import { ITodo } from '../redux/reducers/todosReducer';

import InputCheckbox from "./common/InputCheckbox"
import Label from "./common/Label"
import Button from "./common/Button"
import DeleteIcon from "./common/icons/DeleteIcon"
import TodoItemStyled from "./common/TodoItemStyled"

interface ITodoItemProps {
    todo: ITodo;
    removeTodo: (id:number) => void;
    toggleTodo: (todo: ITodo) => void;
}

class TodoItem extends React.Component<ITodoItemProps> {
  
  handleClick = () => {
    this.props.removeTodo(this.props.todo.id)   
  }
  handleToggle = () => {
    this.props.toggleTodo(this.props.todo)
  }

  render () {
    return (
      <li>
          <TodoItemStyled>
            <InputCheckbox todoId={this.props.todo.id} dataTestId="input-checkbox" checked={this.props.todo.completed} handleToggle={this.handleToggle} />
            <Label completed={this.props.todo.completed} dataTestId="label-text">{this.props.todo.title}</Label>
            <Button dataTestId="button-delete" onClick={this.handleClick}><DeleteIcon style={{height:20, width: 20}} /></Button>
          </TodoItemStyled>
      </li>
    )
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
      removeTodo: (id:number) => dispatch(removeTodoActionCreator(id)),
      toggleTodo: (todo: ITodo) => dispatch(toggleTodoActionCreator(todo))
  }
}

export default connect(null, mapDispatchToProps)(TodoItem)
