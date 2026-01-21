import './App.css';
import HeaderNavBar from './components/HeaderNavBar';
import Footer from './components/Footer';
import MainPage from './components/MainPage';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

function AppContent() {
  const location = useLocation();
  const darkPaths = ['/AboutMe', '/Experience', '/Contact'];
  const isDark = darkPaths.some(p => p === location.pathname || location.pathname.startsWith(p + '/'));

  return (
    <div className={`App ${isDark ? 'dark-mode' : ''}`}>
      <header>
        <HeaderNavBar/>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="Experience" element={<Experience />} />
          <Route path="AboutMe" element={<AboutMe />} />
          <Route path="Contact" element={<Contact />} />
        </Routes>
      </main>
      <footer className="App-footer">
        <Footer />
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;