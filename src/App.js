import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Sydney" />
        <footer>
          This project was created by{" "}
          <a
            href="https://charul-bhalerao.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Charul,
          </a>{" "}
          is open sourced on{" "}
          <a
            href="https://github.com/bhaleraocharul/react-weather-forecast"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://react-weather-forecast-cb.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
