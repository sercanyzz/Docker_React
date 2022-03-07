import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="SERCAN YILMAZ">
      <h1>Sercan Yilmaz'in WebSitesi</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          DevOps <code>Sercan YILMAZ</code> tutorial.
        </p>
        <a
          className="App-link"
          href="https://sercanyzz.medium.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://sercanyzz.medium.com
        </a>
      </header>
    </div>
  );
}

export default App;
