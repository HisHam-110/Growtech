import React from 'react';
import { HeroBackground } from './HeroBackground';
import { Header } from '../Header/Header';
import styles from './Hero.module.css';

export const HeroSection = ({ onNavigate }) => {
  return (
    <section id="home" className={styles.heroContainer}>
      <HeroBackground />
      <Header activePage="الرئيسية" onNavigate={onNavigate} />

      <div className={styles.contentWrapper}>
        <div className={styles.contentBlock}>
          <h1 className={styles.heading}>
            {'من الفكرة إلى المنتج، نبني حلولك\nالرقميــة بالكـامــل'}
          </h1>

          <p className={styles.description}>
            نصمم ونطوّر تجارب ومنتجات رقمية متكاملة تساعد أعمالك على النمو والتطور.
          </p>

          <div className={styles.ctaWrapper}>
            <button 
              className={styles.ctaButton}
              onClick={() => onNavigate && onNavigate('contact')}
            >
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
              <span className={styles.ctaText}>تواصل معنا الآن</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
