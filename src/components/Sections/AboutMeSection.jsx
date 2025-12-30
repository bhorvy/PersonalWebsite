import { useState, useEffect, useRef } from 'react';
import '../../App.css';

function AboutMe() {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef(null);
  const [sectionTop, setSectionTop] = useState(0);

  useEffect(() => {
    if (sectionRef.current) {
      setSectionTop(sectionRef.current.offsetTop);
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
       src="../../../stadium.jpg" 
       alt='Colorado State Stadium'
       style={{
         width: '100vw',
         height: '92vh',
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
<div className="col-lg-5 d-flex flex-column align-items-center justify-content-center text-center div-style" style={{ minHeight: '40vh' ,minWidth: '40vh' }}
          onClick={()=> window.location.href ="AboutMe"}>
              <h5>About Me</h5>
              <p>fourth year student, average of 89%. I like building things, physical or virtual. Avid sports fan, Go Broncos! </p>
          </div>
         </div>
       </div>
     </div>
  );
}

export default AboutMe;




