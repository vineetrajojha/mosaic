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
            <li><a href="event.html">About</a></li>
            <li><a href="#home">•</a></li>
            <li><a href="#contact">Events</a></li>
            <li><a href="#home">•</a></li>
            <li><a href="#contact">Rule Book</a></li>
            <li><a href="#home">•</a></li>
            <li><a href="#contact">Gallery</a></li>
            <li><a href="#home">•</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <HeroSection />
    </div>
  );
}

export default App;
