import { AsciiEffect } from '../effects/AsciiEffect';
import { useRef, useEffect } from 'react'
import {  useFrame, useThree } from '@react-three/fiber'

function AsciiRenderer() {
  const { gl, scene, camera, size } = useThree();
  const effectRef = useRef<AsciiEffect>(null);

  useEffect(() => {
    const effect = new AsciiEffect(gl, ' .\'`^",:;Il!i~+_-?][}{1)(|/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$', { invert: false, resolution: 0.15 });

    effectRef.current = effect;
    
    gl.domElement.style.display = 'none';
    gl.domElement.parentNode?.appendChild(effect.domElement);
    effect.setSize(size.width, size.height);

    return () => {
      effect.domElement.parentNode?.removeChild(effect.domElement);
      gl.domElement.style.display = '';
    };
  }, [gl, size.width, size.height]);

  useEffect(() => {
    if (effectRef.current) {
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

export default AsciiRenderer;