import React, { Component } from 'react';
import './App.scss';

import {Jobs} from './jobs/jobs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Jobs />
      </div>
    );
  }
}

export default App;
