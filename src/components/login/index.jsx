import React, { Component } from 'react';
import './login.css';
import logo from '../../assets/foodie.svg';
//import rest from './rest.png';
import Register  from '../register';
import {Button, ButtonToolbar} from 'react-bootstrap';
import {Modal} from 'react-bootstrap';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {addModalShow : false}
    }
    render() {
        let addModalClose =() => this.setState({addModalShow:false});
        return (
            <Modal
            {...this.props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Login
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                       
                        <div className="main">
                            <div className='logo'>
                                <img src={logo} alt='foodie_logo' />
                            </div>
                        </div>
                            <h2 className="welcome">Login</h2>
                                <form>
                                    <div className="input-group input-group-sm mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="inputGroup-sizing-sm">E-mail</span>
                                        </div>

                                        <input type="text" placeholder='Email' className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                                    </div>

                                        <div className="input-group input-group-sm mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="inputGroup-sizing-sm">Password</span>
                                            </div>
                                            <input type="password" placeholder='Password' className="form-control" 
                                                aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                                        </div>
                                        
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                                            </div>
                                    
                                        
                                        
                                        <button type='submit' className='btn btn-primary btn-block'>Login</button>
                                        <br/>
                                        <h5>Don't have an account yet? 
                                            <br/>
                                            <div className="butt">
                                                <ButtonToolbar>
                                                    <Button className='btn btn-info btn-sm'
                                                        onClick={() => this.setState({addModalShow: true})}>
                                                        Sign up 
                                                    </Button>


                                                    <Register 
                                                    show={this.state.addModalShow}
                                                    onHide={addModalClose} />
                                                </ButtonToolbar>
                                            </div>

                                        </h5>
                                </form>
                    
            </Modal.Body> 
            <Modal.Footer>
                    <button class="btn btn-primary btn-sm" onClick={this.props.onHide}>close</button>
                </Modal.Footer>
        </Modal>
        );
        
    }
}
 
export default Login;