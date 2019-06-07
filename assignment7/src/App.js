import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import axios from 'axios'
import Home from './components/Home'
import UserProfile from './components/UserProfile';
import Debits from './components/Debits'
import Credits from './components/Credits'
import LogIn from './components/LogIn';
import './App.css';

class App extends Component{
    constructor(){
        super();
        this.state={
            accountBalance: 0 ,
            debit: 0,
            credit: 0,
            debits: [],
            credits: [],
            currentUser:{
                userName: 'bob_loblaw',
                memberSince: '08/23/99'
            }
        }
    }

    componentDidMount = () => {
        return Promise.all([this.fetchDebit(), this.fetchCredit()]);
      };

    fetchDebit = async debit =>{
        try {
          let res = await axios.get(
            `https://moj-api.herokuapp.com/debits`
          );
          for (let index in res.data) {
           let currentDebit = res.data[index];
           this.setState(prevState => ({
             debits: [...prevState.debits, currentDebit],
             debit: prevState.debit + currentDebit.amount,
             accountBalance: prevState.accountBalance - currentDebit.amount
            }));
          }
        } catch (err) {
          console.log(err);
        }
        return Promise.resolve("ok")
    }

    fetchCredit = async credit =>{
        try {
          let res = await axios.get(
            `https://moj-api.herokuapp.com/credits`
          );
          for (let index in res.data) {
           let currentCredit = res.data[index];
           this.setState(prevState => ({
             credits: [...prevState.credits, currentCredit],
             credit: prevState.credit + currentCredit.amount,
             accountBalance: prevState.accountBalance + currentCredit.amount
           }));
         }
        } catch (err) {
          console.log(err);
        }
        return Promise.resolve("ok")
    }



    mockLogIn = (logInInfo) =>{
        const newUser = {...this.state.currentUser}
        newUser.userName = logInInfo.userName;
        this.setState({currentUser: newUser})
    }

    render(){
        const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>)
        const UserProfileComponent = () => (
            <UserProfile userName= {this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}  />
        );
        const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} {...this.props}/>)
        const DebitComponent = () => (<Debits
            accountBalance={this.state.accountBalance}
            debits={this.state.debits}
            totalDebit={this.state.totalDebit}/>
        )
        const CreditComponent = () => (<Credits
            accountBalance={this.state.accountBalance}
            credits={this.state.credits}
            totalCredit={this.state.totalCredit}/>
        )
        return(
            <Router>
                <Switch>
                    <Route exact path="/" render={HomeComponent}/>
                    <Route exact path="/userProfile" render={UserProfileComponent}/>
                    <Route exact path="/login" render={LogInComponent}/>
                    <Route exact path="/debits" render={DebitComponent}/>
                    <Route exact path="/credits" render={CreditComponent}/>
                </Switch>
            </Router>
        );
    }
}

export default App;
