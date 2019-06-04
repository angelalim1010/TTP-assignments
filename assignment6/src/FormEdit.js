import React, { Component } from "react";
import './App.css';
class FormEdit extends Component{
    constructor(props){
        super(props);
        this.state={
            firstName: '',
            lastName: '',
            isEditOn: true,
            newFirstName: '',
            newLastName: '',
        };
    }
    handleClick = () =>{
        this.setState(prevState => ({
            isEditOn: !prevState.isEditOn,
            newFirstName: this.state.firstName,
            newLastName: this.state.lastName
        }));
    }
    handleChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleSubmit = (event) =>{
        this.setState(prevState => ({
            isEditOn: !prevState.isEditOn,
            firstName: this.state.newFirstName,
            lastName: this.state.newLastName
        }));
        event.preventDefault();
    }
    render(){
        if(this.state.isEditOn){
            return(
                <div>
                  <div className="first">First name: {this.state.firstName}</div>
                  <div className="last">Last name: {this.state.lastName}</div>
                  <button onClick={this.handleClick}>
                    Edit
                  </button>
                </div>
            )
        }
        else{
            return (
                <form onSubmit={this.handleSubmit}>
                    <label>
                        First name:
                        <input name="newFirstName" type="text" value={this.state.newFirstName} onChange={this.handleChange}></input>
                    </label>
                    <br></br>
                    <label>
                        Last name:
                        <input name="newLastName" type="text" value={this.state.newLastName} onChange={this.handleChange}></input>
                    </label>
                    <br></br>
                    <input type="submit" value="Save"></input>
                    <button onClick={this.handleClick}>
                      Cancel
                    </button>
              </form>
            );
         }
    }
}


export default FormEdit;
