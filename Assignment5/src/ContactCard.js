import React, {Component} from 'react';

class ContactCard extends Component{
    constructor(props){
        super(props);
        this.state ={
            name: this.props.name,
            mobileNumber: this.props.mobileNumber,
            workNumber: this.props.workNumber,
            email: this.props.email,
        };
    }
    render(){
        return(
            <div>
                <h1> {this.state.name} </h1>
                <p> Mobile: {this.state.mobileNumber} </p>
                <p>Work Number: {this.state.workNumber} </p>
                <p>Email: {this.state.email}</p>
            </div>
        )
    }
}

export default ContactCard;
