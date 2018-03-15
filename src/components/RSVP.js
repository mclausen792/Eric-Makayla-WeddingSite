import React, { Component } from 'react';
import '../Styles/App.css';


class RSVP extends Component {
  render() {
    return (
      <div className="rsvp">
        <h1 className = "rsvpHead"> Please RSVP by November 1, 2018 </h1>
        <form className = "rsvpForm">
          <label>Names of Invited Guests</label>
          <input className = "rsvpInput" placeholder="First Name" required/>
          <input className = "rsvpInput" placeholder="Last Name" required/>
          <label>Attending?</label>
          <input className = "rsvpInput" placeholder ="Yes/No" required/>
          <div className = "attending">
          <input type = "number" className = "rsvpInput adultNumber" placeholder = "# of Adults"/>
          <input type = "number" className = "rsvpInput childNumber" placeholder = "# of Children"/>
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default RSVP;
