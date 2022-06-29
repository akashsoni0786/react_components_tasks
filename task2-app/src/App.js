import './App.css';

export const App =()=> {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World with named export</h1>
      </header>
    </div>
  );
}
const App2 =()=> {
  return (
    <div className="App">
      <h1>Hello World With default</h1>
    </div>
  );
}
export default App2;


