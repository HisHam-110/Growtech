import React, { useEffect } from 'react';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import styles from './NotFoundPage.module.css';

export const NotFoundPage = ({ onNavigate }) => {
  useEffect(() => {
    document.title = '404 - الصفحة غير موجودة | Growtech';
    return () => {
      document.title = 'Growtech';
    };
  }, []);

  return (
    <div className={styles.pageRoot} dir="rtl">
      {/* Delicate Tech Mesh & Ambient Floating Aurora Orbs */}
      <div className={styles.techMeshOverlay} aria-hidden="true" />
      <div className={styles.auroraOrb1} aria-hidden="true" />
      <div className={styles.auroraOrb2} aria-hidden="true" />
      <div className={styles.auroraOrb3} aria-hidden="true" />

      {/* Header Navbar */}
      <Header activePage="" onNavigate={onNavigate} />

      {/* Main 404 Hero Section */}
      <main className={styles.mainContent}>
        <div className={styles.container}>
          {/* Badge Tag */}
          <div className={styles.badgeTag}>
            <span className={styles.badgeDot} />
            <span className={styles.badgeText}>خطأ 404 • الصفحة غير موجودة</span>
          </div>

          {/* Giant Number with Aura */}
          <div className={styles.numberWrapper}>
            <div className={styles.glowAura} aria-hidden="true" />
            <h1 className={styles.bigNumber}>404</h1>
          </div>

          {/* Title & Description */}
          <h2 className={styles.title}>عفواً، الصفحة التي تبحث عنها غير متوفرة</h2>
          <p className={styles.subtitle}>
            يبدو أن الرابط الذي حاولت الوصول إليه غير صحيح، أو ربما تم تغيير مساره أو حذفه. لا تقلق، يمكنك دائماً العودة للصفحة الرئيسية أو استكشاف خدماتنا ومشاريعنا.
          </p>

          {/* Action Buttons */}
          <div className={styles.actionsRow}>
            <button
              type="button"
              className={styles.primaryBtn}
              onClick={() => onNavigate && onNavigate('home')}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              <span>العودة للصفحة الرئيسية</span>
            </button>

            <button
              type="button"
              className={styles.secondaryBtn}
              onClick={() => onNavigate && onNavigate('all-projects')}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
              <span>استكشف أعمالنا</span>
            </button>
          </div>

          {/* Suggested Destinations Grid */}
          <div className={styles.suggestedSection}>
            <div className={styles.suggestedHeading}>
              <span>روابط قد تهمك</span>
            </div>

            <div className={styles.suggestedGrid}>
              {/* Card 1 */}
              <div
                className={styles.suggestedCard}
                onClick={() => onNavigate && onNavigate('all-projects')}
                role="button"
                tabIndex={0}
              >
                <div className={styles.cardIconBox}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 2 7 12 12 22 7 12 2" />
                    <polyline points="2 17 12 22 22 17" />
                    <polyline points="2 12 12 17 22 12" />
                  </svg>
                </div>
                <h3 className={styles.cardTitle}>معرض المشاريع</h3>
                <p className={styles.cardDesc}>تصفح أحدث التطبيقات والمواقع التقنية التي قمنا ببنائها.</p>
              </div>

              {/* Card 2 */}
              <div
                className={styles.suggestedCard}
                onClick={() => onNavigate && onNavigate('services')}
                role="button"
                tabIndex={0}
              >
                <div className={styles.cardIconBox}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                </div>
                <h3 className={styles.cardTitle}>خدماتنا البرمجية</h3>
                <p className={styles.cardDesc}>حلول UI/UX متكاملة وتطوير تطبيقات الهواتف والأنظمة السحابية.</p>
              </div>

              {/* Card 3 */}
              <div
                className={styles.suggestedCard}
                onClick={() => onNavigate && onNavigate('contact')}
                role="button"
                tabIndex={0}
              >
                <div className={styles.cardIconBox}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <h3 className={styles.cardTitle}>تواصل مع الفريق</h3>
                <p className={styles.cardDesc}>هل تبحث عن استشارة أو لديك فكرة مشروع؟ نسعد بالتحدث معك.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default NotFoundPage;
