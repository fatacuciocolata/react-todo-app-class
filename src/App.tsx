import React from 'react';
import './App.scss';
import { connect } from "react-redux"

import TodoList from "./components/TodoList"
import AddTodo from "./components/AddTodo"
import Filter from "./components/Filter"
import Wrapper from "./components/common/Wrapper"
import TodoListStyled from "./components/common/TodoListStyled"
import Loading from "./components/common/Loading"

type AppProps = {
  appState?: boolean
  // isLoading?: boolean
}

class App extends React.Component<AppProps> {
  render () {
    console.log(this.props.appState)
    return (
      <>
        <Wrapper></Wrapper>
        <div className="App">
          {/* {this.props.appState && <Loading /> } */}
          <>
            <AddTodo />
              <TodoListStyled>
                <TodoList />
                <Filter />
              </TodoListStyled>
          </>
        </div>
      </>
    )
  }
}

const mapStateToProps = (state: AppProps) => {
  return {
      appState: state.appState
    }
}

export default connect(mapStateToProps, null)(App)
