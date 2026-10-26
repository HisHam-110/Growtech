import React, { useState } from 'react';
import styles from './LocationMapSection.module.css';

export const LocationMapSection = () => {
  const [copied, setCopied] = useState(false);

  const addressText = 'حي الجامعة، المنصورة، الدقهلية، مصر';
  // Coordinates of Mansoura University District (حي الجامعة، المنصورة)
  const latitude = 31.0425;
  const longitude = 31.3575;
  const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
  const googleMapsEmbedUrl = `https://maps.google.com/maps?q=${latitude},${longitude}&hl=ar&z=16&output=embed`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;

  const handleCopyAddress = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(addressText).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      });
    }
  };

  return (
    <section id="location-map" className={styles.locationSection}>
      {/* Background Decorative Glow */}
      <div className={styles.bgGlowOrb1} />
      <div className={styles.bgGlowOrb2} />

      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.locationBadge}>
            <span className={styles.pulseDot}></span>
            <span>مقرنا الجغرافي • المنصورة</span>
          </div>

          <h2 className={styles.sectionHeading}>
            تفضل بزيارتنا في مقرنا الرئيسي
          </h2>

          <p className={styles.sectionSubheading}>
            يسعدنا دائماً استقبالكم في مقر Growtech لمناقشة أفكاركم ومشاريعكم البرمجية واحتساء فنجان قهوة معاً، لنرسم معاً طريق النجاح الرقمي.
          </p>
        </div>

        {/* Map Container */}
        <div className={styles.mapCardContainer}>
          {/* Google Maps Iframe */}
          <div className={styles.mapIframeWrapper}>
            <iframe
              title="Growtech Headquarters Location"
              src={googleMapsEmbedUrl}
              className={styles.mapIframe}
              loading="lazy"
              allowFullScreen=""
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* Prominent Animated Pin Marker directly marking the HQ */}
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mapPinOverlay}
              title="مقر Growtech - انقر لفتح الموقع في Google Maps"
            >
              <div className={styles.pinBeaconBadge}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#22C55E' }}></span>
                <span>مقر Growtech الرئيسي</span>
              </div>

              <svg className={styles.pinIconGraphic} viewBox="0 0 384 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0z" fill="#DC2626"/>
                <path d="M192 288c53.019 0 96-42.981 96-96s-42.981-96-96-96-96 42.981-96 96 42.981 96 96 96z" fill="#FFFFFF"/>
                <circle cx="192" cy="192" r="48" fill="#062E88"/>
              </svg>

              <span className={styles.pinRadarGround}></span>
            </a>
          </div>

          {/* Floating Glassmorphic Overlay Card */}
          <div className={styles.floatingInfoCard}>
            <div className={styles.infoCardHeader}>
              <div className={styles.brandBadge}>
                <div className={styles.brandIconBox}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className={styles.brandTextGroup}>
                  <span className={styles.brandTitle}>Growtech HQ</span>
                  <span className={styles.brandSub}>المقر الرئيسي للشركة</span>
                </div>
              </div>

              <div className={styles.statusIndicator}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22C55E' }}></span>
                <span>مفتوح للزيارة</span>
              </div>
            </div>

            {/* Address & Working Hours Details */}
            <div className={styles.infoList}>
              <div className={styles.infoRow}>
                <div className={styles.infoIconCircle}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"></path>
                    <circle cx="12" cy="9" r="2.5"></circle>
                  </svg>
                </div>
                <div className={styles.infoTexts}>
                  <span className={styles.infoLabel}>العنوان بالتفصيل</span>
                  <span className={styles.infoValue}>{addressText}</span>
                </div>
              </div>

              <div className={styles.infoRow}>
                <div className={styles.infoIconCircle}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div className={styles.infoTexts}>
                  <span className={styles.infoLabel}>أوقات العمل الرسمية</span>
                  <span className={styles.infoValue}>الأحد - الخميس: 9:00 ص - 6:00 م</span>
                </div>
              </div>

              <div className={styles.infoRow}>
                <div className={styles.infoIconCircle}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className={styles.infoTexts}>
                  <span className={styles.infoLabel}>هاتف الاستقبال</span>
                  <a href="tel:+201027545022" className={styles.infoValue} dir="ltr" style={{ color: '#062E88', textDecoration: 'none' }}>
                    +20 102 754 5022
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className={styles.cardActions}>
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnPrimary}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
                </svg>
                <span>اتجاهات السير</span>
              </a>

              <button
                type="button"
                onClick={handleCopyAddress}
                className={styles.btnSecondary}
              >
                {copied ? (
                  <>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#166534" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span style={{ color: '#166534' }}>تم النسخ!</span>
                  </>
                ) : (
                  <>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                    <span>نسخ العنوان</span>
                  </>
                )}
              </button>
            </div>

            {/* Direct Open in Google Maps */}
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: '12px',
                color: '#2055D5',
                textAlign: 'center',
                textDecoration: 'none',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '4px',
                marginTop: '2px',
              }}
            >
              <span>فتح مباشرة في تطبيق Google Maps</span>
              <span>↗</span>
            </a>
          </div>
        </div>

        {/* 3 Pillars / Highlights below map */}
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIconWrapper}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
              </svg>
            </div>
            <div className={styles.featureContent}>
              <h3 className={styles.featureTitle}>موقع حيوي وسهل الوصول</h3>
              <p className={styles.featureDesc}>
                يقع مقرنا في قلب حي الجامعة بالمنصورة، بالقرب من كافة المرافق الحيوية مع سهولة الوصول وتوفر مواقف السيارات.
              </p>
            </div>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIconWrapper}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <div className={styles.featureContent}>
              <h3 className={styles.featureTitle}>جلسات استشارية واجتماعات</h3>
              <p className={styles.featureDesc}>
                مساحات مجهزة بأحدث التقنيات لعقد ورش العمل وجلسات العصف الذهني لمناقشة المنتجات الرقمية والنماذج الأولية.
              </p>
            </div>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIconWrapper}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                <line x1="6" y1="1" x2="6" y2="4"></line>
                <line x1="10" y1="1" x2="10" y2="4"></line>
                <line x1="14" y1="1" x2="14" y2="4"></line>
              </svg>
            </div>
            <div className={styles.featureContent}>
              <h3 className={styles.featureTitle}>ضيافة وترحيب حار</h3>
              <p className={styles.featureDesc}>
                فريقنا بانتظارك دائماً بكل ترحاب لمناقشة أفكارك وتطلعاتك البرمجية في أجواء مريحة وعملية تناسب تطلعاتك.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMapSection;
