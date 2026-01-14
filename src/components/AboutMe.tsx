import '../App.css';
import { AsciiEffect } from '../effects/AsciiEffect';
import * as THREE from 'three';
import { useRef, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'


function AsciiRenderer() {
  const { gl, scene, camera, size } = useThree();
  const effectRef = useRef<AsciiEffect>(null);

  useEffect(() => {
const effect = new AsciiEffect(gl, ' .\'`^",:;Il!i~+_-?][}{1)(|/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$', { alpha: true, resolution: 0.18 });   
	 effect.domElement.style.color = 'black';
    effect.domElement.style.backgroundColor = '#F4F3F2';
    effect.domElement.style.position = 'absolute';
    effect.domElement.style.top = '0vh';
    effect.domElement.style.left = '0';
    effect.domElement.style.width = '100%';
    effect.domElement.style.height = '100%';
	effect.domElement.style.fontFamily = 'monospace';
	effect.domElement.style.lineHeight = '100%'; // tweak between 70-90%
	effect.domElement.style.letterSpacing = '0px';
	effect.domElement.style.zIndex = '1'; // behind your text

    effectRef.current = effect;

    // Append to the same parent as the canvas
    gl.domElement.parentNode?.appendChild(effect.domElement);

    return () => {
      effect.domElement.parentNode?.removeChild(effect.domElement);
    };
  }, [gl]);

  // Resize
  useEffect(() => {
    effectRef.current?.setSize(size.width, size.height);
  }, [size]);

  // Render each frame
  useFrame(() => {
    if (effectRef.current) effectRef.current.render(scene, camera);
  });

  return null;
}

function Sphere() {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = t * 0.4;
    meshRef.current.rotation.y = t * 0.3;
  });

return (
    <mesh ref={meshRef} position={[-2, 1.5, 0]}> 
      <sphereGeometry args={[2.2, 20, 10]} /> 
      <meshPhongMaterial 
        flatShading={true}
        shininess={100}
        specular="#ffffff"
        color="#222222"
      />
    </mesh>
  );
}


function AboutMe() {
  return (
 <div className="ascii-container" style={{ position: 'relative', width: '100%', height: '100vh' }}>
<Canvas camera={{ position: [2, 2, 8], fov: 75 }}>
   <AsciiRenderer />
        
        {/* Remove ALL other lights. Only use this one strong DirectionalLight */}
        <directionalLight position={[1, 1, 0]} intensity={3} />
        
        {/* This "Backlight" creates a sharp rim effect on the opposite side */}
        <pointLight position={[-5, -5, -2]} intensity={1.5} color="#ffffff" />
        
        <Sphere />
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


