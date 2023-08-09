
import React, { useContext } from 'react';
import { useGLTF } from '@react-three/drei';
import { positionsContext } from '../components/context';

export function BishopModel(props) {
  const { nodes, materials } = useGLTF('/bishop.gltf');
  const data = useContext(positionsContext);
  
  return (
    <group {...props} dispose={null} onClick={() => {if (props.name) {
      data.setOnPiece({piece: props.name, name: 'b'});
    }
    }}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0.02, 0, 0]} scale={280}>
            <mesh geometry={nodes.Object_6.geometry} material={props.color === 'white' ? materials.White_Square : materials.Black_Square} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/bishop.gltf')
