import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Mi primer app con REACT JS.
        </p>
        <a
          className="App-link"
          href="https://github.com/g-villaverde/reactjs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github Repo
        </a>
      </header>
    </div>
  );
}

export default App;
