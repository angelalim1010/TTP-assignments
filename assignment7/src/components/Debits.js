import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";
import PropTypes from "prop-types";
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";
import AccountBalance from "./AccountBalance";
class Debits extends Component{
    constructor(props) {
    super(props);
    this.state = {
      debits: this.props.debits,
      totalDebit: this.props.totalDebit,
      accountBalance: this.props.accountBalance,
      newDescription: "",
      newAmount: 0,
      newDate: new Date().toISOString()
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    let newDebit = {
      description: this.state.newDescription,
      amount: parseFloat(this.state.newAmount),
      date: this.state.newDate
    };
    this.setState(prevState => ({
      debits: [...prevState.debits, newDebit],
      totalDebit: prevState.totalDebit + newDebit.amount,
      accountBalance: prevState.accountBalance - newDebit.amount
    }));
  };

  displayDebits = () => {
    return (
      <div className="debits">
        {this.state.debits.map((debit, index) => (
          <div className="debit" key={index}>
            <div>Description: {debit.description}</div>
            <div>Amount: {debit.amount}</div>
            <div>Date: {debit.date}</div>
          </div>
        ))}
      </div>
    );
  };

  displayForm = () => {
    return (
      <div className="debitsForm">
        <Form>
          <Label for="newDescription">Debit Description:</Label>
          <Input
            name="newDescription"
            type="text"
            placeholder="Describe your transaction"
            onChange={this.handleChange}
          />
          <br></br>
          <Label for="newAmount">Debit Amount:</Label>
          <Input
            name="newAmount"
            type="number"
            placeholder="0.00"
            onChange={this.handleChange}
          />
          <br></br>
          <Label for="newDate">Debit Date:</Label>
          <Input
            name="newDate"
            type="text"
            value={new Date().toISOString()}
            readOnly
          />
        </Form>
        <Button onClick={this.handleSubmit}>Add Debit</Button>
      </div>
    );
  };

  render() {
    return (
      <div>
        <Link to="/">Back to Home</Link>
        <h1>Debits:</h1>
        <h2>
          <AccountBalance accountBalance={this.state.accountBalance} />
        </h2>
        <h2>Total Debits: {this.state.totalDebit}</h2>
        <br></br>
        {this.displayDebits()}
        <br></br>
        {this.displayForm()}
      </div>
    );
  }
}


Debits.propTypes = {
  accountBalance: PropTypes.number.isRequired,
  debits: PropTypes.array.isRequired,
  totalDebit: PropTypes.number.isRequired
};

export default Debits
