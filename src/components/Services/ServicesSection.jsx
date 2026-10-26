import React from 'react';
import styles from './Services.module.css';
import uiUxImg from '../../assets/images/Performance metrics panel featuring gradient chart and navigation cursor arrow.png';
import webDevImg from '../../assets/images/Web design with interface elements.png';
import systemDevImg from '../../assets/images/Isometric coding and programming icon.png';
import flutterDevImg from '../../assets/images/Mobile app front end development.png';

const servicesData = [
  {
    id: 1,
    image: uiUxImg,
    title: 'تصميم UI/UX',
    description: 'نصمم تجارب رقمية بسيطة، واضحة ومصممة حول احتياجات المستخدم.',
  },
  {
    id: 2,
    image: webDevImg,
    title: 'تطوير الواجهات',
    description: 'نحول التصاميم إلى واجهات سريعة ومتجاوبة تعمل بسلاسة على مختلف الأجهزة.',
  },
  {
    id: 3,
    image: systemDevImg,
    title: 'تطوير الأنظمة',
    description: 'نبني أنظمة قوية وقابلة للتوسع تدعم منتجاتك وتواكب نمو أعمالك.',
  },
  {
    id: 4,
    image: flutterDevImg,
    title: 'تطوير تطبيقات Flutter',
    description: 'نطور تطبيقات موبايل عالية الأداء لنظامي iOS وAndroid.',
  },
];

export const ServicesSection = ({ onNavigate }) => {
  return (
    <section id="services" className={styles.servicesSection}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.headerRight}>
            <h2 className={styles.mainTitle}>خدماتنا</h2>
            <p className={styles.mainSubtitle}>
              نصمم تجارب رقمية بسيطة، واضحة ومصممة حول احتياجات المستخدم.
            </p>
          </div>

          <button
            type="button"
            className={styles.moreLink}
            onClick={() => onNavigate && onNavigate('services')}
          >
            <span>معرفة المزيد</span>
            <svg
              className={styles.arrowIcon}
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </button>
        </div>

        {/* 4 Cards Grid */}
        <div className={styles.cardsGrid}>
          {servicesData.map((item) => (
            <div key={item.id} className={styles.serviceCard}>
              {/* Top 3D Illustration Area */}
              <div className={styles.imageWrapper}>
                <img
                  src={item.image}
                  alt={item.title}
                  className={styles.cardImage}
                />
              </div>

              {/* Bottom Content Area */}
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
