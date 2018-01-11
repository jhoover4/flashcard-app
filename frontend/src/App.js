import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Card } from './components/card';
import { Score } from './components/score';

class App extends Component {

  constructor(){
    super();
    this.state = {
     cards: []
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

  render() {
    let logoImgRef = 'https://camo.githubusercontent.com/eb464a60a4a47f8b600aa71bfbc6aff3fe5c5392/68747470733a2f2f7261772e6769746875622e636f6d2f766f6f646f6f74696b69676f642f6c6f676f2e6a732f6d61737465722f6a732e706e67';

    return (
      <div className="App">
        <header className="App-header">
          <img src={logoImgRef} className="App-logo" alt="logo" />
          <h1 className="title">Javascript Card App</h1>
          <h3>A study app by Jordan Hoover</h3>
        </header>
        <Card cardCount={1}/>
      <footer>
        <Score correct={0} wrong={0} />
        <div className="next-button">
          <a href="#">Next Card ></a>
        </div>
      </footer>
    </div>
    );
  }
}

export default App;
