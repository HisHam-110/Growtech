import React from 'react';
import { Header } from '../Header/Header';
import questionImg from '../../assets/images/000000 1.png';
import { Interactive3DVisual } from '../common/Interactive3DVisual';
import styles from './About.module.css';

const GRID_COLUMNS_COUNT = 23;

export const AboutHero = ({ onNavigate }) => {
  return (
    <section className={styles.aboutHeroContainer}>
      {/* Background Overlay with 23 Grid Columns & Ambient Glows */}
      <div className={styles.backgroundLayer} aria-hidden="true">
        <div className={styles.gridOverlay}>
          {Array.from({ length: GRID_COLUMNS_COUNT }).map((_, index) => (
            <div key={index} className={styles.gridColumn} />
          ))}
        </div>
        <div className={styles.ellipseLeft} />
        <div className={styles.ellipseRight} />
      </div>

      {/* Top Header Navigation with active 'من نحن' */}
      <Header activePage="من نحن" onNavigate={onNavigate} />

      {/* Center Hero Content */}
      <div className={styles.contentWrapper}>
        <div className={styles.heroCard}>
          <div className={styles.visualContainer}>
            <Interactive3DVisual
              src={questionImg}
              alt="من نحن"
              width={175}
              height={175}
              maxTilt={20}
            />
          </div>
          <h1 className={styles.title}>من نحن</h1>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
