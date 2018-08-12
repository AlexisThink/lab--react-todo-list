import React from 'react';
import './header.css'

class Header extends React.Component{
    render() {
      return (
        <div className = "container-header">
          <h3 className ="container-header__title" >To Do List by Alexis Olveres</h3>
        </div>
      )
    }
}

export default Header