import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";
import PropTypes from "prop-types";
import AccountBalance from "./AccountBalance";
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";


class Credits extends Component{
    constructor(props) {
    super(props);
    this.state = {
      accountBalance: this.props.accountBalance,
      credits: this.props.credits,
      creditTotal: this.props.creditTotal,
      newDescription: "",
      newAmount: 0,
      newDate: new Date().toISOString()
    };
    }

    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    };

    updateCredit = event =>{
        let newCredit = {
          description: this.state.newDescription,
          amount: parseFloat(this.state.newAmount),
          date: this.state.newDate
        };
        this.setState(prevState => ({
          credits: [...prevState.credits, newCredit],
          totalCredit: prevState.totalCredit + newCredit.amount,
          accountBalance: prevState.accountBalance + newCredit.amount
        }));
    }

    showCredit = () =>{
        return(
            <div>
            {this.state.credits.map((credit, index) => (
              <div className="credit" key={index}>
                    <div>Description: {credit.description}</div>
                    <div>Amount: {credit.amount}</div>
                    <div>Date: {credit.date}</div>
                </div>
                ))}
            </div>
        )
    }

    showForm=()=>{
        return (
      <div className="creditsForm">
        <Form>
          <Label>Description:</Label>
          <Input
            name="newDescription"
            type="text"
            placeholder="Describe your transaction"
            onChange={this.handleChange}
          />
          <br></br>
          <Label for="newAmount">Amount:</Label>
          <Input
            name="newAmount"
            type="number"
            placeholder="0.00"
            onChange={this.handleChange}
          />
          <br></br>
          <Label for="newDate">Date:</Label>
          <Input
            name="newDate"
            type="text"
            value={new Date().toISOString()}
            readOnly
          />
        </Form>
        <Button onClick={this.updateCredit}>Add Credit</Button>
      </div>
    );
    }

    render(){
        return (
          <div>
            <Link to="/">Home</Link>
            <h1>Credits:</h1>
            <h2>
              <AccountBalance accountBalance={this.state.accountBalance} />
            </h2>
            <h2>Total Credits: {this.state.totalCredit}</h2>
            <br></br>
            {this.showCredit()}
            <br></br>
            {this.showForm()}
          </div>
        );
    }

}

Credits.propTypes = {
  accountBalance: PropTypes.number.isRequired,
  credits: PropTypes.array.isRequired,
  totalCredit: PropTypes.number.isRequired
};


export default Credits;
