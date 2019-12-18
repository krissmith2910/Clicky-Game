import React from 'react';
import Header from 'components/Header';
import Wrapper from './components/Wrapper';
import Card from './components/Card';
import character from "./character.json";
import "./App.css";

class App extends React.Component {

  state = {
    character,
    score: 0,
    highscore: 10,
    message: "Click on Images to begin the game!"
  }

  cardsuffle = (id) => {
    if (this.state.character[id - 1].clicked) {
      this.setState({
        message: "wrong guess, Try again!",

      });
      // count score
    } else {
      this.setState({
        score: this.setState.score += 1,
        message: "Right guess!",

        character: this.state.character.sort(() => Math.random() - 0.5)
      });
    }
    // count highscore
    if (this.state.highscore < this.state.score) {
      this.setState({
        highscore: this.state.score
      })
    }
  }
  render() {
    return (
      <div className="App">
        <Header total={this.state.score} status={this.state.message} className="App-header">
          <h1 className="App-title">The Clicky Game!</h1>
          <p className="App-intro">
            Click on Images to play the GAME!!!
          </p>
        </Header>
        <div>
    
        {/* <highscore
          total=
          goal=
          status=
        /> */}
        </div>
        <Wrapper>
          {this.state.character.map(character => (
            <Card
              cardsuffle={this.cardsuffle}
              id={character.id}
              key={character.id}
              image={character.image}
            />
          ))}
        </Wrapper>

      </div>
    );
  }
}

export default App;