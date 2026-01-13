import '../App';
import { AsciiEffect } from '../effects/AsciiEffect';
import * as THREE from 'three';
import { createRoot } from 'react-dom/client'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber'

// let camera : any, controls : any, scene : any, renderer : any, effect : any;

// 			let sphere : any , plane;

// 			const start = Date.now();

// 			init();

//       function init() {

// 				camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
// 				camera.position.y = 150;
// 				camera.position.z = 500;

// 				scene = new THREE.Scene();
// 				scene.background = new THREE.Color( 0, 0, 0 );

// 				const pointLight1 = new THREE.PointLight( 0xffffff, 3, 0, 0 );
// 				pointLight1.position.set( 500, 500, 500 );
// 				scene.add( pointLight1 );

// 				const pointLight2 = new THREE.PointLight( 0xffffff, 1, 0, 0 );
// 				pointLight2.position.set( - 500, - 500, - 500 );
// 				scene.add( pointLight2 );

// 				sphere = new THREE.Mesh( new THREE.SphereGeometry( 200, 20, 10 ), new THREE.MeshPhongMaterial( { flatShading: true } ) );
// 				scene.add( sphere );

// 				// Plane

// 				plane = new THREE.Mesh( new THREE.PlaneGeometry( 400, 400 ), new THREE.MeshBasicMaterial( { color: 0xe0e0e0 } ) );
// 				plane.position.y = - 200;
// 				plane.rotation.x = - Math.PI / 2;
// 				scene.add( plane );

// 				renderer = new THREE.WebGLRenderer();
// 				renderer.setSize( window.innerWidth, window.innerHeight );
// 				renderer.setAnimationLoop( animate );

// 				effect = new AsciiEffect( renderer, ' .:-+*=%@#', { invert: true } );
// 				effect.setSize( window.innerWidth, window.innerHeight );
// 				effect.domElement.style.color = 'white';
// 				effect.domElement.style.backgroundColor = 'black';

// 				// Special case: append effect.domElement, instead of renderer.domElement.
// 				// AsciiEffect creates a custom domElement (a div container) where the ASCII elements are placed.

// 				document.body.appendChild( effect.domElement );

// 				//

// 			}

//       function animate() {

// 				const timer = Date.now() - start;

// 				sphere.position.y = Math.abs( Math.sin( timer * 0.002 ) ) * 150;
// 				sphere.rotation.x = timer * 0.0003;
// 				sphere.rotation.z = timer * 0.0002;

//         if (!controls)
//           return;
// 				controls.update();

// 				effect.render( scene, camera );

// 			}

      function Box(props: ThreeElements['mesh']) {
const meshRef = useRef<THREE.Mesh>(null!)
const [hovered, setHover] = useState(false)
const [active, setActive] = useState(false)
useFrame((state, delta) => (meshRef.current.rotation.x += delta))
return (
  <mesh
    {...props}
    ref={meshRef}
    scale={active ? 1.5 : 1}
    onClick={(event) => setActive(!active)}
    onPointerOver={(event) => setHover(true)}
    onPointerOut={(event) => setHover(false)}>
    <boxGeometry args={[1, 1, 1]} />
    <meshStandardMaterial color={hovered ? 'hotpink' : '#2f74c0'} />
  </mesh>
)
}


function AboutMe() {
  return (
  <div className="w-100 d-flex flex-column align-items-center justify-content-center">    
  <Canvas>
  <ambientLight intensity={Math.PI / 2} />
  <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
  <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
  <Box position={[-1.2, 0, 0]} />
  <Box position={[1.2, 0, 0]} />
</Canvas>
       <div className="col-lg-2 d-flex flex-column align-items-center justify-content-center text-center div-style-2" style={{ minWidth: '70vh' }}>
          <h2 className="mt-4" data-usal="text-fluid split-letter duration-1750 split-delay-75">About Me</h2>
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
