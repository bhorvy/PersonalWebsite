import '../App';

function AboutMe() {
  return (
  <div className="w-100 d-flex flex-column align-items-center justify-content-center">    
       <div className="col-lg-2 d-flex flex-column align-items-center justify-content-center text-center div-style" style={{ minWidth: '70vh' }}>
          <h2 className="mt-4">About Me</h2>
          <p className="m-4">My previous experience includes a work term with the Government of Saskatchewan, doing configuration 
            and help desk work. I completed four months at SGI (Saskatchewan Government Insurance), where I was a full stack developer in a C#, TypeScipt environment.
            I have a passion for building good software and leveraging technology to solve problems. I enjoy building personal projects
            alongside my coursework. Currently exploring ThreeJS, and devleoping a blackjack game in C++. 

            Ex-university football player for the Regina Rams. In my spare time I help out coaching my old high school team. 
            Enjoy playing games, currently Escape from Tarkov. Love doing puzzles and watching sports and playing recreationally. 
          </p>
        </div>
  </div>
  );
}

export default AboutMe;
