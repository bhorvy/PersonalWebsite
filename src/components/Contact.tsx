import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../App.css';
import  AsciiRenderer from './AsciiRenderer';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber'

function Capsule1() {
  const meshRef = useRef<THREE.Mesh>(null!);
  useFrame(() => {
    const timer = Date.now();
    meshRef.current.rotation.x = timer * 0.0002;
    meshRef.current.rotation.z = timer * 0.0002;
  });

  return (
    <mesh ref={meshRef} position={[-300, 0, 0]}>
      <capsuleGeometry args={[60, 60, 15, 25, 2]}/>
      <meshPhongMaterial
        flatShading={true}
        color={"0xcccccc"}
        shininess={100}
      />
    </mesh>
  );
}

function Capsule2() {
  const meshRef = useRef<THREE.Mesh>(null!);
  useFrame(() => {
    const timer = Date.now();
    meshRef.current.rotation.x = timer * -0.0002;
    meshRef.current.rotation.z = timer * -0.0002;
  });

  return (
    <mesh ref={meshRef} position={[250, 0, 0]}>
      <capsuleGeometry args={[60, 60, 15, 25, 2]}/>
      <meshPhongMaterial
        flatShading={true}
        color={"0xcccccc"}
        shininess={100}
      />
    </mesh>
  );
}

function Contact() {

  const form = useRef(null!);
  let [name, setName] = useState("")
  let [email, setEmail] = useState("")
  let [message, setMessage] = useState("")

  const sendEmail = (e : any) => {
  e.preventDefault();

  setName("")
  setEmail("")
  setMessage("")

  emailjs
      .sendForm(process.env.REACT_APP_EMAIL_SERVICE_ID || '', process.env.REACT_APP_EMAIL_TEMPLATE_ID || '', form.current, {
        publicKey: process.env.REACT_APP_EMAIL_KEY || '',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error : any) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div style={{ width: '100%', height: '80vh', overflow: 'hidden' }}> 
      <Canvas camera={{ position: [0, 150, 200], fov: 70 }}   style={{ width: '100%', height: '100%' }}>
             
        <AsciiRenderer /> 
        
        <directionalLight position={[5, 5, 5]} intensity={2} />
        <directionalLight position={[-5, -5, -5]} intensity={3} />
  
        <Capsule1 />
        <Capsule2 />

      </Canvas>
  <div className="subpage-div">    
    <form ref={form} onSubmit={sendEmail}>
         <div className="d-flex flex-column div-style-3" style={{ minWidth: '70vh' }}>
          <div  className="m-3">
            <h2 className='mb-3 text-center' data-usal="text-fluid split-letter duration-1750 split-delay-75">Contact Me</h2>
            <label className="form-label"><b>Name:</b></label>
            <input value={name}  placeholder="Please Enter Your Name" className="form-control" onChange={e => setName(e.target.value)} type="text" name="name" />
            </div> 
            <div  className="m-3">
            <label  className="form-label"><b>Email:</b></label>
            <input type="email" placeholder="Please Enter Your Email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} name="email" />
            </div>
            <div  className="m-3">
            <label  className="form-label"><b>Message:</b></label>
            <textarea value={message}  placeholder="Please Enter Your Message" className="form-control" onChange={e => setMessage(e.target.value)} name="message" />
            </div>
            <button className="btn btn-dark btn-lg m-3" type="submit" value="Send" >Send</button>
         </div>
    </form>
  </div>
</div>
  );
}

export default Contact;
