import React, { Component } from 'react';
import './App.css';
import SearchField from './components/SearchField';
import GifCard from './components/GifCard'
class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="Header">
                    <h1>GIPHY API Search</h1>
                    <SearchField/>
                </div>
            </div>
        );
    }
}

export default App;
