import React, { Component } from "react";
import FormEdit from './FormEdit'
import Toggle from './Toggle'
import logo from './logo.svg';
import './App.css';

class App extends Component{
    render(){
        return(
            <div>
                <FormEdit/>
                <Toggle/>
            </div>
        )
    }
}

export default App;
