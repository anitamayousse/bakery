import React, { Component } from 'react'

class Card extends Component {
    constructor() {
        super();
        this.state = {
            image: "./public/images/item.png"
        };
    }
    render() {
        return (
            <div
                onClick={this.props.onClick}>
                    {this.props.productName}
                    {this.props.price}
                <button onClick={() => this.props.onClick(this.props.productName , this.props.price)}>
                    <img src = {this.state.image} />
                </button>
            </div>
        );
    }
    
}


export default Card