import React, { Component } from 'react';
import './App.css';
import AdventureBotApp from './components/AdventureBot';
// import JokeBot from './components/JokeBot';
import b1 from './components/img/friendlybot.png';
import b2 from './components/img/friendlybothappy.png';
import quest0 from './components/img/quest0.png';
import quest1 from './components/img/quest1.png';

class App extends Component {

  state = {
    botPic: b1,
    questPic: quest0,
  }

  switchBot = () => {
    this.setState({
      botPic: b2,
    })
  }

  switchQuest1 = () => {
    this.setState({
      questPic: quest1,
    })
  }

  render() {
    return (
      <div className="App">
        <img id="botPic" src={this.state.botPic} alt="botPic" />
        <div id="cBParent">
          <AdventureBotApp
            switchBot={this.switchBot}
            switchQuest1={this.switchQuest1}
            botPic={this.state.botPic}
          />
        </div>
      </div>
    )
  }
}

export default App;