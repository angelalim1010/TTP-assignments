import React, { Component } from 'react';
import axios from 'axios';
import GifCard from './GifCard';
import './SearchField.css'

class SearchField extends Component {
    constructor(props){
        super(props);
        this.state = {
            apiKey:'MdAM0oMZ0qhZnuWisUIFQVVYLSnjZict',
            input: '',
            data: [],
        }
    }

    componentDidMount = () =>{
        this.fetchTrendingData();
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleRegularSubmit = event =>{
        event.preventDefault();
        this.fetchRegularData();
    }

    handleRandomSubmit = event => {
        event.preventDefault();
        this.fetchRandomData();
    }


    fetchRegularData = async () =>{
        try{
            let res = await axios.get(
                `http://api.giphy.com/v1/gifs/search?q=${
                    this.state.input
                }&api_key=${this.state.apiKey}`
            );
            await this.setState({data: res.data.data});
        }catch(err){
            console.log(err);
        }
    }


    fetchTrendingData = async () => {
        try{
            let res = await axios.get(
                ` http://api.giphy.com/v1/gifs/trending?api_key=${this.state.apiKey}`
            );
            await this.setState({data: res.data.data});
        }catch(err){
            console.log(err);
        }
    }

    fetchRandomData = async () => {
        try{
            let res = await axios.get(
                ` http://api.giphy.com/v1/gifs/random?api_key=${this.state.apiKey}`
            );
            await this.setState({data:[res.data.data]});
        }catch(err){
            console.log(err);
        }
    }
    render(){
        let gifs = this.state.data.map(gif => {
            return <GifCard key={gif.id} imageUrl={gif.images.fixed_width.url}/>;
        });
        return (
            <div className="SearchField">
                <div className="SearchBar">
                    <input name="input" type="text" placeholder="Search all gifs" value={this.state.input} onChange={this.handleChange}></input>
                    <button onClick={this.handleRegularSubmit}>
                        Search
                    </button>
                    <button onClick={this.handleRandomSubmit}>
                        Random Search
                    </button>
                </div>
                <br></br>
                <div className="Gifs">
                    {gifs}
                </div>
            </div>
        );
    }
}

export default SearchField;
