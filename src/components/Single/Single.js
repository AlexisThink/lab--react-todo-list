import React from 'react';
import './single.css'

class Single extends React.Component{

    deleteElements = (e) =>{
        e.target.parentNode.outerHTML = null
        console.log(e.target.parentNode)
    }

    render() {
      return (
        <div className = "single">
            <div className = "single__checkbox">
                <input type="checkbox"></input>
            </div>
            <div className = "single__task">
                <p>{this.props.task}</p>
            </div>
            
            <button onClick={this.deleteElements}><i className="material-icons">close</i></button>
            
        </div>
      )
    }
}

export default Single