import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import './Footer.css';
import Map from './Map';

class Footer extends Component {
  render() {
    return (
      <div>
        <div className="leftside">
          <ul>
            <li className="facebook"><a href="https://web.facebook.com/Tax-Solutions-Kenya-2108485179429411/?modal=admin_todo_tour" role="button"><i className="fa fa-fw fa-facebook"></i>Facebook</a></li>
            <li className="twitter"><a href="https://twitter.com/Taxsolnskenya" role="button"><i className="fa fa-fw fa-twitter"></i>Twitter</a></li>
            <li className="linkedin"><a href="https://www.linkedin.com/in/taxsolutions-kenya-679653ba/" role="button"><i className="fa fa-fw fa-linkedin"></i>Linkedin</a></li>
          </ul>
        </div>
        <div className="footer">
        <ScrollAnimation animateIn="slideInUp" duration={3} animateOnce={true}>
          <div className="container">
            <div className="row">
              <div className="col-md-5 mt-4">
                <h3>Tax Solutions EA Kenya</h3>
                <p><i className="fa fa-home"></i>  Block C1, Sameer Business Park.</p>
                <p><i className="fa fa-road"></i>  Mombasa road, Sammer Business Park, Nairobi.</p>
                <p><i className="fa fa-envelope-open"></i>  P.o. Box 242-00519, Mlolongo Kenya.</p>
                <p><i className="fa fa-phone"></i>  (+254)712413014, (+254)732980570.</p>
                <p><i className="fa fa-envelope"></i> kenyataxsolutions@gmail.com.</p>
                <p><i className="fa fa-globe"></i>  www.taxsolutionkenya.co.ke.</p>
              </div>
              <div className="col-md-7 mt-4">
                <h3>Our offices</h3>
                <Map />
                <p></p>
              </div>
            </div>
          </div>
          <hr />
          <div className="container">
            <div className="social-section text-center">
              <ul className="list-inline">
                <li className="list-inline-item"><a href="https://web.facebook.com/Tax-Solutions-Kenya-2108485179429411/?modal=admin_todo_tour"><i className="fa fa-fw fa-facebook"></i>Facebook</a></li>
                <li className="list-inline-item"><a href="https://twitter.com/Taxsolnskenya"><i className="fa fa-fw fa-twitter"> </i>Twitter</a></li>
                <li className="list-inline-item"><a href="https://www.linkedin.com/in/taxsolutions-kenya-679653ba/"><i className="fa fa-fw fa-linkedin"></i>Linkedin</a></li>
              </ul>
            </div>
            <div className="row">
              <div className="col-md-3"><h5>Tax Solutions EA Kenya</h5></div>
              <div className="col-md-6"><p>All rights researved © 2014-2018 <a href="/">Privacy</a> · <a href="/">Terms</a></p></div>
              <div className="col-md-3"> <p className="float-right">Site by <a href="/">Way Webs Africa</a>.</p></div>
            </div>
          </div>
          </ScrollAnimation>
        </div>
      </div>
    );
  }
}

export default Footer;
