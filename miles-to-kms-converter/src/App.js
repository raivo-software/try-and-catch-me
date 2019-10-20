import React, { Component } from 'react';
import './App.css';
import { milesToKilometers, kilometersToMiles } from './conversions';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      source: 'Miles',
      destination: 'Kilometers',
      conversion: milesToKilometers,
      result: '-',
      inputValue: 0
    };
  }

  vaihda() {
    if(this.state.conversion === milesToKilometers)
      this.setState({
        source: 'Kilometers',
        destination: 'Miles',
        conversion: kilometersToMiles
      });
    else
    this.setState({
      source: 'Miles',
      destination: 'Kilometers',
      conversion: milesToKilometers
    });
    this.konvertoi();
  }

  konvertoi() {
    try {
      const result = this.state.conversion(this.state.inputValue);
      this.setState({ result: result.toFixed(2)});
    }
    catch(err) {
      this.setState({ result: 'Invalid value'});
    }
  }

  onInput(e) {
    console.log('input happened', e.target.value);
    this.setState({ inputValue: parseFloat(e.target.value) });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Miles / Kilometers converter
          <table>
            <tbody>
              <tr>
                <th id="sourceTitle" style={{width: "40%"}}>{this.state.source}</th>
                <th id="switch" className="btn" style={{width: "20%"}} onClick={() => this.vaihda()}>Vaihda</th>
                <th id="destinationTitle" style={{width: "40%"}}>{this.state.destination}</th>
              </tr>
              <tr>
                <td><input id="inputfield" type="number" placeholder="Value..." onChange={e => this.onInput(e)}></input></td>
                <td id="convertButton" className="btn" onClick={() => this.konvertoi()}>Konvertoi>></td>
                <td id="result">{this.state.result}</td>
              </tr>
            </tbody>
          </table>
        </header>
      </div>
    );
  }
}

export default App;
