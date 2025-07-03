import './App.css';
import HeaderNavBar from './components/HeaderNavBar';
import Footer from './components/Footer';
import MainPage from './components/MainPage';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <header>
        <HeaderNavBar/>
      </header>
      <main className="gradient-bg">
      <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="projects" element={<Projects />} />
            <Route path="aboutme" element={<AboutMe />} />
        </Routes>
      </main>
      <footer className="App-footer">
      <Footer />
      </footer>
    </div>
    </Router>
  );
}

export default App;
