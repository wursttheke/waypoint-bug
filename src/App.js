import React, { Component } from 'react';
import './App.css';

import Waypoint from 'react-waypoint';

const colors = ['red', 'green', 'black', 'yellow', 'grey', 'blue', 'purple', 'red', 'green', 'black', 'yellow', 'grey', 'blue', 'purple'];

class App extends Component {
  _handleWaypointEnter(e, i) {
    console.log('entered', i);
  }

  _handleWaypointLeave(e, i) {
    // console.log('left', i);
  }

  renderContainers() {
    return colors.map((color, i) => {
      return (
        <Waypoint
          key={i}
          onEnter={e => this._handleWaypointEnter(e, i)}
          onLeave={e => this._handleWaypointLeave(e, i)}>
          <div className="container" style={{ backgroundColor: color }}></div>
        </Waypoint>
      );
    });
  }

  render() {
    return (
      <div className="App">
        {this.renderContainers()}
      </div>
    );
  }
}

export default App;
