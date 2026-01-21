import { useState, useEffect } from 'react';

function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

        handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (

    <div className='section-div'>
      <img
        src="../../../PhotosNDocs/me.jpg"
        alt='Me, in Black & White'
        className='section-image'
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      />
      <div className="container text-center section-text">
        <div className="col-lg-5 d-flex flex-column align-items-center justify-content-center text-center div-style-2" style={{ minHeight: '40vh', minWidth: '40vh' }}>
          <h2 data-usal="text-shimmer split-letter duration-2000 split-delay-100">Hello, I'm Brennan</h2>{/*  */}
          <p className="main-p mt-2" data-usal="fade-u split-word split-delay-33">4th Year Computer Science Student at the University of Regina
            <br></br>
            Currently: Back to School 📚
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;