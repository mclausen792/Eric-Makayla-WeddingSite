import React, { Component } from 'react';
import '../Styles/App.css';

import BottomNav from './BottomNav'



class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <footer className = "app-footer">
          <BottomNav
             goToGuests = {this.props.goToGuests}
          />
        </footer>
      </div>
    );
  }
}

export default Footer;
