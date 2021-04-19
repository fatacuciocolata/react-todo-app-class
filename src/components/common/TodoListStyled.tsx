import React from 'react';
import './TodoListStyled.scss'

class TodoListStyled extends React.Component {

  render () {

    return (
        <div className="todo__list">
            {this.props.children}
        </div>
    )
  }
}

export default TodoListStyled;
