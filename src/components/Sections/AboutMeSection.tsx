import { useState, useEffect, useRef } from 'react';

function AboutMe() {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef(null);
  const [sectionTop, setSectionTop] = useState(0);

  useEffect(() => {
    if (sectionRef.current) {
      setSectionTop((sectionRef.current as HTMLElement).offsetTop);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxOffset = Math.max(0, (scrollY - sectionTop) * 0.3);

  return (
    <div ref={sectionRef} className='section-div'>
      <img
        src="../../../PhotosNDocs/stadium.jpg"
        alt='Colorado State Stadium'
        className='section-image'
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      />
      <div className="container text-center section-text">
        <div className="col-lg-5 d-flex flex-column align-items-center justify-content-center text-center div-style" style={{ minHeight: '40vh', minWidth: '40vh' }}
          onClick={() => window.location.href = "AboutMe"}>
          <h2 data-usal="fade-u split-letter split-delay-25">About Me</h2>
          <p data-usal="fade-u split-word split-delay-33">fourth year student, average of 89%. I like building things, physical or virtual. Avid sports fan, Go Broncos! </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;