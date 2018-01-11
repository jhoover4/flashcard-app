import React, { Component } from 'react';

export class Card extends Component {
  render () {
    return (
    <div className="flashcard-container">
    <div className="flashcard">
    <div className="front">
      <h3>Card #{this.props.cardCount} - Question</h3>
      <p>Side one.</p>
    </div>
    <div className="back">
      <h3>Card #{this.props.cardCount} - Answer</h3>
      <p>Side two.</p>
    </div>
    </div>
    </div>
  );
  }
}
