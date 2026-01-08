import '../App.css';

function Projects() {
  return (
   <div className="w-100 d-flex flex-column align-items-center justify-content-center">    
      <div className="col-lg-2 d-flex flex-column align-items-center justify-content-center text-center div-style-2" style={{ minHeight: '15vh', minWidth: '20vh' }}>
          <h2 data-usal="text-fluid split-letter duration-1750 split-delay-75">Projects</h2>
      </div>
       <div className="col-lg-2 d-flex flex-column align-items-center justify-content-center text-center div-style" style={{ minHeight: '30vh', minWidth: '40vh' }}>
          <h2 data-usal="text-fluid split-letter duration-1750 split-delay-75">Project 1</h2>
          <p>Developing an AI model to help farmers</p>
      </div>
       <div className="col-lg-2 d-flex flex-column align-items-center justify-content-center text-center div-style" style={{ minHeight: '30vh', minWidth: '40vh' }}>
          <h2 data-usal="text-fluid split-letter duration-1750 split-delay-75" >Project 2</h2>
          <p>Building a game</p>
      </div>

    </div>
  );
}

export default Projects;
