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
    <div ref={sectionRef} style={{ position: 'relative', margin: 0, padding: 0, overflow: 'hidden', height: '95vh' }}>
     <img 
       src="../../../city.jpg" 
       alt='City Skyline'
       style={{
         width: '100vw',
         height: '95vh',
         objectFit: 'cover',
         display: 'block',
         transform: `translateY(${parallaxOffset}px)`,
         transition: 'transform 0.1s ease-out'
       }}
     />
     <div 
       className="container text-center" 
       style={{ 
         height: '100%',
         display: 'flex', 
         alignItems: 'center', 
         justifyContent: 'center',
         position: 'absolute',
         top: 0,
         left: 0,
         right: 0,
         zIndex: 1
       }}
     >
       <div className="row w-100 align-items-center justify-content-center">
        <div className="col-lg-4 d-flex flex-column align-items-center justify-content-center text-center div-style" style={{ minHeight: '30vh', minWidth: '40vh' }} 
          onClick= {() => window.location.href ="projects"}>
              <h2 data-usal="fade-u split-letter split-delay-25" >Projects</h2>
          </div>
         </div>
       </div>
     </div>
  );
}

export default AboutMe;





