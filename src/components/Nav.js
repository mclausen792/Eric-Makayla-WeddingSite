import React, { Component } from 'react';
import '../Styles/App.css';

 class Nav extends Component {
  render(){
    return(
      <div className="nav">
        <a href = 'Invite'
          onClick = {this.props.goToDetails}>
          <span> Details</span>
        </a>

        <a href = 'Registry'
          onClick = {this.props.goToRegistry}>
          <span>Registry</span>
        </a>

        <a href = 'RSVP'
          onClick = {this.props.goToRSVP}>
            <span>RSVP</span>
          </a>
      </div>
    )
  }
}
export default Nav
