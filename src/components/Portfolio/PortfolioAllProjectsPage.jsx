import React, { useState } from 'react';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { allProjects } from '../../data/projectsData';
import styles from './PortfolioAllProjects.module.css';

export const PortfolioAllProjectsPage = ({ onNavigate }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  // Dynamic filter counts
  const countAll = allProjects.length;
  const countWeb = allProjects.filter((p) => p.category === 'web').length;
  const countMobile = allProjects.filter((p) => p.category === 'mobile').length;

  // Filtered list
  const filteredProjects =
    activeFilter === 'all'
      ? allProjects
      : allProjects.filter((p) => p.category === activeFilter);

  const handleProjectDetailsClick = (projectId) => {
    if (onNavigate) {
      onNavigate('project-details', projectId);
    }
  };

  return (
    <div className={styles.pageRoot} dir="rtl">
      {/* Delicate Tech Mesh & Ambient Floating Aurora Orbs */}
      <div className={styles.techMeshOverlay} aria-hidden="true" />
      <div className={styles.auroraOrb1} aria-hidden="true" />
      <div className={styles.auroraOrb2} aria-hidden="true" />
      <div className={styles.auroraOrb3} aria-hidden="true" />

      {/* Header Navbar */}
      <Header activePage="أعمالنا" onNavigate={onNavigate} />

      {/* Main Content Section */}
      <main className={styles.mainSection}>
        <div className={styles.container}>
          {/* Breadcrumb */}
          <nav className={styles.breadcrumb} aria-label="مسار التنقل">
            <button
              type="button"
              className={styles.breadcrumbLink}
              onClick={() => onNavigate && onNavigate('home')}
            >
              الرئيسية
            </button>
            <span className={styles.breadcrumbDivider}>/</span>
            <button
              type="button"
              className={styles.breadcrumbActive}
              onClick={() => onNavigate && onNavigate('portfolio')}
            >
              أعمالنا
            </button>
          </nav>

          {/* Section Title & Subtitle */}
          <h1 className={styles.mainHeading}>أعمال نفخر ببنائها</h1>
          <p className={styles.subHeading}>
            نستعرض مشاريع حوّلنا فيها الأفكار والتحديات إلى حلول رقمية تجمع بين التصميم، التقنية، وتجربة المستخدم.
          </p>

          {/* Dynamic Filter Pills */}
          <div className={styles.filterPillsContainer}>
            <div className={styles.filterPillsWrapper}>
              <button
                type="button"
                className={`${styles.filterPill} ${
                  activeFilter === 'all' ? styles.filterPillActive : ''
                }`}
                onClick={() => setActiveFilter('all')}
              >
                الكل({countAll})
              </button>

              <button
                type="button"
                className={`${styles.filterPill} ${
                  activeFilter === 'web' ? styles.filterPillActive : ''
                }`}
                onClick={() => setActiveFilter('web')}
              >
                مواقع الويب ({countWeb})
              </button>

              <button
                type="button"
                className={`${styles.filterPill} ${
                  activeFilter === 'mobile' ? styles.filterPillActive : ''
                }`}
                onClick={() => setActiveFilter('mobile')}
              >
                تطبيقات موبايل ({countMobile})
              </button>
            </div>
          </div>

          {/* 2-Column Responsive Grid */}
          <div className={styles.projectsGrid}>
            {filteredProjects.map((project) => (
              <article key={project.id} className={styles.projectCard}>
                {/* Mockup Image Container */}
                <div className={styles.imageContainer}>
                  <img
                    src={project.image}
                    alt={project.alt}
                    className={styles.projectImage}
                    loading="lazy"
                  />
                </div>

                {/* Project Info */}
                <div className={styles.cardContent}>
                  <h2 className={styles.projectTitle}>{project.title}</h2>
                  <p className={styles.projectDescription}>
                    {project.description}
                  </p>

                  <div className={styles.cardFooter}>
                    <button
                      type="button"
                      className={styles.detailsBtn}
                      onClick={() => handleProjectDetailsClick(project.id)}
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
              </article>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default PortfolioAllProjectsPage;
