import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import serve from '../images/serve.png';
import four from '../images/four.jpg';

import Proposal from '../components/Proposal';
import './Services.css';

class Practise extends Component {
  render() {
    return (
      <div>
        <ScrollAnimation animateIn="slideInUp" duration={3} animateOnce={true}>
        <img style={{maxHeight: '300px', marginTop:'50px', width: '100%'}} src={serve} alt="We are honoured to serve you." />>
        <div className="container">
         <p>We draw on our expertise and hands-on approach to deliver a comprehensive suite of tax solutions to our clients. Our commitment to them is to offer comprehensive tax advisory services, free from audit-based conflicts of interest and round the clock dedication to attending to their tax matters.</p>

         <p>Our team of qualified professionals is focussed on providing a range of tax expertise services that fully address the needs and concerns of our clients. These include:</p>
         <div className="row service">
           <div className="col-md-5">
             <h3>A. Direct taxes</h3>
             <ul>
               <li>Corporate Tax Compliance</li>
               <li>Pay As You Earn (PAYE)  including taxation Expatriate Employees</li>
               <li>Tax restructuring</li>
             </ul>
           </div>
           <div className="col-md-7">
            <img style={{boxSizing:"border-box", maxHeight:"250px", width:"80%", marginBottom:"30px"}} src={four} alt="taxes"/>
           </div>
           <div className="col-md-4">
             <h3>B. Indirect taxes</h3>
             <ul>
               <li>Value Added Tax (Sales Tax)</li>
               <li>Excise duty</li>
               <li>Customs duty</li>
               <li>Export /import duty</li>
               <li>Catering levy</li>
               <li>Betting and Gaming Taxes etc.</li>
             </ul>
           </div>
           <div className="col-md-4">
             <h3>C. Other taxes</h3>
             <ul>
               <li>International tax</li>
               <li>Transfer Pricing</li>
             </ul>
           </div>
           <div className="col-md-4">
             <h3>D. Payroll services and advisory</h3>
           </div>
          </div>
        </div>
        </ScrollAnimation>
        <hr/>
        <Proposal />
      </div>
    );
  }
}

export default Practise;
