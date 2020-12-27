import logo from './logo.svg';
import './App.css';

const flag = true;
const count = 5;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p style={{
          color: 'red'
        }}> 
        Hello World!
        </p>
        <p>
          {count},
          {21},
          {5+5},
          {flag && 'FLAG'},
          {flag ? 'flag is true': 'flag is false'}
          {undefined}
          {null}
          {false}
          {true}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
