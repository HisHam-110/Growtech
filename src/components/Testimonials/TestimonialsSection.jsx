import React from 'react';
import styles from './TestimonialsSection.module.css';

export const TestimonialsSection = () => {
  const stats = [
    {
      number: '+65',
      label: 'مشروع رقمي تم تسليمه بنجاح',
      colorClass: styles.statBlue,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
        </svg>
      ),
    },
    {
      number: '99.4%',
      label: 'نسبة رضا العملاء والالتزام',
      colorClass: styles.statAmber,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
        </svg>
      ),
    },
    {
      number: '+5',
      label: 'سنوات خبرة في تطوير الحلول التقنية',
      colorClass: styles.statIndigo,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="6"/>
          <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
        </svg>
      ),
    },
    {
      number: '100%',
      label: 'تسليم في الموعد ومتابعة مستمرة',
      colorClass: styles.statGreen,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
          <path d="m9 12 2 2 4-4"/>
        </svg>
      ),
    },
  ];

  const testimonials = [
    {
      name: 'د. أحمد زهران',
      role: 'مؤسس منصة CareHub الطبية',
      projectType: 'تطبيق Flutter ونظام سحابي',
      avatarText: 'أ.ز',
      quote:
        'التعامل مع Growtech كان نقلة نوعية لمشروعنا. تميزوا بفهم عميق لرحلة المستخدم وبناء نظام برمجي سريع ومستقر فاق توقعاتنا، مع التزام تام بالجدول الزمني.',
    },
    {
      name: 'المهندس طارق الصياد',
      role: 'الرئيس التنفيذي لشركة LogiFleet',
      projectType: 'لوحة تحكم SaaS ونظام Backend',
      avatarText: 'ط.ص',
      quote:
        'فريق Growtech لا يكتفي بكتابة الأكواد، بل يشاركك التفكير كشريك تقني حقيقي. كفاءة الواجهات وسلاسة الأنظمة الخلفية ساعدتنا على مضاعفة عملياتنا اليومية.',
    },
    {
      name: 'سارة عبد الرحمن',
      role: 'مديرة منتج في متجر نماء الرقمي',
      projectType: 'تصميم UI/UX وتطوير متجر متكامل',
      avatarText: 'س.ع',
      quote:
        'الاهتمام بأدق التفاصيل والأنيميشن والتفاعل البصري جعل تطبيقنا ينافس كبرى التطبيقات في السوق. دعمهم المستمر بعد الإطلاق كان علامة فارقة.',
    },
  ];

  return (
    <section id="testimonials" className={styles.testimonialsSection}>
      <div className={styles.ambientOrb1} />
      <div className={styles.ambientOrb2} />
      <div className={styles.bgGridPattern} />

      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.badge}>
            <span className={styles.badgeDot}></span>
            <span>شركاء النجاح • ثقة وتأثير</span>
          </div>

          <h2 className={styles.heading}>
            ماذا يقول عملاؤنا عن العمل مع <span className={styles.brandHighlight}>Growtech</span>؟
          </h2>

          <p className={styles.subheading}>
            فخورون بالثقة التي منحنا إياها رواد الأعمال والشركات لبناء منتجاتهم الرقمية وتحويل أفكارهم إلى واقع ملموس يحقق أهدافهم الاستثمارية.
          </p>
        </div>

        {/* Stats Row */}
        <div className={styles.statsRow}>
          {stats.map((stat, idx) => (
            <div key={idx} className={`${styles.statCard} ${stat.colorClass}`}>
              <div className={styles.statIconWrapper}>
                {stat.icon}
              </div>
              <div className={styles.statTextWrap}>
                <span className={styles.statNumber} dir="ltr">{stat.number}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className={styles.testimonialsGrid}>
          {testimonials.map((item, idx) => (
            <div key={idx} className={styles.testimonialCard}>
              {/* Decorative quotation watermark */}
              <div className={styles.quoteWatermark} aria-hidden="true">
                <svg width="44" height="44" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <div className={styles.cardTop}>
                <div className={styles.ratingRow}>
                  <div className={styles.stars} title="تقييم 5 من 5 نجوم">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <span className={styles.projectBadge}>
                    <span className={styles.badgePulseDot} />
                    {item.projectType}
                  </span>
                </div>

                <p className={styles.quoteText}>"{item.quote}"</p>
              </div>

              <div className={styles.authorRow}>
                <div className={styles.authorLeftGroup}>
                  <div className={styles.authorAvatar}>{item.avatarText}</div>
                  <div className={styles.authorDetails}>
                    <div className={styles.authorNameRow}>
                      <h3 className={styles.authorName}>{item.name}</h3>
                      <div className={styles.verifiedBadge} title="عميل موثّق">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>موثّق</span>
                      </div>
                    </div>
                    <span className={styles.authorRole}>{item.role}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
