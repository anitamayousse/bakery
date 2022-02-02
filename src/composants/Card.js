import React, { Component } from 'react'

class Card extends Component {
    constructor() {
        super();
        this.state = {
            image: "./public/images/item.png"
        };
    }
    componentDidMount() {
    
        fetch(`https://raw.githubusercontent.com/konexio/digitous-assest/main/bakery/"${this.props.productName}".png`)
          .then((res) => res.blob())
          .then((url) => {
             this.url = URL.createObjectURL(url);
            this.setState({ 
                image: url,
               });
          })
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