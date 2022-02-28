import "./App.css";
import Header from "./component-const/Header.js";
import Footer from "./component-const/Footer.js";
import Sider from "./component-const/Sider.js";
import Presentation from "./Presentation.js";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-Main">
        <Presentation />
        <Sider />
      </div>
      {/* <header className="App-header">
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
      </header> */}
      <Footer />
    </div>
  );
}

export default App;
