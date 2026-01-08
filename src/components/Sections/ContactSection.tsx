function ContactSection() {

  return (
    <div style={{ position: 'relative', margin: 0, padding: 0, overflow: 'hidden', height: '95vh' }}>
     <img 
       src="../../../PhotosNDocs/circle.jpg" 
       alt='Tube with guy at end b&w'
       style={{
         width: '100vw',
         height: '95vh',
         objectFit: 'cover',
         display: 'block',
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
        <div className="col-lg-5 d-flex flex-column align-items-center justify-content-center text-center div-style" style={{ minHeight: '30vh', minWidth: '40vh' }}  
          onClick={() => window.location.href ="Contact"}>
              <h2 data-usal="fade-u split-letter split-delay-25">Contact Me</h2>
        </div>
       </div>
     </div>
    </div>
  );
}

export default ContactSection;