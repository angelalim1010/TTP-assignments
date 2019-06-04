import React, { Component } from "react";

class Toggle extends Component{
    constructor(props){
        super(props);
        this.state = {
            isToggle: true,
        };
    }

    handleClick = ()=> {
    this.setState(prevState => ({
      isToggle: !prevState.isToggle,
    }));
  }

    render(){
        if(this.state.isToggle){
            return(
                <div>
                    <button onClick= {this.handleClick}> Toggle </button>
                    <br></br>
                    <h2> Home </h2>
                    <br></br>
                    <p>File 1</p>
                    <br></br>
                    <p>File 2</p>
                    <br></br>
                    <p>File 3</p>
                    <br></br>
                </div>
            );
        }
        else{
            return(
                <div>
                    <button onClick= {this.handleClick}> Toggle </button>
                    <br></br>
                    Home
                    <br></br>
                </div>
            )
        }

    }
}


export default Toggle;
