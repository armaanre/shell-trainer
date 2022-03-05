import logo from './logo.svg';
import './App.css';
import axios from 'axios';

const checkHealthz = async () => {
  console.log('Running get request to /healthz')
  const res = await axios.get(`/healthz`);
  console.log(res)
}

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload!!!!.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={checkHealthz}>
          Check backend healthy
        </button>
      </header>
    </div>
  );
}

export default App;
