import React, { Component } from 'react';
import './homepage.css';


class Homepage extends Component {
    render() { 
        return ( 
            <React.Fragment>
                <div className="header">
                    <nav>
                        <div className='logo'>
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
            </React.Fragment>
         );
    }
}
 
export default Homepage;