import React, {Component} from 'react';

class Decrement extends Component{
    constructor(props){
        super(props);
        this.state = {
            startNumber: this.props.startNumber,
        }
    };

    decrement = () => {
        this.state.startNumber > 0 ? this.setState({startNumber: this.state.startNumber - 1}) : alert("Cannot be less than zero")
    }

    render(){
        return(
            <div>
                {this.state.startNumber}<button onClick={this.decrement}>decrement</button>
            </div>
        )
    }
}

export default Decrement
