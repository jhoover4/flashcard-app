import React, { Component } from 'react';

export class Score extends Component {
  render () {
    return (
      <div className="score">
        <ul>
          <li>Correct:</li>
          <li>{this.props.correct}</li>
        </ul>
        <ul>
          <li>Wrong:</li>
          <li>{this.props.wrong}</li>
        </ul>
      </div>
  );
  }
}
