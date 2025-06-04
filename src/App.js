import './App.css';
import Personalprojects from './components/Personalprojects';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello</p>
      </header>
      <main>
      <h2 className="intro">Hello, I'm Brennan!</h2>
      <a href="../Resume.pdf">My Resume</a>
      <Personalprojects />
      </main>
      <footer className="App-footer">
      <p>That Guy frfr</p>
      </footer>
    </div>
  );
}

export default App;
