import React, { Component } from 'react';
import '../Styles/App.css';


class RSVP extends Component {

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
  async createRSVP(rsvp){
  const response = await fetch('https://infinite-mountain-41867.herokuapp.com/guests', {
      method: 'POST',
      body: JSON.stringify(rsvp),
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json',

      }
    })
    console.log(response);
    this.componentDidMount()
  }




  render() {
    return (
      <div className="rsvp">
        <h1 className = "rsvpHead"> Please RSVP by November 1, 2018 </h1>
        <form className = "rsvpForm" onSubmit={this.submitRSVP}>
          <label>Names of Invited Guests</label>
          <input type = "text" id = "first" className = "rsvpInput" placeholder="First Name" name = "first" formMethod = "POST" required/>
          <input type = "text" id = "last" className = "rsvpInput" placeholder="Last Name" name = "last" formMethod = "POST" required/>
          <label>Attending?</label>
          <input type = "text" id = "attending" className = "rsvpInput" placeholder ="Yes/No" name="attending" formMethod = "POST" required/>
          <div className = "attending">
          <input type = "number" id="adults" className = "rsvpInput adultNumber" placeholder = "# of Adults" name="adults" formMethod = "POST" required/>
          <input type = "number" id="children" className = "rsvpInput childNumber" placeholder = "# of Children" name="children" formMethod = "POST" required/>
          </div>
          <button type = "submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default RSVP;
