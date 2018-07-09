import React, { Component } from 'react';
import './Calendar.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

export default class Calendar extends Component {
  render() {
    return (
      <div className="calendar">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}