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

  async componentDidMount() {
        const guests = await fetch('https://infinite-mountain-41867.herokuapp.com/guests')
        const guestsJSON = await guests.json()
        this.setState({guestsData: guestsJSON})
        console.log('is this working');
        console.log(this.state.guestsData);
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
