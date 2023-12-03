import { useRef, useState } from 'react'
import { Suspense } from 'react'
import { Canvas, ThreeEvent } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { useLoader, useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import backEnviremnt from '../3dworldmodel/back222.jpg'

//@ts-ignore
import heroModel from '../3dworldmodel/222.glb'

interface Iprops {
  modelPath: string
  position: Array<number>
}
export const GltfModel = ({
  modelPath,
  position = [50, -220, -350]
}: Iprops) => {
  const ref = useRef<THREE.Mesh | null>(null)
  const gltf = useLoader(GLTFLoader, modelPath)
  const [hovered, hover] = useState(false)

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    if (ref.current) ref.current.rotation.y += 0.009
    if (hovered && ref.current) {
      ref.current.scale.y = 1.2
      ref.current.scale.x = 1.2
      ref.current.scale.z = 1.2
    } else {
      if (ref.current) {
        ref.current.scale.y = 1
        ref.current.scale.x = 1
        ref.current.scale.z = 1
      }
    }
  })

  return (
    <>
      <primitive
        ref={ref}
        object={gltf.scene}
        position={position}
        onPointerOver={(event: ThreeEvent<Event>) => hover(true)}
        onPointerOut={(event: ThreeEvent<Event>) => hover(false)}
      />
    </>
  )
}

const HeroModel = ({ modelPath = './world3d.glb', scale = 40 }) => {
  return (
    <div
      style={{
        height: '410px',
        cursor: 'grab',
        background:
          'linear-gradient(90deg, #2f0841 0%, rgba(101,9,121,1) 35%, #8400ff 100%)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        boxShadow: 'rgb(162 137 165) 0px 1px 13px 7px',
        borderRadius: '12px'
      }}
    >
      <Canvas>
        <ambientLight intensity={0.1} />

        <Suspense fallback={null}>
          <GltfModel modelPath={heroModel} position={[50, -220, -350]} />
          <OrbitControls />
          <Environment preset='sunset' files={backEnviremnt} />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default HeroModel
