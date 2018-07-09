import React, { Component } from 'react';

export default class CurrentDay extends Component {
  render() {
    return (
      <div>
        The day of the month you've selected is: <span className="selected">{19}</span>
      </div>
    );
  }
}