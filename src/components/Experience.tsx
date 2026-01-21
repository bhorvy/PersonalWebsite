import '../App.css';
import AsciiRenderer from './AsciiRenderer';
import * as THREE from 'three';
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

function Torus1() {
  const meshRef = useRef<THREE.Mesh>(null!);
  useFrame(() => {
    const timer = Date.now();
    meshRef.current.rotation.x = timer * 0.0002;
    meshRef.current.rotation.z = timer * 0.0002;
  });

  return (
    <mesh ref={meshRef} position={[-190, 25, 0]}>
      <torusGeometry args={[80, 10, 16, 100]} />
      <meshPhongMaterial
        flatShading={true}
        color={"0xcccccc"}
        shininess={100}
      />
    </mesh>
  );
}

function Torus2() {
  const meshRef = useRef<THREE.Mesh>(null!);
  useFrame(() => {
    const timer = Date.now();
    meshRef.current.rotation.x = timer * -0.0002;
    meshRef.current.rotation.z = timer * -0.0002;
  });

  return (
    <mesh ref={meshRef} position={[160, 25, 0]}>
      <torusGeometry args={[80, 10, 16, 100]} />
      <meshPhongMaterial
        flatShading={true}
        color={"0xcccccc"}
        shininess={100}
      />
    </mesh>
  );
}

function Experience() {
  // Adjust these values to match your actual header and footer heights
  const headerHeight = '60px'; // Change to your header height
  const footerHeight = '50px'; // Change to your footer height

  return (
    <div style={{ 
      width: '100%', 
      height: `calc(100vh - ${headerHeight} - ${footerHeight})`, 
      overflow: 'hidden', 
      position: 'relative' 
    }}>
      <Canvas 
        camera={{ position: [0, 150, 200], fov: 70 }} 
        style={{ 
          width: '100%', 
          height: '100%',
          position: 'fixed',
          top: headerHeight,
          left: 0,
          right: 0,
          zIndex: 0,
          pointerEvents: 'none' // Prevents canvas from blocking clicks
        }}
      >
        <AsciiRenderer />
        <directionalLight position={[5, 5, 5]} intensity={2} />
        <directionalLight position={[-5, -5, -5]} intensity={3} />
        <Torus1 />
        <Torus2 />
      </Canvas>
      
      <div 
        className="w-100 d-flex flex-column align-items-center justify-content-center subpage-div mt-5"
        style={{ 
          position: 'relative', 
          zIndex: 1, 
          minHeight: '100%',
          overflowY: 'auto',
          paddingBottom: '2rem',
          pointerEvents: 'auto' // Re-enables clicks on content
        }}
      >
        <div className="col-lg-2 d-flex flex-column justify-content-center text-center div-style-3 mb-3" style={{ minHeight: '15vh', minWidth: '20vh' }}>
          <h2 data-usal="text-fluid split-letter duration-1750 split-delay-75">Experience</h2>
        </div>
        <div className="col-lg-2 d-flex flex-column justify-content-center text-center div-style-3 my-3" style={{ minHeight: '30vh', minWidth: '40vh' }}>
          <h4 data-usal="text-fluid split-letter duration-1750 split-delay-75">Currently:</h4>
          <p>Building a Blackjack game with a Balatro Twist</p>
        </div>
        <div className="col-lg-2 d-flex flex-column justify-content-center text-center div-style-3 my-3 px-2" style={{ minHeight: '30vh', minWidth: '40vh' }}>
          <h4 data-usal="text-fluid split-letter duration-1750 split-delay-75">May 2025 - Aug 2025</h4>
          <h5><b>Developer Intern @ <br></br>Saskatchewan Government Insurance</b></h5>
          <p>C#, TypeScript/JavaScript, Java (legacy system), React, Jest, Git, Azure DevOps, Agile/Scrum, REST APIs</p>
        </div>
        <div className="col-lg-2 d-flex flex-column justify-content-center text-center div-style-3 my-3 px-2" style={{ minHeight: '30vh', minWidth: '40vh' }}>
          <h4 data-usal="text-fluid split-letter duration-1750 split-delay-75">May 2024 - Apr 2025</h4>
          <h5><b>Configuration Technician Intern @ Government of Saskatchewan</b></h5>
          <p>SQL, Test case management tools, Reporting systems, Software configuration tools, Hardware/OS troubleshooting</p>
        </div>
      </div>
    </div>
  );
}

export default Experience;