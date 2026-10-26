import React from 'react';
import styles from './Portfolio.module.css';

// Mockup image imports
import midnightImg from '../../assets/images/Midnight.png';
import perfumeImg from '../../assets/images/image 137.png';
import blackPhonesImg from '../../assets/images/Black.png';
import iphoneImg from '../../assets/images/iPhone 16 Pro.png';

export const PortfolioSection = ({ onNavigate }) => {
  const handleClick = () => {
    if (onNavigate) {
      onNavigate('portfolio');
    }
  };

  // Left Column (scrolling DOWN)
  const colLeftProjects = [
    { id: 'cl-1', title: 'رمز الشرق', type: 'blue', img: midnightImg, isLaptop: true },
    { id: 'cl-2', title: 'لوقيا', type: 'dark', img: blackPhonesImg, isPhones: true },
    { id: 'cl-3', title: 'رشة عطر', type: 'amber', img: perfumeImg, isPerfumeLaptop: true },
    { id: 'cl-4', title: 'رمز الشرق', type: 'blue', img: midnightImg, isLaptop: true },
  ];

  // Right Column (scrolling UP)
  const colRightProjects = [
    { id: 'cr-1', title: 'وحيد حسن', type: 'dark', img: iphoneImg, isPhoneSingle: true },
    { id: 'cr-2', title: 'رشة عطر', type: 'amber', img: perfumeImg, isPerfumeLaptop: true },
    { id: 'cr-3', title: 'رمز الشرق', type: 'blue', img: midnightImg, isLaptop: true },
    { id: 'cr-4', title: 'لوقيا', type: 'dark', img: blackPhonesImg, isPhones: true },
  ];

  const renderCard = (project, key) => (
    <div
      key={key}
      className={`${styles.projectCard} ${
        project.type === 'blue'
          ? styles.blueCard
          : project.type === 'amber'
          ? styles.amberCard
          : styles.darkCard
      }`}
      onClick={handleClick}
    >
      <div className={styles.cardGridBg} />
      <h3 className={styles.cardTitle}>{project.title}</h3>
      <div className={styles.mockupWrapper}>
        <img
          src={project.img}
          alt={project.title}
          className={
            project.isPerfumeLaptop
              ? styles.mockupImgPerfume
              : project.isLaptop
              ? styles.mockupImgLaptop
              : project.isPhones
              ? styles.mockupImgPhones
              : styles.mockupImgPhoneSingle
          }
        />
      </div>
    </div>
  );

  return (
    <section id="portfolio" className={styles.portfolioSection} dir="rtl">
      {/* Background ambient lighting */}
      <div className={styles.glowOverlay} />

      <div className={styles.container}>
        <div className={styles.layoutGrid}>
          {/* Right Side (in RTL): Text Content & CTA Button */}
          <div className={styles.contentCol}>
            <h2 className={styles.mainTitle}>أعمالنا</h2>
            <p className={styles.mainDescription}>
              لا نكتفي ببناء منتجات تعمل، بل نركز على إنشاء حلول رقمية تحقق قيمة حقيقية لأعمالك وتستمر في النمو معك.
            </p>

            <button
              type="button"
              className={styles.ctaButton}
              onClick={handleClick}
            >
              <span className={styles.ctaText}>عرض المزيد</span>
              <div className={styles.iconCircle}>
                <svg
                  width="18"
                  height="18"
                  viewBox="10 10 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.6503 23C14.6503 23 14.1076 16.0617 15.0846 15.0846C16.0617 14.1076 23 14.6504 23 14.6504M15.5 15.5L25.5 25.5"
                    stroke="#FFFFFF"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </button>
          </div>

          {/* Left Side (in RTL): Infinite Tilted Marquee Columns */}
          <div className={styles.visualCol}>
            <div className={styles.backdropBlurGlow} aria-hidden="true" />
            <div className={styles.tiltedContainer}>
              {/* Right Column (in RTL first child) - Shifted lower */}
              <div className={`${styles.columnWrapper} ${styles.columnWrapperRight}`}>
                <div className={styles.cardsColumnUp}>
                  {colRightProjects.map((p, i) => renderCard(p, `cr-a-${i}`))}
                  {colRightProjects.map((p, i) => renderCard(p, `cr-b-${i}`))}
                </div>
              </div>

              {/* Left Column (in RTL second child) - Shifted higher / above */}
              <div className={`${styles.columnWrapper} ${styles.columnWrapperLeft}`}>
                <div className={styles.cardsColumnDown}>
                  {colLeftProjects.map((p, i) => renderCard(p, `cl-a-${i}`))}
                  {colLeftProjects.map((p, i) => renderCard(p, `cl-b-${i}`))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
