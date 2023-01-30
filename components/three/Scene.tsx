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
        shadows={true}
        className={styles.canvas}
        camera={{
          position: [-6, 7, 7],
        }}
      >
        {children}
      </Canvas>
    </div>
  );
}
