import React, { Component } from 'react';

class GifCard extends Component {
    render() {
        return (
            <div className="GifCard">
                <img src={this.props.imageUrl} alt=""></img>
            </div>
        );
    }
}

export default GifCard;
