import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import clients from '../images/clients.jpg';
import './Clients.css';

class Clients extends Component {
  render() {
    return (
      <div className="container">
        <ScrollAnimation animateIn="slideInUp" duration={3} animateOnce={true}>
          <img style={{width:"100%", marginTop:"50px", minHeight:"200px"}} src={clients} alt="Our clients" />
          <p>Tax solutions EA Kenya is committed to deliver comprehensive tax solutions to our clients on a need to need bases. </p>
          <h5>Some of the major industries to our clients includes:</h5>
          <div className="row industry">
            <div className="col-md-4">
              <ul>
                <li>	Financial services</li>
                <li>	Agriculture</li>
                <li>	Entertainment and media</li>
                <li>	Insurance industry</li>
                <li>	Professional services</li>
              </ul>
            </div>
            <div className="col-md-4">
              <ul>
                <li>	Tourism industry</li>
                <li>	Automotive industry</li>
                <li>	Energy industry</li>
                <li>	Transportation</li>
                <li>	Not for profit organizations(NPO)</li>
              </ul>
            </div>
            <div className="col-md-4">
              <ul>
                <li>	Industrial manufacturing</li>
                <li>	Water and sanitation</li>
                <li>	Retail </li>
                <li>	Real estate</li>
              </ul>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="slideInUp" duration={3} animateOnce={true}>
          <div class="row quote">
            <div className="col-md-1"></div>
            <div class="col-md-10">
              <h5 className="my-4"><span style={{color:"white"}}><i className="fa fa-quote-left" style={{color:"blue"}}></i> Get your tax and consulting services from Tax Solutons EA Kenya, they have served us well and professionally over the years.</span><br/><br/>xxxx xxxx, CEO - Kenya Revenue Authority.</h5>
            </div>
            <div className="col-md-1"></div>
          </div>
        </ScrollAnimation>
      </div>
    );
  }
}

export default Clients;
