import '../App.css';

function AboutMe() {
  return (
  <div className="w-100 d-flex flex-column align-items-center justify-content-center">    
       <div className="col-lg-2 d-flex flex-column align-items-center justify-content-center text-center div-style" style={{ minWidth: '70vh' }}>
          <h2 className="mt-4">About Me</h2>
          <p className="m-4">I am a fourth year computer science student at the University of Regina. My previous
            experience includes a work term with the Government of Saskatchewan, doing configuration 
            and help desk work. I just finished at SGI, where I was a full stack developer in a C# TypeScipt environment.
            I have a passion for building good software and leveraging technology to solve problems. Currently building personal projects
            alongside my coursework.
          </p>
        </div>

  </div>
  );
}

export default AboutMe;
