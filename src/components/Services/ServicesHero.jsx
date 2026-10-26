import React from 'react';
import { Header } from '../Header/Header';
import keysImg from '../../assets/images/Pixel Text Set - Copy - Copy-Keys@2x 2.png';
import { Interactive3DVisual } from '../common/Interactive3DVisual';
import styles from './ServicesHero.module.css';

const GRID_COLUMNS_COUNT = 23;

export const ServicesHero = ({ onNavigate }) => {
  return (
    <section className={styles.servicesHeroContainer}>
      {/* Background Layer with 23 Grid Columns & Ambient Glows */}
      <div className={styles.backgroundLayer} aria-hidden="true">
        <div className={styles.gridOverlay}>
          {Array.from({ length: GRID_COLUMNS_COUNT }).map((_, index) => (
            <div key={index} className={styles.gridColumn} />
          ))}
        </div>
        <div className={styles.ellipseLeft} />
        <div className={styles.ellipseRight} />
      </div>

      {/* Top Header Navigation with active 'الخدمات' */}
      <Header activePage="الخدمات" onNavigate={onNavigate} />

      {/* Hero Content: Right Text & CTA, Left 3D Keycap Art */}
      <div className={styles.contentWrapper}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            {/* Right Column: Title, Subtitle, CTA Button */}
            <div className={styles.heroTextCol}>
              <h1 className={styles.heroTitle}>
                {'حلول رقمية مصممة لتنمو'}
                <br />
                {'مع أعمالك'}
              </h1>
              <p className={styles.heroSubtitle}>
                من تصميم التجارب الرقمية إلى تطوير الأنظمة والتطبيقات، نبني حلولاً متكاملة تساعد أعمالك على النمو والتطور.
              </p>

              <div className={styles.ctaWrapper}>
                <button
                  className={styles.ctaButton}
                  onClick={() => onNavigate && onNavigate('contact')}
                >
                  <span className={styles.ctaText}>إبدأ مشروعك الان</span>
                  <div className={styles.ctaIconCircle}>
                    <svg
                      width="20"
                      height="20"
                      viewBox="10 10 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.6503 23C14.6503 23 14.1076 16.0617 15.0846 15.0846C16.0617 14.1076 23 14.6504 23 14.6504M15.5 15.5L25.5 25.5"
                        stroke="#062E88"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            </div>

            {/* Left Column: 3D Keyboard Keys Image */}
            <div className={styles.heroImageCol}>
              <div className={styles.visualContainer}>
                <Interactive3DVisual
                  src={keysImg}
                  alt="حلول رقمية مبتكرة"
                  width={380}
                  height={280}
                  maxTilt={16}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
