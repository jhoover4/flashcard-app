import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Card } from './components/card';

class App extends Component {

  constructor(){
    super();
    this.state = {
     cards: [],
     currentCard: 1,
     correct: 0,
     wrong: 0
    }
  }

  componentDidMount(){
    const backendApi = "/api/cards"

    axios.get(backendApi)
  .then(response => {
    this.setState({
      cards: response.data
    });
  })
  .catch(error => {
    console.log(error);
  });
  }

  IncreaseScore = () => {
    this.setState({ correct: this.state.correct + 1 });
    this.setState({ currentCard: this.state.currentCard + 1 });
  }

  DecreaseScore = () => {
    this.setState({ wrong: this.state.wrong + 1 });
    this.setState({ currentCard: this.state.currentCard + 1 });
  }

  render() {
    let logoImgRef = 'https://camo.githubusercontent.com/eb464a60a4a47f8b600aa71bfbc6aff3fe5c5392/68747470733a2f2f7261772e6769746875622e636f6d2f766f6f646f6f74696b69676f642f6c6f676f2e6a732f6d61737465722f6a732e706e67';

    // Make sure js loads before it reads data
    let cardData;
    if (this.state.cards.length) {
      console.log(this.state.cards);
      cardData = [this.state.cards[this.state.currentCard - 1].title, this.state.cards[this.state.currentCard - 1].content];
    } else {
      cardData = ["Data not yet loaded", "Data not yet loaded"];
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logoImgRef} className="App-logo" alt="logo" />
          <h1 className="title">Javascript Card App</h1>
          <h3>A study app by Jordan Hoover</h3>
        </header>
        <Card cardCount={this.state.currentCard} cardData={cardData} />
        <footer>
          <div className="score">
            <ul>
              <li>Correct:</li>
              <li>{this.state.correct}</li>
            </ul>
            <ul>
              <li>Wrong:</li>
              <li>{this.state.wrong}</li>
            </ul>
          </div>
          <div className="next-button">
            <button onClick={this.IncreaseScore}>I got it right ></button>
            <button onClick={this.DecreaseScore}>I got it wrong ></button>
          </div>
      </footer>
    </div>
    );
  }
}

export default App;
