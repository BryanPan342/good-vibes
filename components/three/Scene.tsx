import { Canvas } from '@react-three/fiber';
import React from 'react';
import styles from '../../styles/three/Scene.module.scss';

interface Props {
  children: React.ReactNode;
}

export default function Scene({children}: Props): JSX.Element {
  return (
    <div className={styles.scene}>
      <Canvas
        gl={{ logarithmicDepthBuffer: true }}
        shadows
        camera={{ position: [-12, 0, 5], fov: 25 }}
        className={styles.canvas}
      >
        {children}
      </Canvas>
    </div>
  );
}
