import { Grid } from '@react-three/drei';
import React from 'react';

export default function Floor():JSX.Element {
  return (
    <Grid
      position={[0, -1.85, 0]}
      infiniteGrid
      cellSize={0.6}
      cellThickness={0.6}
      sectionSize={3.3}
      sectionThickness={1.5}
      sectionColor={[0.5, 0.5, 10]}
      fadeDistance={30} />
  );
}
