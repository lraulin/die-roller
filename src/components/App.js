import React, { Component } from 'react';
import { Button, DropdownButton, MenuItem } from 'react-bootstrap';
import '../css/App.css';
import { rollD6, rollFudgeDice } from '../helpers';
import NumericInput from 'react-numeric-input';

class App extends Component {
  state = {
    die: 3,
    sides: 6,
    total: 0,
    rolls: [],
    rollString: ""
  }

  handleClick = () => {
    if (this.state.sides === "F") {
      this.handleRollDice();
    } else {
      this.handleRollFudgeDice();
    }
  }

  handleRollDice = () => {
    const { total, rolls } = rollFudgeDice(this.state.die);
    this.setState({total, rolls});
  }

  handleRollFudgeDice = () => {
    const { total, rolls } = rollD6(this.state.die, this.state.sides);
    this.setState({total, rolls});
  }

  handleDieSelect = (e) => {
    const die = e;
    console.log(`Now rolling ${die} dice`);
    this.setState({die});
  }

  handleSidesSelect = (e) => {
    const sides = e;
    if (sides === "F") {
      const die = 4;
      this.setState({die});
    }
    this.setState({sides});
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.total}</h1>
        <ul id="rollList">
          {this.state.rolls.map((roll, index) => <li key={index}>{roll}</li>)}
        </ul>
        <br/>
        <NumericInput
          min={0}
          max={100}
          value={this.state.die}
          style={{
            input: {
              width: 50,
              paddingTop: 5,
              paddingBottom: 8,
              fontSize: 16,
              textAlign: 'center'
            }}}
            onChange={this.handleDieSelect}
        />
        <DropdownButton
          title={"d" + this.state.sides}
          id="sides-menu"
          onSelect={this.handleSidesSelect}
          >
          <MenuItem eventKey="2">2</MenuItem>
          <MenuItem eventKey="3">3</MenuItem>
          <MenuItem eventKey="4">4</MenuItem>
          <MenuItem eventKey="6">6</MenuItem>
          <MenuItem eventKey="8">8</MenuItem>
          <MenuItem eventKey="10">10</MenuItem>
          <MenuItem eventKey="12">12</MenuItem>
          <MenuItem eventKey="100">100</MenuItem>
          <MenuItem eventKey="F">F</MenuItem>
        </DropdownButton>
        <br/>
        <Button
          className="btn btn-primary"
          onClick={this.handleClick}
        >
          Roll {this.state.die}d{this.state.sides}
        </Button>
      </div>
    );
  }
}

export default App;
