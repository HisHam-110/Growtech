import React from 'react';
import styles from './PortfolioGrid.module.css';

// Newly downloaded high-resolution project mockup images
import eastCoverImg from "../../assets/images/cover ' 1.png";
import perfumeCoverImg from '../../assets/images/image 138.png';
import foodAppCoverImg from '../../assets/images/image 139.png';

export const PortfolioGridSection = ({ onNavigate }) => {
  const projects = [
    {
      id: 'east-symbol',
      title: 'رمز الشرق',
      description:
        'نقدّم حلولاً متكاملة ومنتجات عالية الجودة لدعم صحة خيولك وراحتها، بخبرة متخصصة وشراكات مع أبرز العلامات العالمية.',
      image: eastCoverImg,
      alt: 'مشروع رمز الشرق',
    },
    {
      id: 'perfume-spray',
      title: 'رشة عطر',
      description:
        'نقدّم حلولاً متكاملة ومنتجات عالية الجودة لدعم صحة خيولك وراحتها، بخبرة متخصصة وشراكات مع أبرز العلامات العالمية.',
      image: perfumeCoverImg,
      alt: 'مشروع رشة عطر',
    },
    {
      id: 'food-app',
      title: 'مطعمنا',
      description:
        'نقدّم حلولاً متكاملة ومنتجات عالية الجودة لدعم صحة خيولك وراحتها، بخبرة متخصصة وشراكات مع أبرز العلامات العالمية.',
      image: foodAppCoverImg,
      alt: 'مشروع مطعمنا',
    },
  ];

  const handleProjectClick = (projectId) => {
    if (onNavigate) {
      onNavigate('project-details', projectId);
    }
  };

  const handleViewAllClick = () => {
    if (onNavigate) {
      onNavigate('all-projects');
    }
  };

  return (
    <section className={styles.portfolioGridSection} dir="rtl">
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <div className={styles.badgeWrapper}>
            <span className={styles.badge}>سابقة أعمالنا</span>
          </div>
          <h2 className={styles.title}>أعمال نفخر ببنائها</h2>
          <p className={styles.subtitle}>
            نستعرض مجموعة من المشاريع التي حوّلنا فيها الأفكار والتحديات إلى حلول رقمية تجمع بين التصميم، التقنية، وتجربة مستخدم فعّالة.
          </p>
        </div>

        {/* 3-Card Grid */}
        <div className={styles.cardsGrid}>
          {projects.map((project) => (
            <div key={project.id} className={styles.card}>
              <div className={styles.imageContainer}>
                <img
                  src={project.image}
                  alt={project.alt}
                  className={styles.projectImage}
                />
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>
                  {project.description}
                </p>

                <button
                  type="button"
                  className={styles.detailsBtn}
                  onClick={() => handleProjectClick(project.id)}
                >
                  <span className={styles.detailsBtnText}>تفاصيل المشروع</span>
                  <div className={styles.iconCircle}>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17 17L7 7M7 7H15M7 7V15"
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
          ))}
        </div>

        {/* Bottom CTA Button: عرض الكل */}
        <div className={styles.bottomCtaWrapper}>
          <button
            type="button"
            className={styles.viewAllBtn}
            onClick={handleViewAllClick}
          >
            <span className={styles.viewAllText}>عرض الكل</span>
            <div className={styles.viewAllIconCircle}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 12H5M5 12L12 19M5 12L12 5"
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
    </section>
  );
};

export default PortfolioGridSection;
