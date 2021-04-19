import React from 'react';
import './NoTodoItem.scss'

class NoTodoItem extends React.Component {

  render () {

    return (
        <div className="notodo__item">
            {this.props.children}
        </div>
    )
  }
}

export default NoTodoItem;
