import logo from "./img/logo.jpeg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Mêler la fiction à la philo et la philo à la fiction</p>
        <a
          className="App-link"
          href="https://www.youtube.com/channel/UCX7Q-2LU8HFJYngYhArrg0Q"
          target="_blank"
          rel="noopener noreferrer"
        >
          Chaîne Youtube
        </a>
      </header>
    </div>
  );
}

export default App;
