import React from 'react';
import styles from './Hero.module.css';

const GRID_COLUMNS_COUNT = 23;

export const HeroBackground = () => {
  return (
    <div className={styles.backgroundLayer} aria-hidden="true">
      <div className={styles.gridOverlay}>
        {Array.from({ length: GRID_COLUMNS_COUNT }).map((_, index) => (
          <div key={index} className={styles.gridColumn} />
        ))}
      </div>
      <div className={styles.radialGlow} />
    </div>
  );
};
