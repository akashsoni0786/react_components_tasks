import './App.css';
import React from 'react';
export class App extends React.Component {
  render(){
    return (
          <h1>
            Named export Hello World!!
          </h1>
    );
  };
}
export default class App2 extends React.Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          
          <h1>
            Default export Hello World!!
          </h1>
          
        </header>
      </div>
    );
  };
}

 
