import React from 'react';
import Single from '../Single/Single';
import todoList from '../data/todoList';


class Entries extends React.Component{
    constructor(){
        super();
        this.state = {
            task: todoList,
        }
    }

    addTask = (e) =>{
        e.preventDefault();
        //TASK INTRODUCIDA
        var newTask = this.taskTexto.value.trim();
        //AGREGAR TASK
        todoList.push(newTask)
        //ACTUALIZANDO STTE
        this.setState({
            task: todoList
        })
        //INPUT TEXT EN BLANCO
        this.taskTexto.value =""
    }

    render() {
      return (
        <div>
            <form onSubmit={this.addTask}>
                <input type="text" ref={(taskTexto) => { this.taskTexto = taskTexto }}  placeholder="Write your task here"></input>
            </form>
            {
                this.state.task.map(function(taskAdd){
                    return <Single task={taskAdd} />
                })
            }
        </div>
      )
    }
}

export default Entries