import React, { Component } from 'react';
import '../Styles/App.css';

import Footer from './Footer'
import Guests from './Guests'

class Homescreen extends Component {
  constructor(){
    super()
    this.state = {
      home: true,
      invite: false,
      registry: false,
      rsvp: false,
      guests: false
    }
  }

  goToGuests = (e) =>{
    this.setState({
      home: false,
      invite: false,
      registry: false,
      rsvp: false,
      guests: true
    })
    e.preventDefault()
  }

  render() {
    return (
      <div className='home'>

        {
          this.state.guests ? <Guests /> : null
        }
      <Footer
        goToGuests = {this.goToGuests.bind(this)}
      />
    </div>
    );
  }
}

export default Homescreen;
