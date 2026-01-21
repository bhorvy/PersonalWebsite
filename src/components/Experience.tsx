import '../App.css';
import AsciiRenderer from './AsciiRenderer';
import * as THREE from 'three';
import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

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
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <Canvas 
        camera={{ position: [0, 150, 200], fov: 60 }} 
        style={{ width: '100%', height: '100%', position: 'absolute'}}
      >
        <AsciiRenderer />
        <directionalLight position={[5, 5, 5]} intensity={2} />
        <directionalLight position={[-5, -5, -5]} intensity={3} />
        <Torus1 />
        <Torus2 />
      </Canvas>

      <div  className="d-flex flex-column my-2 justify-content-center align-items-center" style={{zIndex: 1}}>
        <div className="col-lg-2 d-flex flex-column justify-content-center text-center div-style-3 mb-2 py-2" style={{ minHeight: '10vh', minWidth: '20vh' }}>
          <h2 className="m-0"data-usal="text-fluid split-letter duration-1750 split-delay-75">Experience</h2>
        </div>
        <div className="col-lg-2 d-flex flex-column justify-content-center div-style-3 my-2 text-center" style={{ minHeight: '20vh', minWidth: '70vh' }}>
          <h4 data-usal="text-fluid split-letter duration-1750 split-delay-75">Currently:</h4>
          <p className='px-2'>Adding onto this site. Using ThreeJS and Blender for ASCII art. <br></br>
            Building a Blackjack game with a Balatro Twist in C++, implementing Lua asap.</p>
        </div>
        <div className="col-lg-2 d-flex flex-column justify-content-center text-center div-style-3 my-2 px-2" style={{ minHeight: '25vh', minWidth: '70vh' }}>
          <h4 data-usal="text-fluid split-letter duration-1750 split-delay-75">May 2025 - Aug 2025</h4>
          <h5><b>Developer Intern @ <br></br>Saskatchewan Government Insurance</b></h5>
          <p>C#, TypeScript/JavaScript, Java (legacy system integrations), React, Jest, Git, Zustand, Azure DevOps, Agile/Scrum, REST APIs</p>
        </div>
        <div className="col-lg-2 d-flex flex-column justify-content-center text-center div-style-3 my-2 px-2" style={{ minHeight: '25vh', minWidth: '70vh' }}>
          <h4 data-usal="text-fluid split-letter duration-1750 split-delay-75">May 2024 - Apr 2025</h4>
          <h5><b>Configuration Technician Intern @ Government of Saskatchewan</b></h5>
          <p>SQL, Microsoft Excel, Visual Basic, Reporting systems, Hardware/OS troubleshooting</p>
        </div>
      </div>
    </div>
  );
}

export default Experience;