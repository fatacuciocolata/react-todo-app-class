import React from 'react';
import { connect } from "react-redux"
import { fetchTodos } from "../redux/actions/todosActions"
import { ITodo } from '../redux/reducers/todosReducer';

import TodoItem from './TodoItem'
import NoTodoItem from "./common/NoTodoItem"

interface ITodoListProps {
    todos: ITodo[];
    filter: string;
    fetchTodos: () => void;
}

class TodoList extends React.Component<ITodoListProps> {
  componentDidMount() {
      this.props.fetchTodos();

     
  }

  getTodosArrayFiltered = () => {
    if (!this.props.todos) {
      return [];
    }
    return this.props.todos.filter(todo => {
      switch(this.props.filter){ 
          case "checked":
              return todo.completed
          case "unchecked":
              return !todo.completed
          default:
              return true;
      }})

  } 

  render () {
    const todosArrayFiltered = this.getTodosArrayFiltered();
  
    return (
      <>  
        <ul>
          {todosArrayFiltered.length > 0 && todosArrayFiltered.map((todo: ITodo, index) =><TodoItem key={index} todo={todo} />)}
          {todosArrayFiltered.length === 0 && <NoTodoItem>No todos!</NoTodoItem>}
        </ul>
      </>
    )
  }
}

const mapStateToProps = (state:ITodoListProps) => {
    return {
        todos: state.todos,
        filter: state.filter
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchTodos: () => dispatch(fetchTodos())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)