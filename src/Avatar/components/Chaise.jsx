
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Chaise(props) {
  const { nodes, materials } = useGLTF('models/chaise.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01} position={[2.3,-1,0]} rotation-x={-Math.PI / 9} rotation-y={-Math.PI / 1.5}>
        <mesh geometry={nodes['chair_Material_#25_0'].geometry} material={materials.Material_25} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={125} />
      </group>
    </group>
  )
}

useGLTF.preload('models/chaise.glb')
