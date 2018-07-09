import React, { Component } from 'react';
import Days from './Days';
import './Main.css';

export default class Main extends Component {
  render() {
    return (
      <div className="main">
        <Days />
      </div>
    );
  }
}