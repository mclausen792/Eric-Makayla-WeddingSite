import React, { Component } from 'react';
import '../Styles/App.css';


class Guests extends Component {
  constructor(props){
        super(props)

        this.state = {
          guestsData: []
        }
        console.log("What is data here", this.state.guestsData);
    }

  async componentDidMount() {
        const guests = await fetch('https://infinite-mountain-41867.herokuapp.com/guests')
        const guestsJSON = await guests.json()
        this.setState({guestsData: guestsJSON})
        console.log("After", this.state.guestsData);
  }

  render() {
console.log("render", this.state.guestsData);
    return (
      <div className="guests">
        <h1 className = "guestsHead"> Guests </h1>
{this.state.guestsData.map(guestsInfo =>
  <div className = "attending" key= {guestsInfo.id}>
  <h4>{guestsInfo.first}</h4>
  <h4>{guestsInfo.last}</h4>
  <span>{guestsInfo.attending}</span>
</div>
)}
      </div>
    );
  }
}

export default Guests;
