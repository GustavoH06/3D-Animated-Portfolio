import { useGLTF } from '@react-three/drei'

export function Lion(props) {
  const { nodes, materials } = useGLTF('/lion.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Model_1.geometry} material={materials.material0} position={[0, 0, 0.458]} rotation={[-1.542, 0, -1.658]} />
      </group>
    </group>
  )
}

useGLTF.preload('/lion.glb')
