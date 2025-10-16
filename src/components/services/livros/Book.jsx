import { useGLTF } from '@react-three/drei'

export function Book(props) {
  const { nodes, materials } = useGLTF('/book.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.defaultMaterial.geometry} material={materials.BookMat_1} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
          <mesh geometry={nodes.defaultMaterial_1.geometry} material={materials.BookMat_1} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
          <mesh geometry={nodes.defaultMaterial_2.geometry} material={materials.BookMat_1} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
          <mesh geometry={nodes.defaultMaterial_3.geometry} material={materials.BookMat_1} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
          <mesh geometry={nodes.defaultMaterial_4.geometry} material={materials.BookMat_1} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
          <mesh geometry={nodes.defaultMaterial_5.geometry} material={materials.BookMat_1} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/book.glb')
