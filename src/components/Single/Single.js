import React from 'react';
import './single.css'

class Single extends React.Component{
    render() {
      return (
        <div className = "single">
            <div className = "single__checkbox">
                <input type="checkbox"></input>
            </div>
            <div className = "single__task">
                <p>{this.props.task}</p>
            </div>
            <div className="single__icon">
                <i onSelect={this.props.delete}  className="material-icons">close</i>
            </div>
        </div>
      )
    }
}

export default Single