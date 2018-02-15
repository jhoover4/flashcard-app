import React, { Component } from 'react';

export class Card extends Component {
  render () {
    return (
    <div className="flashcard-container">
    <div className="flashcard">
    <div className="front">
      <h3>Card #{this.props.cardCount} - Question</h3>
      <p>{this.props.cardData[0]}</p>
    </div>
    <div className="back">
      <h3>Card #{this.props.cardCount} - Answer</h3>
      <p>{this.props.cardData[1]}</p>
    </div>
    </div>
    </div>
  );
  }
}
