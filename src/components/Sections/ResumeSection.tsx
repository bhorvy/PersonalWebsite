import { useState, useRef, useEffect } from 'react';

function ResumeSection() {
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
        src="../../../PhotosNDocs/birb.jpg"
        alt='Birds in the woods'
        className='section-image'
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      />
      <div className="container text-center section-text">
        <div className="col-lg-5 d-flex flex-column align-items-center justify-content-center text-center div-style" style={{ minHeight: '30vh', minWidth: '40vh' }}
          onClick={() => window.open("../../PhotosNDocs/Resume.pdf")}>
          <h2 data-usal="split-letter split-delay-25">Resume</h2>
        </div>
      </div>
    </div>
  );
}

export default ResumeSection;