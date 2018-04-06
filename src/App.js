import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Card from './components/Card';
import Wrapper from './components/Wrapper';
import Intro from './components/Intro';
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

    // if user already guessed the card clicked
    if (this.state.beenclicked.includes(id)) {
      this.newgame();
    } else {
        // update topscore if it's the same as currentscore
        if ((this.state.currentCount === this.state.topScore) || (this.state.currentCount > this.state.topScore)) {
          this.setState({ topScore: this.state.topScore + 1 });
        }
      // save clicked card into beenclicked array
      const newBeenClicked = this.state.beenclicked.slice(0);
      newBeenClicked.push(id);
      this.setState({
        beenclicked: newBeenClicked,
        message: "You guessed correctly!",
        cards: this.shuffle(this.state.cards.slice(0)),
      })
    }
  }

  shuffle = (a) => a.sort(function(a, b){return 0.5 - Math.random()})

  newgame = () => {
    this.setState({
      currentCount: 0,
      beenclicked: [],
      message: "Uh oh! Please try again!",
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
          <br />
          <Intro />
        </Wrapper>
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
