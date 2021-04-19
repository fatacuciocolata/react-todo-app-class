import React from 'react';
import LoadingIcon from "./icons/LoadingIcon"
import './Loading.scss'

class Loading extends React.Component {

  render () {

    return (
        <div className="overlay">
            <div className="overlay__content">
                <LoadingIcon />
                <span>Loading...</span>
            </div>
        </div>
    )
  }
}

export default Loading;
