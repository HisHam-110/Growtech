import React from 'react';
import styles from './ProjectStages.module.css';

const STAGES = [
  {
    id: 1,
    label: 'لديك فكرة',
    cardClass: styles.cardBlue,
    tiltClass: styles.tilt1,
  },
  {
    id: 2,
    label: 'تعمل على منتج قائم',
    cardClass: styles.cardWhite,
    tiltClass: styles.tilt2,
  },
  {
    id: 3,
    label: 'تريد تحسين منتجك',
    cardClass: styles.cardOrange,
    tiltClass: styles.tilt3,
  },
  {
    id: 4,
    label: 'تستعد للنمو',
    cardClass: styles.cardWhite,
    tiltClass: styles.tilt4,
  },
];

export const ProjectStagesSection = ({ onNavigate }) => {
  return (
    <section className={styles.stagesSection}>
      <div className={styles.container}>
        <div className={styles.stagesGrid}>
          {/* Right Column: Title, Subtitle, and Contact CTA */}
          <div className={styles.contentCol}>
            <h2 className={styles.mainTitle}>
              {'مهما كانت مرحلة مشروعك،'}
              <br />
              <span className={styles.bluePill}>نحن هنا</span>
              {' لنساعدك.'}
            </h2>

            <p className={styles.description}>
              نصمم تجارب رقمية بسيطة، واضحة ومصممة حول احتياجات المستخدم. نحرص على تقديم حلول مخصصة تخدم أهدافك وتساعد في تطوير وتوسيع منتجك الرقمي بأفضل المعايير التقنية والتصميمية.
            </p>

            <div className={styles.ctaWrapper}>
              <button
                className={styles.ctaButton}
                onClick={() => onNavigate && onNavigate('contact')}
              >
                <span className={styles.ctaText}>تواصل معنا الآن</span>
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

          {/* Left Column: 4 Tilted / Stacked Stage Cards */}
          <div className={styles.cardsCol}>
            <div className={styles.cardsStack}>
              {STAGES.map((stage) => (
                <div
                  key={stage.id}
                  className={`${styles.stageCard} ${stage.cardClass} ${stage.tiltClass}`}
                  onClick={() => onNavigate && onNavigate('contact')}
                >
                  <span className={styles.stageLabel}>{stage.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectStagesSection;
