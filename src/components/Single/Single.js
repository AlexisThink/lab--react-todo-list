import React from 'react';
import './single.css'

class Single extends React.Component{

    mensaje = (e) =>{
        console.log("From single element")
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
            <div className="single__icon">
                <button onClick={() => this.mensaje()}><i className="material-icons">close</i></button>
            </div>
        </div>
      )
    }
}

export default Single