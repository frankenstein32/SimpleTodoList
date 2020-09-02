import React from 'react';
import { Link, withRouter } from 'react-router-dom';

export default function Header() {
    return (
       <header style={headerStyle}>
           <h1>TodoList</h1>
           <Link style={LinkStyle} to="/">Home</Link> | 
           <Link style={LinkStyle} to="/about" >About</Link>
       </header>
    )
}

const headerStyle = {
    background: 'black',
    color: '#fff',
    textAlign: 'center',
    padding : '10px'
}

const LinkStyle = {
    color: 'white'
}
