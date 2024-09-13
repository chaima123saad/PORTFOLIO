import React, { useRef, useEffect, useState } from 'react';
import { useAnimations, useGLTF, useFBX } from '@react-three/drei';

export function Avatar(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("models/6655b059dd37bca36d7b1695.glb");

  const typingFBX = useFBX("animations/Typing.fbx");
  const animations = [];

  if (typingFBX?.animations?.[0]) {
    typingFBX.animations[0].name = "Typing";
    animations.push(typingFBX.animations[0]);
  }

  const { actions } = useAnimations(animations, group);
  const [isVisible, setIsVisible] = useState(true);
  const [currentAnimation, setCurrentAnimation] = useState("Typing");
  useEffect(() => {
    const handleResize = () => {
      // Check if the screen width is less than 900px
      if (window.innerWidth < 900) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
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
      const scrollPosition = window.scrollY;
      
      // Set visibility based on scroll position
      if (scrollPosition > 80 || window.innerWidth < 900) {
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

  useEffect(() => {
    if (actions[currentAnimation]) {
      actions[currentAnimation].reset().play();
    }
  }, [currentAnimation, actions]);

  return (
    <group 
      {...props} 
      ref={group} 
      dispose={null} 
      scale={[0.9, 1.415, 1.5]} 
      position={[2, -0.91, 0.1]} 
      visible={isVisible} // Toggle visibility
    >
      <group rotation-x={-Math.PI / 1.7} rotation-z={-Math.PI / 3} rotation-y={-Math.PI / 30}>
        <primitive object={nodes.Hips} />
        <skinnedMesh
          name="EyeLeft"
          geometry={nodes.EyeLeft.geometry}
          material={materials.Wolf3D_Eye}
          skeleton={nodes.EyeLeft.skeleton}
          morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
        />
        <skinnedMesh
          name="EyeRight"
          geometry={nodes.EyeRight.geometry}
          material={materials.Wolf3D_Eye}
          skeleton={nodes.EyeRight.skeleton}
          morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
        />
        <skinnedMesh
          name="Wolf3D_Head"
          geometry={nodes.Wolf3D_Head.geometry}
          material={materials.Wolf3D_Skin}
          skeleton={nodes.Wolf3D_Head.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
        />
        <skinnedMesh
          name="Wolf3D_Teeth"
          geometry={nodes.Wolf3D_Teeth.geometry}
          material={materials.Wolf3D_Teeth}
          skeleton={nodes.Wolf3D_Teeth.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Hair.geometry}
          material={materials.Wolf3D_Hair}
          skeleton={nodes.Wolf3D_Hair.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Glasses.geometry}
          material={materials.Wolf3D_Glasses}
          skeleton={nodes.Wolf3D_Glasses.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Body.geometry}
          material={materials.Wolf3D_Body}
          skeleton={nodes.Wolf3D_Body.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
          material={materials.Wolf3D_Outfit_Bottom}
          skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
          material={materials.Wolf3D_Outfit_Footwear}
          skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Top.geometry}
          material={materials.Wolf3D_Outfit_Top}
          skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
        />
      </group>
    </group>
  );
}

useGLTF.preload('models/6655b059dd37bca36d7b1695.glb');
