import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';

import Subscribe from './Subscribe';
import './Body.css';

class Body extends Component {
  render() {
    return (
      <div className="container">
      <ScrollAnimation animateIn="slideInUp" duration={3} animateOnce={true}>
        <div className="row">
          <div className="col-md-4">
            <h2>Who are we<i className="fa fa-question"></i></h2>
            <p>Tax solutions EA Kenya is an independent tax advisory and consulting firm established in 2014 with the sole objective of providing personalised professional tax advisory services to our clients.</p>
            <p><Link className="btn btn-primary" to="/about" role="button">Read More »</Link></p>
          </div>
          <div className="col-md-4">
            <h2>Our drive <i className="fa fa-fire"></i></h2>
            <p>Tax solutions EA Kenya is committed to deliver comprehensive tax advisory services and tax solutions to our clients on a need bases.</p>
            <p><Link className="btn btn-primary" to="/clients" role="button">Read More »</Link></p>
          </div>
          <div className="col-md-4">
            <div className="important">
              <h3>Importants Links</h3>
              <a href="http://www.kra.go.ke/">Kenya Authority</a>
              <Subscribe />
            </div>
          </div>
        </div>
        </ScrollAnimation>
      </div>
    );
  }
}

export default Body;
