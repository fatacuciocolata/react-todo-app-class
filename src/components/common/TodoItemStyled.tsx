import React from 'react';
import './TodoItemStyled.scss';

class TodoItemStyled extends React.Component {

  render () {

    return (
        <div className="todo__item">
            {this.props.children}
        </div>
    )
  }
}

export default TodoItemStyled;
