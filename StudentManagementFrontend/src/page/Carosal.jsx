import React, { useState, useEffect, useRef } from "react";
import "../../src/CSS/Cardslider.css";

function Carousel() {
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    let intervalId;

    if (!isDown) {
      // Move images automatically every 3 seconds
      intervalId = setInterval(() => {
        if (containerRef.current) {
          const container = containerRef.current;
          
          container.scrollLeft += container.clientWidth; // Scroll to the next image
         
          // If reached the end, scroll back to the beginning
          if (
            container.scrollLeft + container.clientWidth >=
            container.scrollWidth)
           {
            container.scrollLeft =0
            
          }
        console.log(container.scrollLeft + container.clientWidth >=
          container.scrollWidth)
          

        }
      }, 5000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isDown]);

  const handleMouseDown = (e) => {
    setIsDown(true);
    e.target.classList.add("active");
    setStartX(e.pageX - e.target.offsetLeft);
    setScrollLeft(e.target.scrollLeft);
  };

  const handleMouseLeave = (e) => {
    setIsDown(false);
    e.target.classList.remove("active");
  };

  const handleMouseUp = (e) => {
    setIsDown(false);
    e.target.classList.remove("active");
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - e.target.offsetLeft;
    const walk = (x - startX) * 3;
    e.target.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="background">
      <section
        className="container"
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
      <article className="card">
        <figure>
          <img src={process.env.PUBLIC_URL+'/image/istockphoto-529418492-612x612.jpg'} alt="" title="">
          </img>
        </figure>
        <div className="course-details">
            <h3>Diploma in Advanced Computing</h3>
           
          </div>
      </article>
      <article className="card">
        <figure>
          <img src={process.env.PUBLIC_URL+'/image/istockphoto-658859022-612x612.jpg'} alt="" title="">
          </img>
        </figure>
        <div className="course-details">
          <p>Our Diploma in Advanced Computing program offers an in-depth 
              exploration of cutting-edge technologies and advanced computing concepts. 
              </p>
        </div>
      </article>
      <article className="card">
        <figure>
          <img src={process.env.PUBLIC_URL+'/image/istockphoto-1257617279-612x612.jpg'} alt="" title="">
          </img>
        </figure>
        <div className="course-details">
            <h3>Diploma in Big Data Analytics </h3>
           
          </div>
      </article>
      <article className="card">
        <figure>
          <img src={process.env.PUBLIC_URL+'/image/istockphoto-1311084713-612x612.jpg'} alt="" title="">
          </img>
        </figure>
        <div className="course-details">
        <p>
              The Diploma in Big Data Analytics program is designed to provide 
              a comprehensive understanding of big data technologies and analytics.</p>
        </div>
      </article>
      <article className="card">
        <figure>
          <img src={process.env.PUBLIC_URL+'/image/istockphoto-1407200725-612x612.jpg'} alt="" title="">
          </img>
        </figure>
        <div className="course-details">
          <h3>Diploma in Mobile Computing</h3>
        </div>
      </article>
      <article className="card">
        <figure>
          <img src={process.env.PUBLIC_URL+'/image/istockphoto-1399154821-170667a.webp'} alt="" title="">
          </img>
        </figure>
        <div className="course-details">
          <p>The Diploma in Mobile Computing program offers a comprehensive 
              exploration of mobile technologies and application development. </p>
        </div>
      </article>
      <article className="card">
        <figure>
          <img src={process.env.PUBLIC_URL+'/image/istockphoto-1396520400-612x612.jpg'} alt="" title="">
          </img>
        </figure>
        <div className="course-details">
          <h3>Diploma In Embedded Systems and Design</h3>
        </div>
      </article><article className="card">
        <figure>
          <img src={process.env.PUBLIC_URL+'/image/istockphoto-1393947553-170667a.webp'} alt="" title="">
          </img>
        </figure>
        <div className="course-details">
          <p>The Diploma in Embedded Systems and Design program offers an 
              extensive understanding of embedded systems, hardware design, 
              microcontroller programming, and real-time operating systems.</p>
        </div>
      </article>
      
    </section>
      </div> );
}

export default Carousel;