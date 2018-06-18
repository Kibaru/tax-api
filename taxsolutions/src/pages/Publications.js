import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import implications from '../images/implications.pdf';
import foreign from '../images/foreign.pdf';
import pdf from '../images/pdf.png';
import verses from '../images/verses.png';
import gainl from '../images/gainl.png';
import './Publications.css';

class Publications extends Component {
  state ={
    sticky: false
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () =>{
    if(window.scrollY > 200){
      console.log("sticky");
      this.setState({
        sticky: true
      });
    }else {
      console.log("not sticky");
      this.setState({
        sticky: false
      });
    }
  }

  render() {
    return (
      <div className="container">
        <div className="public">
          <h2 id="employee" className="mb-4">1. Tax Implications: Employee VS Independent Contractor</h2>
          <hr className="bg-info" style={{height:"5px"}}/>
          <div className="row">
            <div className="col-md-5">
            <p>Some Organizations especially in highly specialized industries e.g. mining, oil and gas exploration, iT companies operate a team of employees made up of both employees and consultants. Independent consultants carry out the specific functions independently as directed by the management while the employee is under the control of the organization.</p>
            <p>In the Income Tax Act (“ITA”), there are cases where a consultant as categorized by the organisation will actually be viewed as an employee by the tax authorities. This is a high risk area....</p>
            <p><img className="mr-1" style={{maxHeight:"40px", maxWidth:"40px"}} src={pdf} alt="pdf"/>
            <a title="Download employee Vs independent contractor & tax implications pdf" href={implications} download="Employee Vs independent contractor & tax implications">Download</a>
            <span className="label label-default bg-dark ml-2" style={{fontWeght:400, color:"white", borderRadius:"2px"}}>416 KB</span></p>
            </div>
            <div className="col-md-5">
              <p><img className="vs" src={verses} alt="Employee VS Independent Contractor"/></p>
            </div>
            <div className={`col-md-2 side ${this.state.sticky ? 'top' : ''}`}>
              <h5>Reference:</h5>
              <p>~<a href="http://www.kra.go.ke/">Kenya Revenue Authority</a></p>
              <p>~<a href="http://kenyalaw.org/lex//index.xql">Kenya Law</a></p>
              <p>~<a href="Kenyan Income Tax Act (“ITA”)">Kenyan Income Tax Act (“ITA”)</a></p>
            </div>
          </div>

          <hr/>
          <ScrollAnimation animateIn="slideInUp" duration={3} animateOnce={true}>
          <h2 id="foreign" className="mt-5">2. TAX EFFECTS OF FOREIGN EXCHANGE GAINS AND LOSSES IN KENYA</h2>
          <hr className="bg-info" style={{height:"5px"}}/>
          <div className="row">
            <div className="col-md-5">
              <h2>Foreign exchange gains or losses</h2>
              <p><img src={gainl} alt="gain and loss"/></p>
            </div>
            <div className="col-md-5">
              <p>Many businesses todays are conducted using both local and foreign currencies. Billing of customers is therefore done in local as well as foreign currencies. In many situations, the operations are also financed through loans which may be obtained locally. Where the business enterprise has foreign connections, it may be possible to obtain foreign loans. In the course of a trading period, some of these international transactions may have involved foreign loan repayments among other financial obligations.</p>
              <p>At the end of an accounting period, as per the legal requirements, the business enterprises are required to prepare their...</p>
              <p><img className="mr-1" style={{maxHeight:"40px", maxWidth:"40px"}} src={pdf} alt="pdf"/>
              <a title="Download foreign  exchange  gains and losses in Kenya pdf" href={foreign} download="Foreign  exchange  gains and losses in Kenya">Download</a>
              <span className="label label-default bg-dark ml-2" style={{fontWeght:400, color:"white", borderRadius:"2px"}}>469 KB</span></p>
            </div>
            <div className="col-md-2"></div>
          </div>
          </ScrollAnimation>

          <hr className="bg-info" style={{height:"5px"}}/>

          <ScrollAnimation animateIn="slideInUp" duration={3} animateOnce={true}>
          <div className="row">
            <div className="col-md-5">
              <h5 className="text-danger">Reference:</h5>
              <p><a href="http://www.kra.go.ke/">Kenya Revenue Authority</a></p>
              <p><a href="http://kenyalaw.org/lex//index.xql">Kenya Law</a></p>
              <p id="disclaimer"><span className="text-danger">Disclaimer:</span> The views expressed in this publications, are those of the Tax solutions EA Kenya and is meant for general information only, thus not a warranty, representation, advice or solicitation of any nature. Readers are advised in all circumstances to seek the advice of tax consultant on a case to case basis.</p>
            </div>
            <div className="col-md-5 ml-4">
              <h5>Contacts:</h5>
              <p>Phone: +254712413014</p>
              <p>Email: kenyataxsolutions@gmail.com</p>
            </div>
            <div className="col-md-2"></div>
          </div>
          </ScrollAnimation>

        </div>
      </div>
    );
  }
}

export default Publications;
