import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Card from './components/Card';
import Wrapper from './components/Wrapper';
import Footer from './components/Footer';
import cards from './cards.json';
import './App.css';


class App extends Component {

  state = {
    cards
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
        <Wrapper>
          {this.state.cards.map(card => (
            <Card
              id={card.id}
              key={card.id}
              image={card.image}
            />
          ))} 
        </Wrapper>
        <Footer />
      </div>  
    );
  }
}

export default App;
