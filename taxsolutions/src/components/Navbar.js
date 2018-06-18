import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import Rxjs from 'rxjs';

import './Navbar.css';

class Navbar extends Component {
  state = {
    isMino: false
  }

  componentDidMount(){
    Rxjs.Observable.fromEvent(window, 'scroll')
    .debounceTime(200)
    .subscribe(e =>{
      if(window.scrollY > 0){
        this.setState({isMino: true});
      }else{
        this.setState({isMino: false});
      }
    });
  }

  render() {
    return (
      <div>
       <nav className={`navbar  navbar-expand-lg navbar-dark fixed-top ${this.state.isMino ? 'small' : ''}`}>
        <div className="container">
          <NavLink className="navbar-brand" to="#">Tax Solutions EA Kenya</NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink exact className="nav-link" to="/" activeClassName="active">Home<span className="sr-only">(current)</span></NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about" activeClassName="active">About us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/clients" activeClassName="active">Our clients</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/highlights" activeClassName="active">Highlights</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/publications" activeClassName="active">Publications</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/services" activeClassName="active">Services</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact" activeClassName="active">Contact us</NavLink>
              </li>
            </ul>
          </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
