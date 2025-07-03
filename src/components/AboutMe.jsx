import '../App.css';

function AboutMe() {
  return (
  <div className="w-100 d-flex flex-column align-items-center justify-content-center">    
       <div className="col-lg-2 d-flex flex-column align-items-center justify-content-center text-center div-style" style={{ minWidth: '70vh' }}>
          <h2 className="mt-4">About Me</h2>
          <p className="m-4">I am a fourth year computer science student at the University of Regina. My previous
            experience includes a work term with the Government of Saskatchewan, doing configuration 
            and help desk work. I am currently on a work term with SGI, where I am a full stack developer.
            I have a passion for building good software and leveraging technology to solve problems.
          </p>
        </div>

  </div>
  );
}

export default AboutMe;
