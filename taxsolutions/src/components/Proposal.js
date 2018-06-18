import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import axios from 'axios';

import './Proposal.css';

class Proposal extends Component {
  state={
    name:'',
    phone:'',
    email:'',
    company:'',
    subject:'',
    industry:'',
    message:'',
    reply:''
  }

  onChange = e =>{
    this.setState({[e.target.name]: e.target.value})
  }

  onSubmit = e => {
    e.preventDefault();
    this.setState({
      name:'',
      phone:'',
      email:'',
      company:'',
      subject:'',
      industry:'',
      message:'',
    });
    const propose = this.state;
    axios.post('/proposal', propose)
    .then(res =>{
      console.log(res);
      this.setState({reply: res.data.message})
    })
    .catch(err =>{
      this.setState({reply: err.data});
    })
  }

  componentDidUpdate(){
    setTimeout(() => this.setState({reply:''}), 5000);
  }

  render() {
    const {name, phone, email, company, subject, industry, message} = this.state
    return (
      <div className="container">
      <ScrollAnimation animateIn="slideInUp" duration={3} animateOnce={true}>
        <h3 style={{textAlign:"center", color:"#104E8B"}}>REQUEST FOR A PROPOSAL</h3>
        <p style={{textAlign:"center"}}>TSK will be pleased to respond to your invitation and Request for Proposal.</p>
        <div className="feedback">{this.state.reply}</div>
        <form onSubmit={this.onSubmit}>
          <div className="row row-bottom-margin">
            <div className="form-group col-md-4">
                <label htmlFor="name">Name <span className="star">*</span></label>
              <input type="text" name="name" className="form-control" placeholder="Enter your name.." value={name} onChange={this.onChange} required />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="phone">Phone Number <span className="star">*</span></label>
              <input type="text" name="phone" className="form-control" placeholder="Phone number.." value={phone} onChange={this.onChange} required />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="email">Email Address <span className="star">*</span></label>
              <input type="email" name="email" className="form-control" placeholder="example@domain.com" value={email} onChange={this.onChange} required />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="company">Company</label>
              <input type="text" name="company" className="form-control" placeholder="Company..." value={company} onChange={this.onChange} />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="subject">Subject <span className="star">*</span></label>
              <input type="text" name="subject" className="form-control" placeholder="Name to your proposal..." value={subject} onChange={this.onChange} required />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="industry">Industry<span className="star">*</span></label>
              <select className="form-control" name="industry" value={industry} onChange={this.onChange}>
                <option>Select Industry</option>
                <option>Industrial manufacturing</option>
                <option>Agriculture</option>
                <option>Entertainment and media</option>
                <option>Insurance industry</option>
                <option>Tourism industry</option>
                <option>Automotive industry</option>
                <option>Transportation</option>
                <option>Water and sanitation</option>
                <option>Financial services</option>
                <option>Retail</option>
                <option>Professional services</option>
                <option>Not for profit organizations(NPO)</option>
                <option>Retail</option>
                <option>Real estate</option>
                <option>Others</option>
              </select>
            </div>
            <div className="form-group col-md-12">
              <label htmlFor="message">Detailed Subject</label>
              <textarea name="message" className="form-control" rows="5" value={message} onChange={this.onChange}></textarea>
            </div>
          </div>
          <div>
            <p>Note: The <span className="star">*</span> field are required.</p>
          </div>
          <div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
        </ScrollAnimation>
      </div>
    );
  }
}

export default Proposal;
