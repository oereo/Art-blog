import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
      <div className="sketchfab-embed-wrapper">
        <iframe title="Chamber" width="853" height="480" frameBorder="0" allowFullScreen mozallowfullscreen="true"
                webkitallowfullscreen="true" allow="fullscreen; autoplay; vr" xr-spatial-tracking
                execution-while-out-of-viewport execution-while-not-rendered web-share loading="eager"
                src="https://sketchfab.com/models/652c512b427e4fa0a3865c994c7ea94a/embed?autospin=0&autostart=1&preload=1&ui_theme=dark"></iframe>
        </div>
    </div>
  );
};

export default App;
