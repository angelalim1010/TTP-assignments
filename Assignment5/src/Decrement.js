import React, {Component} from 'react';

class Decrement extends Component{
    constructor(props){
        super(props);
        this.decrement = this.decrement.bind(this);
        this.state = {
            startNumber: this.props.startNumber,
        }
    };

    decrement(){
        this.state.startNumber > 0 ? this.setState({startNumber: this.state.startNumber - 1}) : alert("Cannot be less than zero")
    }

    render(){
        return(
            <button onClick={() => this.decrement()}>{this.state.startNumber}</button>
        )
    }
}

export default Decrement
