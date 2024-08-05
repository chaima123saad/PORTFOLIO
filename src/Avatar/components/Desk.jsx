import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Desk(props) {
  const { nodes, materials } = useGLTF('models/desk.glb')
  return (
    <group {...props} dispose={null}>
      <group  position={[2.3, -1.05, 0]}  rotation-x={-Math.PI / -2.4} rotation-z={-Math.PI / 1.6}  >
        <mesh geometry={nodes.Woodbang_Touchey_coffee_table_Material__90_0.geometry} material={materials.Material__90} rotation={[-Math.PI, 0, 0]} scale={0.00250} />
      </group>
    </group>
  )
}

useGLTF.preload('models/desk.glb')

