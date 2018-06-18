import React, { Component } from 'react';
import axios from 'axios';

class Subscribe extends Component {
  state={
    message: ''
  }

  newSubscriber(newSubscriber){
    axios.post('/subscribe', newSubscriber)
    .then(res =>{
      this.setState({message: res.data})
    })
    .catch(err => {
      this.setState({message: err.data})
    }
  );
  }

  componentDidUpdate(){
    setTimeout(() => this.setState({message:''}), 3000);
  }

  onSubmit = e => {
    e.preventDefault();
    const newSubscriber = {
      email: this.refs.email.value
    }
    this.newSubscriber(newSubscriber);
    e.target.reset();
  }
  render() {
    return (
      <form style={{marginTop:'20px'}} onSubmit={this.onSubmit}>
        <div style={{background:"green", color:"white", textAlign:"center"}}>{this.state.message}</div>
        <div className="form-group">
          <label htmlFor="email">Subscribe to get updates</label>
          <input type="email" ref="email" className="form-control" placeholder="Email address..." required/>
        </div>
        <button type="submit" className="btn btn-primary">Send</button>
      </form>
    );
  }
}

export default Subscribe;
