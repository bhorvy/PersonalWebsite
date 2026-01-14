import '../App.css';
import  AsciiRenderer from './AsciiRenderer';
import * as THREE from 'three';
import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'


function Sphere1() {
  const meshRef = useRef<THREE.Mesh>(null!);
  useFrame(() => {
    const timer = Date.now();
    meshRef.current.rotation.x = timer * 0.0003;
    meshRef.current.rotation.z = timer * 0.0002;
  });

  return (
    <mesh ref={meshRef} position={[-500, 0, 0]}>
      <sphereGeometry args={[175, 32, 32]} />
      <meshPhongMaterial 
        flatShading={true}
        color={"0xcccccc"}
        shininess={100}
      />
    </mesh>
  );
}

function Sphere2() {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    const timer = Date.now();
    meshRef.current.rotation.x = timer * 0.0003;
    meshRef.current.rotation.z = timer * 0.0002;
  });

  return (
    <mesh ref={meshRef} position={[465, 0, 0]}>
      <sphereGeometry args={[175, 32, 32]} />
      <meshPhongMaterial 
        flatShading={true}
        color={0xcccccc}
        shininess={100}
      />
    </mesh>
  );
}


function AboutMe() {
  return (
   <div className="ascii-container" style={{ position: 'relative', width: '100%', height: '80vh', overflow: 'hidden' }}>
      <Canvas camera={{ position: [0, 150, 200], fov: 70 }}   style={{ width: '100%', height: '100%' }}
      >
        <AsciiRenderer /> 
        
        <directionalLight position={[5, 5, 5]} intensity={2} />
        <directionalLight position={[-5, -5, -5]} intensity={3} />
        
        <Sphere1 />
        <Sphere2 />
      </Canvas>
            <div className="col-lg-2 d-flex flex-column align-items-center justify-content-center text-center div-style-3" style={{
			minWidth: '70vh', 
	    	position: 'absolute',
			top: '50%',
			left: '50%',
			transform: 'translate(-50%, -50%)',}}>
			<h2 className="mt-4" data-usal="text-fluid split-letter duration-1750 split-delay-75">About Me</h2>
          	<p className="m-4">My previous experience includes a work term with the Government of Saskatchewan, doing configuration 
            and help desk work. I completed four months at SGI (Saskatchewan Government Insurance), where I was a full stack developer in a C#, TypeScipt environment.
            I have a passion for building good software and leveraging technology to solve problems. I enjoy building personal Projects
            alongside my coursework. Currently exploring ThreeJS, and devleoping a blackjack game in C++. 

            Ex-university football player for the Regina Rams. In my spare time I help out coaching my old high school team. 
            Enjoy playing games, currently Escape from Tarkov. Love doing puzzles and watching sports and playing recreationally. 
          </p>
        </div>
    </div>
  );
}

export default AboutMe;