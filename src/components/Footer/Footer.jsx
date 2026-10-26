import React from 'react';
import styles from './Footer.module.css';

export const Footer = ({ onNavigate }) => {
  return (
    <footer className={styles.footerSection} dir="rtl">
      <div className={styles.container}>
        <div className={styles.footerCard}>
          {/* Main 4-Column Grid */}
          <div className={styles.topGrid}>
            {/* Column 1 (Right): Logo & About */}
            <div className={styles.brandCol}>
              <div 
                className={styles.logoRow}
                onClick={() => onNavigate && onNavigate('home')}
                style={{ cursor: onNavigate ? 'pointer' : 'default' }}
                title="Growtech - الرئيسية"
              >
                <div className={styles.logoIcon}>
                  <img
                    src="/icons/Frame 20.svg"
                    alt="Growtech"
                    width="28"
                    height="28"
                    className={styles.logoImg}
                  />
                </div>
                <div className={styles.brandTitleWrap}>
                  <span className={styles.brandName}>Growtech</span>
                  <span className={styles.brandTagline}>للحلول الرقمية والبرمجية</span>
                </div>
              </div>

              <p className={styles.brandDesc}>
                نبني حلولاً رقمية تساعد الشركات على تحويل أفكارها إلى منتجات مؤثرة وقابلة للنمو.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div className={styles.navCol}>
              <h3 className={styles.colTitle}>روابط سريعة</h3>
              <ul className={styles.linkList}>
                <li>
                  <a 
                    href="#home" 
                    className={styles.footerLink}
                    onClick={(e) => {
                      if (onNavigate) {
                        e.preventDefault();
                        onNavigate('home');
                      }
                    }}
                  >
                    الرئيسية
                  </a>
                </li>
                <li>
                  <a href="#services" className={styles.footerLink}>
                    خدماتنا
                  </a>
                </li>
                <li>
                  <a href="#growth" className={styles.footerLink}>
                    لماذا Growtech؟
                  </a>
                </li>
                <li>
                  <a 
                    href="#contact" 
                    className={styles.footerLink}
                    onClick={(e) => {
                      if (onNavigate) {
                        e.preventDefault();
                        onNavigate('contact');
                      }
                    }}
                  >
                    تواصل معنا
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Services */}
            <div className={styles.navCol}>
              <h3 className={styles.colTitle}>الخدمات</h3>
              <ul className={styles.linkList}>
                <li>
                  <a href="#uiux" className={styles.footerLink}>
                    تصميم UI/UX
                  </a>
                </li>
                <li>
                  <a href="#frontend" className={styles.footerLink}>
                    تطوير الواجهات الأمامية
                  </a>
                </li>
                <li>
                  <a href="#backend" className={styles.footerLink}>
                    تطوير الأنظمة الخلفية
                  </a>
                </li>
                <li>
                  <a href="#flutter" className={styles.footerLink}>
                    تطوير تطبيقات Flutter
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4 (Left): Contact Info */}
            <div className={styles.contactCol}>
              <h3 className={styles.colTitle}>تواصل معنا</h3>
              <ul className={styles.contactList}>
                <li className={styles.contactItem}>
                  <svg
                    className={styles.contactIcon}
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <a
                    href="#location-map"
                    onClick={(e) => {
                      const mapEl = document.getElementById('location-map');
                      if (mapEl) {
                        e.preventDefault();
                        mapEl.scrollIntoView({ behavior: 'smooth' });
                      } else if (onNavigate) {
                        e.preventDefault();
                        onNavigate('contact');
                        setTimeout(() => {
                          document.getElementById('location-map')?.scrollIntoView({ behavior: 'smooth' });
                        }, 100);
                      }
                    }}
                    className={styles.contactLink}
                    title="الانتقال إلى خريطة المقر الرئيسي"
                  >
                    حي الجامعة، المنصورة، الدقهلية، مصر.
                  </a>
                </li>

                <li className={styles.contactItem}>
                  <svg
                    className={styles.contactIcon}
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <a
                    href="mailto:growtech.official@gmail.com"
                    className={styles.contactLink}
                    dir="ltr"
                  >
                    growtech.official@gmail.com
                  </a>
                </li>

                <li className={styles.contactItem}>
                  <svg
                    className={styles.contactIcon}
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <a
                    href="tel:+201027545022"
                    className={styles.contactLink}
                    dir="ltr"
                  >
                    (+20)1027545022
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Divider & Copyright */}
          <div className={styles.bottomBar}>
            <div className={styles.copyrightText}>
              جميع الحقوق محفوظة — Growtech 2026©
            </div>

            <div className={styles.policyLinks}>
              <a
                href="#privacy"
                className={styles.policyLink}
                onClick={(e) => {
                  if (onNavigate) {
                    e.preventDefault();
                    onNavigate('privacy');
                  }
                }}
              >
                سياسة الخصوصية
              </a>
              <a
                href="#terms"
                className={styles.policyLink}
                onClick={(e) => {
                  if (onNavigate) {
                    e.preventDefault();
                    onNavigate('terms');
                  }
                }}
              >
                الشروط والأحكام
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
