// src/AnimatedImage.js
import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { useLoader } from '@react-three/fiber';

function  AnimatedImage({ imageSrc }) {
  const meshRef = useRef();

  // State for hover effect
  const [isHovered, setIsHovered] = useState(false);

  // Load the image texture
  const texture = useLoader(TextureLoader, imageSrc);

  // Handle animation in each frame
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    // Hover effects: scale and rotation changes
    meshRef.current.scale.x = isHovered ? 2.1 : 2 + Math.sin(elapsedTime) * 0.05;
    meshRef.current.scale.y = isHovered ? 2.1 : 2 + Math.sin(elapsedTime) * 0.05;

    // Subtle rotation animation, increased on hover
    meshRef.current.rotation.y = Math.sin(elapsedTime) * (isHovered ? 0.2 : 0.1);
    meshRef.current.rotation.z = Math.cos(elapsedTime) * (isHovered ? 0.2 : 0.1);
  });

  return (
    <mesh
      ref={meshRef}
      onPointerOver={() => setIsHovered(true)}
      onPointerOut={() => setIsHovered(false)}
    >
      <planeGeometry args={[8, 8]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
}

export default AnimatedImage;
