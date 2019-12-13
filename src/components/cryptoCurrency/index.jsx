import React, { Component } from 'react';
//import axios from 'axios';
import './cryptoCurrency.css';
import fetch from 'isomorphic-fetch';


class CryptoCurrency extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            name: this.props.name,
            symbol: this.props.symbol,
            price: null,
            lastPrice: null,
            secondPrice: null,
            lastSecondPrice: null,
        }

        this.pollPrice = this.pollPrice.bind(this)
    }

    componentDidMount() {
        this.pollPrice()
        setInterval(this.pollPrice, 10000)
    }

    componentWillUnmount() {
        this.pollPrice = false;
    }

    pollPrice() {
        console.log('polling for new price')
        const { symbol } = this.state 
        fetch(`https://min-api.cryptocompare.com/data/pricemulti?fsyms=${symbol},BTC&tsyms=BTC${symbol},USD,EUR&api_key=d205b3af567735b908fdcef40dacea50fe70bba0ddcf48387a95c2e6aff4723b`)
            .then(resp => resp.json()) 
            .then(json => {
                console.log(json)
                this.setState((prevState) => ({
                    price: json.BTC.USD,
                    lastPrice: prevState.price !== json.BTC.USD
                        ? prevState.price
                        : prevState.lastPrice,
                    secondPrice:json.BTC.EUR,
                    lastSecondPrice: prevState.secondPrice !== json.BTC.EUR
                        ? prevState.secondPrice
                        : prevState.lastSecondPrice,
            }))
        })
    }

    priceChange(lastPrice, price) {
        const diff = lastPrice - price
        const change = diff / lastPrice
        return (change * 100).toFixed(3);
    }
        

    
    render() {
        const { name, symbol, price, secondPrice, lastPrice } =this.state
        const gainloss = lastPrice > price
            ? 'loss'
            : 'gain'
        return ( 
            <div className="currencybox">
                <div className={`card ${gainloss}`}>
                    <div className= "name">
                        {name} 
                        <span>({symbol})</span>
                    </div>

                <div className={`percent ${gainloss}`}>
                        {this.priceChange(lastPrice, price)}%
                    </div>

                    <div className="logo">

                    </div>

                    <div className={`price ${gainloss}`}>
                        { price }
                        <br/>
                        { secondPrice }
                    </div>
                </div>
            </div>
         );
    }
}
 
export default CryptoCurrency