import React, { Component } from 'react';
import '../Styles/App.css';


 class BottomNav extends Component {
  render(){
    return(
      <div className="bottom-nav">
        <a className = "bottomNav" href = 'Guests'
          onClick = {this.props.goToGuests}>
          <span> Guests</span>
        </a>
    </div>
    )
  }
}
export default BottomNav
