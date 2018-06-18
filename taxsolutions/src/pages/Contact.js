import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import peter from '../images/peter.jpg';
import customer from '../images/customer.jpg';

class Contact extends Component {
  render() {
    return (
      <div className="container">
        <h2 style={{marginTop:"100px", color:"#104E8B"}}>Contact person</h2>
        <hr/>
        <ScrollAnimation animateIn="slideInUp" duration={3} animateOnce={true}>
        <div className="row">
           <div className="col-md-6">
             <img style={{borderRadius:"50%", height:"150px", width:"150px"}} src={peter} alt="Contact person"/>
             <i className="fa fa-quote-left" style={{color:"blue"}}></i> a satsfied customer is the best business of all. <i className="fa fa-quote-right" style={{color:"blue"}}></i>
             <p>Peter M. Kibaru</p>
             <p>Tax consultant (specialist)</p>
             <p>Certified public accountant of Kenya (CPA-K)</p>
             <p>Bachelor of Commerce Accounting - University of Nairobi</p>
             <p>(+254)712413014, (+254)732980570</p>
             <p>peterkibaru@gmail.com, pmwangifox@yahoo.com</p>
           </div>
           <div className="col-md-6">
             <img style={{boxSizing:"border-box", maxHeight:"450px", width:"100%"}} src={customer} alt="Contact person"/>
           </div>
         </div>
         </ScrollAnimation>
      </div>
    );
  }
}

export default Contact;
