import React from 'react';
import './FilterStyled.scss';

class FilterStyled extends React.Component {

  render () {

    return (
        <div className="filter">
            {this.props.children}
        </div>
    )
  }
}

export default FilterStyled;
