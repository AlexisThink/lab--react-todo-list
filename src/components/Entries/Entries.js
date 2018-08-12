import React from 'react';

class Entries extends React.Component{
    constructor(){
        super();
        this.state = {
            inputValue: "",
        }
    }

    otraFuncion = (e) =>{
        e.preventDefault();
        console.log('Presionaste Enter')
        console.log('El valor de la variable es: ' + this.state.inputValue)
    }

    getValueInput = (e) =>{
        var texto = e.target.value;

        this.setState({
            inputValue: texto,
        })
    }

    render() {
      return (
        <div>
            <form onSubmit={this.otraFuncion}>
                <input type="text" value={this.state.inputValue} onChange={this.getValueInput}  placeholder="Write your task here"></input>
            </form>
        </div>
      )
    }
}

export default Entries