import '../App';
import { AsciiEffect } from '../effects/AsciiEffect';
import * as THREE from 'three';
import { useRef, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'

function AsciiRenderer() {
	const { gl, scene, camera, size } = useThree();
	const effectRef = useRef<AsciiEffect>(null);
	useEffect(() => {
			const effect = new AsciiEffect(gl, ' .:-=+*#%@', {invert: true})
			effect.setSize( window.innerWidth, window.innerHeight );
			effect.domElement.style.color = 'black';
			effect.domElement.style.backgroundColor = '#F4F3F2';

			effectRef.current = effect

    document.body.appendChild(effect.domElement);

    return () => {
      if (effect.domElement && effect.domElement.parentNode) {
        effect.domElement.parentNode.removeChild(effect.domElement);
      }
    };
  }, [gl]);


	useEffect (() => {
		if (effectRef.current)
		{
			effectRef.current.setSize(size.width, size.height);
		}
	}, [size]);

	useFrame(() => {
    if (effectRef.current) {
      effectRef.current.render(scene, camera);
    }
  }, 1);

  return null;
}

function Sphere() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const startTime = useRef(Date.now());

  useFrame((state) => {
    const timer = Date.now() - startTime.current;

    meshRef.current.position.y = Math.abs(Math.sin(timer * 0.002)) * 1.5;
    
    meshRef.current.rotation.x = timer * 0.0003;
    meshRef.current.rotation.z = timer * 0.0002;
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2, 20, 10]} />
      <meshPhongMaterial flatShading={true} />
    </mesh>
  );
}


function AboutMe() {
  return (
  <div className="w-100 d-flex flex-column align-items-center justify-content-center">    
  <Canvas>
<AsciiRenderer/>
  <ambientLight intensity={Math.PI / 2} />
  <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
  <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
  <Sphere/>
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
