import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardLarge from './card-large';
import CardSmall from './card-small';
const arrCard = [1,2,3,4,5,6,7,8,9,10]
class App extends Component {
  render() {
    return (
      <div className="App">
        <CardLarge/>
        { arrCard.map((card)=>(<CardSmall key={card}/>)) }
      </div>
    );
  }
}

export default App;
