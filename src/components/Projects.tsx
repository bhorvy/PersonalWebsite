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

function Projects() {
  return (
    <div style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
      <Canvas camera={{ position: [0, 150, 200], fov: 70 }} style={{ width: '100%', height: '100%' }}>

        <AsciiRenderer />

        <directionalLight position={[5, 5, 5]} intensity={2} />
        <directionalLight position={[-5, -5, -5]} intensity={3} />

        <Torus1 />
        <Torus2 />

      </Canvas>
      <div className="w-100 d-flex flex-column align-items-center subpage-div mt-5">
        <div className="col-lg-2 d-flex flex-column justify-content-center text-center div-style-3 mb-3" style={{ minHeight: '15vh', minWidth: '20vh' }}>
          <h2 data-usal="text-fluid split-letter duration-1750 split-delay-75">Projects</h2>
        </div>
        <div className="col-lg-2 d-flex flex-column justify-content-center text-center div-style-3 my-3" style={{ minHeight: '30vh', minWidth: '40vh' }}>
          <h2 data-usal="text-fluid split-letter duration-1750 split-delay-75">Project 1</h2>
          <p>Developing an AI model to help farmers</p>
        </div>
        <div className="col-lg-2 d-flex flex-column justify-content-center text-center div-style-3 my-3" style={{ minHeight: '30vh', minWidth: '40vh' }}>
          <h2 data-usal="text-fluid split-letter duration-1750 split-delay-75" >Project 2</h2>
          <p>Building a game</p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
