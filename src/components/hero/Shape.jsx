import { Canvas } from "@react-three/fiber";

const Shape = () => {
  return (
    <section 
        style={{
            display:"flex", 
            alignItems:"center", 
            justifyContent:"center",
        }}
    >
        <Canvas>
            <mesh>
                <sphereGeometry/>
                <meshStandardMaterial/>
                <ambientLight={0.2}/>
            <mesh/>
        </Canvas>
    </section>
  )
}

export default Shape