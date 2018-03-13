import React, { Component } from 'react';
import '../Styles/App.css';

import Header from './Header'
import Invite from './Invite'
import Registry from './Registry'
import RSVP from './RSVP'
import Footer from './Footer'
import BottomNav from './BottomNav'
import Homescreen from './Homescreen'



class App extends Component {
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
  goToDetails = (e) =>{
    this.setState({
      home:false,
      invite:true,
      registry: false,
      rsvp: false,
      guests: false
    })
    e.preventDefault()
  }
  goToRegistry = (e) =>{
    this.setState({
      home:false,
      invite:false,
      registry: true,
      rsvp: false,
      guests: false
    })
    e.preventDefault()
  }
  goToRSVP = (e) =>{
    this.setState({
      home:false,
      invite:false,
      registry: false,
      rsvp: true,
      guests: false
    })
    e.preventDefault()
  }


  render(){
    return(
      <div className = 'App'>
        <Header
          goToDetails = {this.goToDetails.bind(this)}
          goToRegistry = {this.goToRegistry.bind(this)}
          goToRSVP = {this.goToRSVP.bind(this)}
        />
        {
          this.state.invite ? <Invite /> : null
        }
        {
          this.state.registry ? <Registry /> : null
        }
        {
          this.state.rsvp ? <RSVP /> : null
        }
        {
          this.state.home ? <Homescreen /> : null
        }
        


      </div>
    )
  }
}
export default App
