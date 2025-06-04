import './App.css';
import HeaderNavBar from './components/HeaderNavBar';
import MainPage from './components/MainPage';

function App() {
  return (
    <div className="App">
      <header>
        <HeaderNavBar/>
      </header>
      <main className="gradient-bg">
      <MainPage/>
      </main>
      <footer className="App-footer">
      <p>That Guy frfr</p>
      </footer>
    </div>
  );
}

export default App;
