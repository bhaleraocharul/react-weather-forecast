import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        
        <Weather />
        <footer>
          This project was created by{" "}
          <a
            href="https://charul-bhalerao.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Charul
          </a>{" "}
          and is open sourced on{" "}
          <a
            href="https://github.com/bhaleraocharul/react-weather-forecast"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
