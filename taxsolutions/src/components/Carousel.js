import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import MDSpinner from "react-md-spinner";

import './Carousel.css';
import one from '../images/one.jpg';
import two from '../images/two.jpg';
import five from '../images/five.jpg';

class Carousel extends Component {
  // state = {
  //   loading: true
  // }
  //
  // componentDidMount(){
  //   setTimeout(() => this.setState({loading: false}), 3000);
  // }

  render() {
    const carousel = (
      <div>
        <div id="myCarousel" className="carousel slide" data-ride="carousel" data-pause="false" data-interval="7000">
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1" className=""></li>
            <li data-target="#myCarousel" data-slide-to="2" className=""></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item">
              <img className="first-slide" src={one} alt="First slide" />
              <div className="container">
                <div className="carousel-caption text-left">
                  <h3 className="animated bounceInRight">Behind every successful business is a great accountant.</h3>
                  <p className="animated bounceInLeft">Preparing and Filling the End of year Tax Returns.</p>
                  <p><Link className="btn btn-lg btn-primary" to="/about" role="button">Read more</Link></p>
                </div>
              </div>
            </div>
            <div className="carousel-item active">
              <img className="second-slide" id="second" src={two} alt="Second slide" />
              <div className="container">
                <div className="carousel-caption">
                  <h1 className="animated slideInDown">Tax Solutions EA Kenya.</h1>
                  <p className="animated slideInRight">Dispute resolutions and litigations with Kenya Revenue Authority.</p>
                  <p><Link className="btn btn-lg btn-primary" to="/services" role="button">Learn more</Link></p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="third-slide" src={five} alt="Third slide" />
              <div className="container">
                <div className="carousel-caption text-right">
                  <h2 className="animated zoomIn">Tax consultancy and advisory services.</h2>
                  <p className="animated rotateIn">Lifting the burden off your shoulders. Why wait untill it is already a burden...</p>
                  <p><Link className="btn btn-lg btn-primary" to="/contact" role="button">Get in touch</Link></p>
                </div>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    )

    // const second = document.getElementById("second");

    return (
      // this.state.loading ?
      // <div className="loader">
      //   <MDSpinner className="spinner" size={50} duration={1500} />;
      // </div> :
      carousel
    );
  }
}

export default Carousel;
