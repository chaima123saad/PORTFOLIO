import React, { useRef, useState, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';

export function Desk(props) {
  const { nodes, materials } = useGLTF('models/desk.glb');
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // You can adjust the scroll threshold to control when the desk disappears
      if (scrollPosition > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    isVisible && (
      <group {...props} dispose={null}>
        <group position={[2.3, -1.05, 0]} rotation-x={-Math.PI / -2.4} rotation-z={-Math.PI / 1.6}>
          <mesh
            geometry={nodes.Woodbang_Touchey_coffee_table_Material__90_0.geometry}
            material={materials.Material__90}
            rotation={[-Math.PI, 0, 0]}
            scale={0.00250}
          />
        </group>
      </group>
    )
  );
}

useGLTF.preload('models/desk.glb');


