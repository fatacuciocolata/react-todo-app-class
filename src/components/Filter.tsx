import React from 'react';
import { connect } from "react-redux"
import { filterByAllActionCreator, filterByCompletedActionCreator, filterByUncompletedActionCreator } from "../redux/actions/filterActions"

import FilterStyled from "./common/FilterStyled"
import InputRadio from './common/InputRadio'

type AppProps = {
    filter: string;
    filterByAll: () => void;
    filterByCompleted: () => void;
    filterByUncompleted: () => void;
}

class Filter extends React.Component<AppProps> {

    filterByAll = () => {
        this.props.filterByAll();
    }
    filterByCompleted = () => {
        this.props.filterByCompleted();
    }
    filterByUncompleted = () => {
        this.props.filterByUncompleted();
    }

  render () {
    console.log(this.props.filter)
    return (
        <FilterStyled>
            <InputRadio
                dataTestId="filter-all-input-radio" 
                id="all"
                value="all"
                checked={this.props.filter === 'all'}
                onChange={this.filterByAll.bind(this)}
                >All
            </InputRadio>
            <InputRadio
                dataTestId="filter-checked-input-radio" 
                value="completed"
                checked={this.props.filter === 'checked'}
                id="checked"
                onChange={this.filterByCompleted.bind(this)}
                >Completed
            </InputRadio>
            <InputRadio
                dataTestId="filter-unchecked-input-radio" 
                value="uncompleted"
                checked={this.props.filter === 'unchecked'}
                id="unchecked"
                onChange={this.filterByUncompleted.bind(this)}
                >Uncompleted
            </InputRadio>
        </FilterStyled>
    )
  }
}

const mapStateToProps = (state:AppProps) => {
    return {
        filter: state.filter
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        filterByAll: () => dispatch(filterByAllActionCreator()),
        filterByCompleted: () => dispatch(filterByCompletedActionCreator()),
        filterByUncompleted: () => dispatch(filterByUncompletedActionCreator())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
