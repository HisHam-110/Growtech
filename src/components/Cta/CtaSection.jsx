import React from 'react';
import styles from './CtaSection.module.css';
import handImg from '../../assets/images/image 134.svg';
import patternBg from '../../assets/images/Group.svg';

export const CtaSection = () => {
  return (
    <section className={styles.ctaSectionWrapper}>
      <div className={styles.container}>
        <div className={styles.bannerCard}>
          {/* Background Geometric Grid Pattern */}
          <div className={styles.patternOverlay}>
            <img 
              src={patternBg} 
              alt="Pattern background" 
              className={styles.patternImg} 
            />
          </div>

          {/* Left Side: Hand holding Growtech card - protruding above top border */}
          <div className={styles.handImageWrapper}>
            <img
              src={handImg}
              alt="Growtech Hand"
              className={styles.handImg}
            />
          </div>

          {/* Right Side: Arabic Content & CTA */}
          <div className={styles.contentWrapper} dir="rtl">
            <h2 className={styles.title}>
              شريكك التكنولوجي للنجاح والريادة.
            </h2>
            
            <p className={styles.description}>
              من التخطيط الأولي إلى الإطلاق، نضع بين يديك أحدث التقنيات البرمجية لنضمن تفوق شركتك في صدارة المنافسة.
            </p>

            <a href="#services" className={styles.ctaBtn}>
              <span className={styles.btnText}>اكتشف مجموعاتنا</span>
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
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
