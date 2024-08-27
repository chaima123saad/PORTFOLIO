import React, { useRef } from 'react';
import { Environment } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { Desk } from "./Desk";
import { Keyboard } from "./Portal_keyboard";
import { Chaise } from './Chaise';
import { Carpet } from './Carpet';
import { Computer } from './Computer';

export const Experience = (props) => {
  const { section } = props;

  return (
    <>
      {/* Set the environment to sunset */}
      <Environment preset="sunset" />

      {/* Group of 3D objects */}
      <group>
        {/* Avatar animation based on the 'section' prop */}
        <Avatar />
        
        {/* Other scene elements */}
        <Chaise />
        <Desk />
        <Carpet />
        <Keyboard />
        <Computer />
      </group>
    </>
  );
};
