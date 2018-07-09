import React, { Component } from 'react';
import './Days.css';

export default class Days extends Component {
  render() {
    const numOfDays = 30;
    const days = Array.from(new Array(numOfDays), (val, index) => index + 1);

    return (
      <div class="days">
        {days.map(x => {
          return (
            <div className={x === 19 ? 'day selected' : 'day'}>{x}</div>
          )
        })}
      </div>
    );
  }
}