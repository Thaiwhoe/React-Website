import React, { Component } from 'react';
import './homepage.css';
import Register from '../register';
import {Button, ButtonToolbar} from 'react-bootstrap';
import Login from '../login';
import CryptoCurrency from '../cryptoCurrency';


class Homepage extends React.Component {
    constructor(props){
        super(props);
        this.state = {addModalShow : false}
        this.state = {addSecondModalShow : false}
    }
    render() {
        let addModalClose =() => this.setState({addModalShow:false});
        let addSecondModalClose =() => this.setState({addSecondModalShow:false}); 
        return ( 
            <React.Fragment>
                <div className="header">
                    <nav>
                        <div className='logos'>
                            <h3>SYMPLIXX</h3>
                        </div>
                        <ul className="nav-links">
                            <li className="active"><a className="links" href="#">Home</a></li>
                            <li><a className="links" href="#">Price</a></li>
                            <li><a className="links" href="#">News</a></li>
                            <li><a className="links" href="#">About us</a></li>
                            <li><a className="links" href="#">Contact us</a></li>
                        </ul>
                    </nav>
                </div>
                <div>
                   <CryptoCurrency 
                        name="Bitcoin"
                        symbol="BTC"
                    />
                </div>

                <div className="signupbutton">
                    <ButtonToolbar>
                        <Button className='btn btn-info btn-sm'
                            onClick={() => this.setState({addModalShow: true})}>
                            Sign up 
                        </Button>


                        <Register 
                        show={this.state.addModalShow}
                        onHide={addModalClose} />
                    </ButtonToolbar>
                
                    <ButtonToolbar>
                        <Button className='btn btn-info btn-sm'
                            onClick={() => this.setState({addSecondModalShow: true})}>
                            Login 
                        </Button>


                        <Login 
                        show={this.state.addSecondModalShow}
                        onHide={addSecondModalClose} />
                    </ButtonToolbar>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Homepage;