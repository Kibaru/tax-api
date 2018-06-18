import React, { Component } from 'react';

import Carousel from '../components/Carousel';
import Body from '../components/Body';

class Home extends Component {
  render() {
    return (
      <div>
       <Carousel />
       <Body />
      </div>
    );
  }
}

export default Home;
