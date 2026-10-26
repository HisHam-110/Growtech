import React from 'react';
import { Header } from '../Header/Header';
import { CtaSection } from '../Cta/CtaSection';
import { Footer } from '../Footer/Footer';
import { getProjectById } from '../../data/projectsData';
import { NotFoundPage } from '../NotFound/NotFoundPage';
import styles from './ProjectDetailsPage.module.css';

export const ProjectDetailsPage = ({ projectId = 'east-symbol', onNavigate }) => {
  const project = getProjectById(projectId);

  if (!project) {
    return <NotFoundPage onNavigate={onNavigate} />;
  }

  return (
    <div className={styles.detailsPageRoot}>
      {/* Delicate Tech Mesh & Ambient Floating Aurora Orbs */}
      <div className={styles.techMeshOverlay} aria-hidden="true" />
      <div className={styles.auroraOrb1} aria-hidden="true" />
      <div className={styles.auroraOrb2} aria-hidden="true" />
      <div className={styles.auroraOrb3} aria-hidden="true" />
      <div className={styles.auroraOrb4} aria-hidden="true" />

      {/* Top Header Navbar */}
      <Header activePage="أعمالنا" onNavigate={onNavigate} />

      {/* Main Details Section */}
      <main className={styles.mainContent}>
        <div className={styles.container}>
          {/* Centered Breadcrumb, Title & Subtitle */}
          <div className={styles.headerBlock}>
            <div className={styles.breadcrumb} aria-label="مسار التنقل">
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
                className={styles.breadcrumbLink}
                onClick={() => onNavigate && onNavigate('all-projects')}
              >
                {project.categoryLabel || 'أعمالنا'}
              </button>
            </div>

            <h1 className={styles.projectTitle}>{project.title}</h1>
            <p className={styles.projectSubtitle}>{project.subtitle || project.description}</p>
          </div>

          {/* Featured High-Res Mockup Image Box */}
          <div className={styles.mockupBox}>
            <img
              src={project.image}
              alt={project.alt || project.title}
              className={styles.mockupImage}
              loading="lazy"
            />
          </div>

          {/* Three Detailed Content Cards */}
          <div className={styles.cardsStack}>
            {/* Card 1: نظرة عامة عن المشروع */}
            <article className={styles.contentCard}>
              <div className={styles.cardHeader}>
                <div className={styles.cardIconBox}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="16" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12.01" y2="8" />
                  </svg>
                </div>
                <h2 className={styles.cardHeading}>نظرة عامة عن المشروع</h2>
              </div>
              {project.overview.map((para, idx) => (
                <p key={idx} className={styles.cardParagraph}>
                  {para}
                </p>
              ))}
            </article>

            {/* Card 2: التحدي */}
            <article className={styles.contentCard}>
              <div className={styles.cardHeader}>
                <div className={`${styles.cardIconBox} ${styles.cardIconChallenge}`}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                </div>
                <h2 className={styles.cardHeading}>التحدي</h2>
              </div>
              {project.challenge.paragraphs.map((para, idx) => (
                <p key={idx} className={styles.cardParagraph}>
                  {para}
                </p>
              ))}
              {project.challenge.points && project.challenge.points.length > 0 && (
                <>
                  <h3 className={styles.pointsSubtitle}>{project.challenge.pointsTitle || 'أبرز التحديات:'}</h3>
                  <ul className={styles.pointsList}>
                    {project.challenge.points.map((point, idx) => (
                      <li key={idx} className={styles.pointItem}>
                        <span className={styles.pointCheck}>✓</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </article>

            {/* Card 3: الحل */}
            <article className={styles.contentCard}>
              <div className={styles.cardHeader}>
                <div className={`${styles.cardIconBox} ${styles.cardIconSolution}`}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <h2 className={styles.cardHeading}>الحل</h2>
              </div>
              {project.solution.paragraphs.map((para, idx) => (
                <p key={idx} className={styles.cardParagraph}>
                  {para}
                </p>
              ))}
              {project.solution.points && project.solution.points.length > 0 && (
                <>
                  <h3 className={styles.pointsSubtitle}>{project.solution.pointsTitle || 'ركز الحل على:'}</h3>
                  <ul className={styles.pointsList}>
                    {project.solution.points.map((point, idx) => (
                      <li key={idx} className={styles.pointItem}>
                        <span className={styles.pointCheck}>✓</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </article>
          </div>
        </div>
      </main>

      {/* Bottom CTA Banner */}
      <CtaSection />

      {/* Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default ProjectDetailsPage;
