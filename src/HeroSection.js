import React, { useState, useEffect } from 'react';
import './App.css';

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const calculateTimeLeft = () => {
    const eventDate = new Date("February 1, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance <= 0) {
      return null; // Event expired
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const time = calculateTimeLeft();
      if (time) {
        setTimeLeft(time);
      } else {
        clearInterval(interval);
        setTimeLeft(null);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const scrollToEvent = (direction) => {
    const container = document.querySelector('.events-container');
    const scrollAmount = container.offsetWidth * (direction === 'left' ? -1 : 1);
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <div>
      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="image-section">
          <div className="hero-content">
            <h1>MOSAIC CULTURAL FEST</h1>
            <h2 id="dates">30th January, 31st January & 1st February 2025</h2>
            <div id="countdown-timer">
              {timeLeft ? (
                <>
                  {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
                </>
              ) : (
                "EXPIRED"
              )}
            </div>
            <a href="#events" className="btn">Register</a>
          </div>
        </div>
      </section>

       {/* About Mosaic Section */}
<section id="about" className="about-section">
  <h2>About Mosaic</h2>
  <p>
    Every year, Mosaic attracts 5000+ students and visitors daily, creating an atmosphere of infectious energy and unforgettable memories.<br/> 
    In 2025, we’re set to raise the bar even higher, bringing together a diverse mix of participants, professionals, 
    and cultural enthusiasts from across the country.
  </p>
  <p id="p2">
    Don’t miss MOSAIC 2025 – a three-day celebration of talent, creativity, and camaraderie that promises to leave you inspired and energized. 
    <br/>Let’s create magic together!
  </p>
</section>

      

      {/* Events Section */}
      <section id="events" className="events-section">
        <h2>Event Details</h2>
        <div className="events-slider">
          <div className="events-container">
            {Array.from({ length: 9 }).map((_, index) => (
              <div className="event" key={index}>
                <h3>Event {index + 1}</h3>
                <p>Date: 30th January 2025</p>
                <p>Time: 6:00 PM - 9:00 PM</p>
                <p>Venue: Main Auditorium</p>
                <button className="btn1">Register Now</button>
              </div>
            ))}
          </div>
          <button className="arrow-btn left" onClick={() => scrollToEvent('left')}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg></button>
          <button className="arrow-btn right" onClick={() => scrollToEvent('right')}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg></button>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
