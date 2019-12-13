import React, { Component } from 'react';
import './register.css'
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';

class Register extends React.Component {
    constructor(props){
        super(props);
    }
  render() { 
      return(
        <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Sign up
                    </Modal.Title>
                </Modal.Header>
                    <Modal.Body>
                        <form>
                            <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label for="inputEmail4">Email</label>
                                        <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="inputPassword4">Password</label>
                                    <input type="password" class="form-control" id="inputPassword4" placeholder="Password" />
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="inputAddress">Username</label>
                                <input type="text" class="form-control" id="inputAddress" placeholder="Username" />
                            </div>
                            <div class="form-group">
                                <label for="inputAddress2">Full name</label>
                                <input type="text" class="form-control" id="inputAddress2" placeholder="Adekunle Ciroma Nwanchukwu" />
                            </div>
                            <div class="form-group">
                                <label for="inputAddress2">Address</label>
                                <input type="text" class="form-control" id="inputAddress2" placeholder="10 Jaja street" />
                            </div>
                            <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputCity">Phone-number</label>
                                <input type="tel" class="form-control" id="inputCity"  placeholder='+234'/>
                            </div>
                            <div class="form-group col-md-4">
                                <label for="inputState">State</label>
                                <select id="inputState" class="form-control">
                                    <option selected>Choose</option>
                                    <option>Lagos</option>
                                    <option>Ebonyi</option>
                                    <option>Ekiti</option>
                                    <option>Ondo</option>
                                    <option>Kano</option>
                                    <option>Katsina</option>
                                    <option>Jigawa</option>
                                    <option>Ogun</option>
                                    <option>Anambra</option>
                                    <option>Enugu</option>
                                    <option>Bayelsa</option>
                                
                                </select>
                            </div>
                            <div class="form-group col-md-2">
                                <label for="inputZip">Zip</label>
                                <input type="text" class="form-control" id="inputZip" />
                            </div>
                            </div>
                            <div class="form-group">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="gridCheck" />
                                    <label class="form-check-label" for="gridCheck">
                                    Check me out
                                    </label>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary btn-block">Sign up</button>
                        </form>
                </Modal.Body>
                <Modal.Footer>
                    <button class="btn btn-primary btn-sm" onClick={this.props.onHide}>close</button>
                </Modal.Footer>
        </Modal>
      );
    }
}


export default Register;