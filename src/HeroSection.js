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
          <img src="mosaic.png" alt="Logo" class="hero-logo"/>
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
  <p>Brace yourselves for MOSAIC 2025 – IILM University's grand three-day cultural extravaganza,happening on 30th, 31st January, and 1st February! <br/> Known as one of the most awaited events of the year, Mosaic is where talent meets creativity, and the spirit of youth shines bright.<br/>
  <br/> With a rich legacy of over a decade, Mosaic continues to be a vibrant platform that celebrates art, culture, and innovation through a series of exhilarating <br/>  inter-college competitions and performances. From electrifying music and mesmerizing dance battles to thought-provoking drama and stunning artistic showcases, <br/> there’s something for everyone to enjoy and be inspired by.<br/>
  </p>
  <p id="p2">
  Every year, Mosaic attracts 5000+ students and visitors daily, creating an atmosphere of infectious energy and unforgettable memories. <br/> In 2025, we’re set to raise the bar even higher, bringing together a diverse mix of participants, professionals, and cultural enthusiasts from across the country.
  <br/>
  <br/> 
  Don’t miss MOSAIC 2025 – a three-day celebration of talent, creativity, and camaraderie that promises to leave you inspired and energized. Let’s create magic together!
  </p>
</section>

      

      {/* Events Section */}
      <section id="events" className="events-section">
  <h2>Event Details</h2>
  <div className="events-slider">
    <div className="events-container">
      {[
        {
          title: "Singing",
          date: "30th January 2025",
          time: "6:00 PM - 9:00 PM",
          venue: "Main Auditorium",
          buttonText: "Register Now",
          backgroundImage: "url('sing.png')"
        },
        {
          title: "Dance",
          date: "5th February 2025",
          time: "7:00 PM - 10:00 PM",
          venue: "Conference Hall",
          buttonText: "Sign Up",
          backgroundImage: "url('dance.png')"
        },
        {
          title: "Event 3",
          date: "12th February 2025",
          time: "8:00 PM - 11:00 PM",
          venue: "Lecture Hall",
          buttonText: "Join Now",
          backgroundImage: "url('party.png')"
        },
        {
          title: "Event 4",
          date: "15th February 2025",
          time: "5:00 PM - 8:00 PM",
          venue: "VIP Room",
          buttonText: "RSVP Now",
          backgroundImage: "url('path/to/image4.jpg')"
        },
        {
          title: "Event 5",
          date: "20th February 2025",
          time: "9:00 AM - 12:00 PM",
          venue: "Outdoor Stage",
          buttonText: "Register Now",
          backgroundImage: "url('path/to/image5.jpg')"
        },
        {
          title: "Event 6",
          date: "25th February 2025",
          time: "1:00 PM - 4:00 PM",
          venue: "Main Auditorium",
          buttonText: "Sign Up",
          backgroundImage: "url('path/to/image6.jpg')"
        },
        {
          title: "Event 7",
          date: "3rd March 2025",
          time: "3:00 PM - 6:00 PM",
          venue: "Lobby Area",
          buttonText: "Join Now",
          backgroundImage: "url('path/to/image7.jpg')"
        },
        {
          title: "Event 8",
          date: "10th March 2025",
          time: "10:00 AM - 1:00 PM",
          venue: "Conference Room A",
          buttonText: "RSVP Now",
          backgroundImage: "url('path/to/image8.jpg')"
        },
        {
          title: "Event 9",
          date: "17th March 2025",
          time: "11:00 AM - 2:00 PM",
          venue: "Event Hall",
          buttonText: "Register Now",
          backgroundImage: "url('path/to/image9.jpg')"
        }
      ].map((event, index) => (
        <div className={`event event-${index + 1}`} key={index} style={{ backgroundImage: event.backgroundImage }}>
          <h3>{event.title}</h3>
          <p>Date: {event.date}</p>
          <p>Time: {event.time}</p>
          <p>Venue: {event.venue}</p>
          <button className="btn1">{event.buttonText}</button>
        </div>
      ))}
    </div>
  </div>
</section>

<section>
<div class="gallery-container">
    <h2>Gallery</h2>
    <div class="gallery-grid">
      <div class="photo small"></div>
      <div class="photo large"></div>
      <div class="photo medium"></div>
      <div class="photo tall"></div>
      <div class="photo small"></div>
      <div class="photo wide"></div>
      <div class="photo wide2"></div>
    </div>
  </div>

</section>

    </div>
  );
};

export default HeroSection;
