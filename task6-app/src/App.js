import React from 'react';
import './App.css';
import { Compo1,Compo2,Compo3 } from './Compo';
class App extends React.Component{
  render(){
    return (
      <div className="App"> 
         <Compo1 />
         <Compo2 />
         <Compo3 />
      </div>
    );
  }
  
}

export default App;
