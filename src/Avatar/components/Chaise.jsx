import React, { useRef, useState, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';

export function Chaise(props) {
  const { nodes, materials } = useGLTF('models/chaise.glb');
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
      if (scrollY > 100 || window.innerWidth < 900) { // You can adjust this threshold as needed
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
      <group {...props} dispose={null}>
        <group scale={0.01} position={[2,-0.9,0]} rotation-x={-Math.PI / 9} rotation-y={-Math.PI / 1.5}>
          <mesh geometry={nodes['chair_Material_#25_0'].geometry} material={materials.Material_25} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={125} />
        </group>
      </group>
    )
  );
}

useGLTF.preload('models/chaise.glb');

