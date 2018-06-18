import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';

import implications from '../images/implications.pdf';
import foreign from '../images/foreign.pdf';
import verses from '../images/verses.png';
import gainl from '../images/gainl.png';
import pdf from '../images/pdf.png';
import './Highlights.css';

class Highlights extends Component {
  render() {
    return (
      <div className="container">
      <ScrollAnimation animateIn="slideInUp" duration={3} animateOnce={true}>
        <div className="highlights">
        <h1 className="mb-4">1. TAX IMPLICATIONS</h1>
        <hr className="bg-info" style={{height:"5px"}}/>
        <div className="row">
          <div className="col-md-7">
             <h2>Employee Vs Independent contractor</h2>
              <p><a role="button" href="/publications#employee" className="btn btn-outline-info mr-5">Read more »</a>
              <img className="mr-1" style={{maxHeight:"40px", maxWidth:"40px"}} src={pdf} alt="pdf"/>
              <a title="Download employee Vs independent contractor & tax implications pdf" href={implications} download="Employee Vs independent contractor & tax implications">Download</a>
              <span className="label label-default bg-dark ml-2" style={{fontWeght:400, color:"white", borderRadius:"2px"}}>416 KB</span>
              </p>
              <h5 className="mt-5">Clickable sub-topics</h5>
              ~<Link to="/publications#employee">Contract of service and contract for service.</Link>
              <h5 className="mt-4">Case law one:</h5>
              <p>~<Link to="/publications#employee">Kapa Oil Company VS Kenya Revenue Authority (“KRA”) - September 2011</Link>.</p>
              <p>~<Link to="/publications#employee">Arguments advanced by KRA to support employee status Vs an independent consultant</Link>.</p>
              <p>~<Link to="/publications#employee">Arguments advanced by Kapa Oil in support of a consultant status</Link>.</p>
          </div>
          <div className="col-md-5">
            <h5>Case law two:</h5>
            <p>~<Link to="/publications#employee">Everret Aviation Limited (Applicant) Vs KRA (Respondent)</Link>.</p>
            <img className="vs" src={verses} alt="Employee VS Independent Contractor"/>
          </div>
        </div>
        </div>
        </ScrollAnimation>
        <hr/>
        <ScrollAnimation animateIn="slideInUp" duration={3} animateOnce={true}>
        <h2 className="mt-5">2. TAX EFFECTS OF FOREIGN EXCHANGE GAINS AND LOSSES IN KENYA</h2>
        <hr className="bg-info" style={{height:"5px"}}/>
        <div className="row">
        <div className="col-md-6">
          <h2>Foreign exchange gains or losses</h2>
          <p><a role="button" href="/publications#foreign" className="btn btn-outline-info mr-5">Read more »</a>
          <img className="mr-1" style={{maxHeight:"40px", maxWidth:"40px"}} src={pdf} alt="pdf"/>
          <a title="Download foreign  exchange  gains and losses in Kenya pdf" href={foreign} download="Foreign  exchange  gains and losses in Kenya">Download</a>
          <span className="label label-default bg-dark ml-2" style={{fontWeght:400, color:"white", borderRadius:"2px"}}>469 KB</span>
          </p>
          <p><img src={gainl} alt="gain and loss"/></p>
        </div>
        <div className="col-md-6">
          <p className="mt-5"><a href="">An example</a></p>
          <p><Link to="/publications#foreign">When to realize foreign exchange gain or loss for tax purposes</Link></p>
          <p><Link to="/publications#foreign">Section 4(A) of the Income Tax Act (“ITA”)</Link></p>
          <p>A. <Link to="">For Limited Liability Companies:</Link></p>
          <p>B. <Link to="/publications#foreign">For Thinly Capitalized Companies</Link></p>
          <p>C. <Link to="/publications#foreign">For a Branch (Section 18(“ITA”) - Taxation of a Nonresident person)</Link></p>
          <p><Link to="/publications#foreign">Causes of foreign exchange gains and losses</Link></p>
          <p><Link to="/publications#foreign">Hedging against foreign exchange gain and losses</Link></p>
        </div>
        </div>
        </ScrollAnimation>
      </div>
    );
  }
}

export default Highlights;
