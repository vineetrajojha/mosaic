import React from 'react';
import HeroSection from './HeroSection';
import './App.css';


function App() {
  return (
    <div>
      <header>
        <nav>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#home">•</a></li>
            <li><a href="event.html">Events</a></li>
            <li><a href="#home">•</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#home">•</a></li>
            <li><a href="#contact">About</a></li>
          </ul>
        </nav>
      </header>
      <HeroSection />
    </div>
  );
}

export default App;
