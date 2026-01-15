import { useState, useEffect } from 'react';

function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    
    <div style={{ position: 'relative', margin: 0, padding: 0, overflow: 'hidden', height: '95vh' }}>
     <img 
       src="../../../PhotosNDocs/me.jpg" 
       alt='Me, in Black & White'
       style={{
         width: '100vw',
         height: '95vh',
         objectFit: 'cover',
         display: 'block',
         transform: `translateY(${scrollY * 0.3}px)`,
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
         <div className="col-lg-5 d-flex flex-column align-items-center justify-content-center text-center div-style-2" style={{ minHeight: '40vh', minWidth: '40vh'  }}>
           <h2 data-usal="text-shimmer split-letter duration-2000 split-delay-100">Hello, I'm Brennan</h2>
           
           <p className="main-p mt-2" data-usal="fade-u split-word split-delay-33">Computer Science Student at the University of Regina
            <br></br>
              Currently: Back to School 📚
           </p>

         </div>
       </div>
     </div>
    </div>
  );
}

export default HeroSection;