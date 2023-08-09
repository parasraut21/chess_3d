
import React, { useContext } from 'react';
import { useGLTF } from '@react-three/drei';
import { positionsContext } from '../components/context';

export function KingModel(props) {
  const { nodes, materials } = useGLTF('/king.gltf');
  const data = useContext(positionsContext);
  
  return (
    <group {...props} dispose={null} onClick={() => {if (props.name) {
      data.setOnPiece({piece: props.name, name: 'k'});
    }
    }}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0.02, 0, 0]} scale={300}>
            <mesh geometry={nodes.Object_4.geometry} material={props.color === 'white' ? materials.White_Square : materials.Black_Square} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/king.gltf')
