import { useGLTF, Stage, OrbitControls, Environment } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import React from 'react';
import Layout from '../components/Layout';
import Floor from '../components/three/Floor';
import Scene from '../components/three/Scene';


export default function Home(): JSX.Element {
  return (
    <Layout>
      <Scene>
        <fog attach="fog" args={['black', 15, 21.5]} />
        <Stage
          intensity={0.5}
          environment="city"
          shadows={{ type: 'accumulative', bias: -0.001 }}
          adjustCamera={false}>
          <FloatStatue />
        </Stage>
        <Floor />
        <OrbitControls
          autoRotate
          autoRotateSpeed={0.05}
          enableZoom={false}
          makeDefault
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2} />
        {/* <EffectComposer disableNormalPass>
          <Bloom luminanceThreshold={1} mipmapBlur />
        </EffectComposer> */}
        <Environment background preset="forest" blur={0.8} />
      </Scene>
    </Layout>
  );
}

function FloatStatue(props) {
  const glb = useGLTF('/float.glb');
  const {nodes, materials} = glb;
  return (
    <group {...props} position={[0, 0, 0]}>
      <mesh
        castShadow
        receiveShadow
        {...nodes.body}
        material={materials.body} />
      <mesh
        castShadow
        receiveShadow
        {...nodes.head}
        material={materials.head} />
      <mesh
        castShadow
        receiveShadow
        {...nodes.earphone}
        material={materials.earphone} />
      <mesh
        castShadow
        receiveShadow
        {...nodes.mask}
        material={materials.mask} />
    </group>
  );
}

useGLTF.preload('/float.glb');
