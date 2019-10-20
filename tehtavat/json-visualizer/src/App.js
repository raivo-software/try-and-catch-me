import React, { Component } from 'react';
import { JSONObject } from './JSONObject';
import './App.css';
import {convertJSON} from './tehtava1/convertJSON';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      input: null,
      jsonObject: null,
      error: false
    } 
  }

  visualize() {
    const jsonObject = convertJSON(this.state.input);
    this.setState({jsonObject: jsonObject, error: jsonObject === null});
  }

  onInput(e) {
    this.setState({ input: e.target.value });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          JSON visualizer
        </header>
        <textarea id="jsoninput" rows={5} placeholder="Kopioi JSON tähän..." onChange={e => this.onInput(e)}></textarea>
        <div style={{marginBottom: "2rem"}}>
          <button id="visualizebutton" onClick={() => this.visualize()}>Visualisoi</button>
        </div>
        <div id="result">
          {this.state.jsonObject ? <JSONObject name="root" json={this.state.jsonObject} /> : null}
          {this.state.error ? 'INVALID JSON' : null}
        </div>
      </div>
    );
  }
}

export default App;
