import React, { Component } from 'react';
import '../Styles/App.css';


class RSVP extends Component {

  async createRSVP(rsvp){
  const response = await fetch('https://infinite-mountain-41867.herokuapp.com/guests', {
      method: 'POST',
      body: JSON.stringify(rsvp),
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Methods': "GET,HEAD,OPTIONS,POST,PUT",
        'Access-Control-Allow-Origin':"*"
      }
    })
    console.log(response);
    this.componentDidMount()
  }

  submitRSVP = (e) => {
      e.preventDefault();
      let newRSVP = {
          first: e.target.first.value,
          last: e.target.last.value,
          attending: e.target.attending.value,
          children: e.target.children.value,
          adults: e.target.adults.value,
      }
      console.log(newRSVP);
      this.createRSVP(newRSVP)
    }


  render() {
    return (
      <div className="rsvp">
        <h1 className = "rsvpHead"> Please RSVP by November 1, 2018 </h1>
        <form className = "rsvpForm" onSubmit={this.submitRSVP}>
          <label>Names of Invited Guests</label>
          <input type = "text" id = "first" className = "rsvpInput" placeholder="First Name" name = "first" required/>
          <input type = "text" id = "last" className = "rsvpInput" placeholder="Last Name" name = "last" required/>
          <label>Attending?</label>
          <input type = "text" id = "attending" className = "rsvpInput" placeholder ="Yes/No" name="attending" required/>
          <div className = "attending">
          <input type = "number" id="adults" className = "rsvpInput adultNumber" placeholder = "# of Adults" name="adults" required/>
          <input type = "number" id="children" className = "rsvpInput childNumber" placeholder = "# of Children" name="children" required/>
          </div>
          <button type = "submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default RSVP;
