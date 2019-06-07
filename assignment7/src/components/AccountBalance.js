import React, {Component} from 'react';
import axios from "axios";
class AccountBalance extends Component{

    render(){
        return <div>Account Balance: {this.props.accountBalance}</div>;
    }
}

export default AccountBalance;
