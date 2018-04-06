import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Card from './components/Card';
import Wrapper from './components/Wrapper';
import Footer from './components/Footer';
import cards from './cards.json';
import './App.css';


class App extends Component {

  state = {
    cards,
    currentCount: 0,
    topScore: 0,
    message: "Click an image to begin!",
    beenclicked: []
  }

  handleIncrement = (id) => {
    this.setState({ currentCount: this.state.currentCount + 1 });

    if (this.state.beenclicked.includes(id)) {
      this.newgame();
    } else {
        if ((this.state.currentCount === this.state.topScore) || (this.state.currentCount > this.state.topScore)) {
          this.setState({ topScore: this.state.topScore + 1 });
        }
      const newBeenClicked = this.state.beenclicked.slice(0);
      newBeenClicked.push(id);
      this.setState({
        beenclicked: newBeenClicked,
        message: "You guessed correctly!",
        cards: this.shuffle(this.state.cards.slice(0)),
      })
    }
    console.log(id);
  }

  shuffle = (a) => a.sort(function(a, b){return 0.5 - Math.random()})

  newgame = () => {
    this.setState({
      currentCount: 0,
      beenclicked: [],
      message: "Uh oh! Game over. Please try again!",
      cards: this.shuffle(this.state.cards)
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar 
            currentCount={this.state.currentCount}
            topScore={this.state.topScore}
            currentMessage={this.state.message}
          />
        </header>
        <Wrapper>
          {this.state.cards.map(card => (
            <Card
              id={card.id}
              key={card.id}
              image={card.image}
              incrementCount={this.handleIncrement}
            />
          ))} 
        </Wrapper>
        <Footer />
      </div>  
    );
  }
}

export default App;
