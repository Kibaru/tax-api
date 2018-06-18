import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import bout from '../images/bout.png';

import './About.css';

class About extends Component {
  render() {
    return (
      <div className="container">
        <ScrollAnimation animateIn="slideInUp" duration={3} animateOnce={true}>
          <img className="bg" src={bout} alt="About us" />
           <p style={{marginTop: '30px'}}>Tax solutions EA Kenya is an independent tax advisory and consulting firm established in 2014 with the sole objective of providing personalised professional tax advisory services to our clients.</p>

           <p>Tax solutions EA Kenya is a new entrant in the Kenyan market with professionals skilled in all sectors of the economy from various industries as tax consultants and advisors. This makes the firm to pride in its highly skilled individuals and looks forward to gaining momentum in Kenya and across the boarders.
           </p>
         </ScrollAnimation>
      </div>
    );
  }
}

export default About;
