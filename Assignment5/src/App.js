import React, {Component} from 'react';
import ContactCard from './ContactCard'
import Decrement from './Decrement'
import './App.css';

class App extends Component{
    render(){
        return(
        <div className="appDiv">
            <ContactCard
                    name = "Bob"
                    mobileNumber = "12243"
                    workNumber = "2334"
                    email = "bob@gmail.com"
            />

            <ContactCard
                    name = "Matt"
                    mobileNumber = "12243"
                    workNumber = "2334"
                    email = "Matt@gmail.com"
            />

            <ContactCard
                    name = "Sam"
                    mobileNumber = "12243"
                    workNumber = "2334"
                    email = "Sam@gmail.com"
            />
            <Decrement startNumber = {10}/>
        </div>

        )
    }
}

export default App;
