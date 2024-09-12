import React, { useRef, useState, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';

export function Keyboard(props) {
  const { nodes, materials } = useGLTF('models/portal_keyboard.glb');
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      // Check if the screen width is less than 900px
      if (window.innerWidth < 900) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };

    // Call the function initially to set the visibility based on the initial screen size
    handleResize();

    // Add event listener to handle screen resizing
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 100) { // Adjust this threshold as needed
        setVisible(false);
      } else {
        setVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    visible && (
      <group {...props} dispose={null} position={[1.6,-0.02,0]} rotation-x={-Math.PI / 1.71} rotation-z={[-Math.PI / 0.73]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.acmat_0} scale={0.045} />
      </group>
    )
  );
}

useGLTF.preload('models/portal_keyboard.glb');

