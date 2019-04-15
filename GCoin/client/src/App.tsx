import * as React from 'react'
import logo from './logo.svg';
import './App.css';
import Father from './components/father'

class App extends React.Component<any, any> {
  render() {
    return (
      <div className="App damn">
        <div className="Panel">
          <Father />
        </div>
      </div>
    );
  }
}

export default App;
