
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <img src="https://th.bing.com/th/id/R.fe505e267661ada7df0990c7015d04fc?rik=mSmnDfUT2dDHgA&riu=http%3a%2f%2fimg03.deviantart.net%2fdd90%2fi%2f2016%2f363%2ff%2f1%2fgoku_ssj2_v2___dbkai___render_by_fradayesmarkers-dataoid.png&ehk=o4wC0GQevHbkllKMFhl6QnM9WsaV9Gm62OtSRq08ZsU%3d&risl=&pid=ImgRaw&r=0" alt="" />
          <strong>Esteban Alexis QA</strong>
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
