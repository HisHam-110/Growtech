import React from 'react';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import styles from './LegalPages.module.css';

const GRID_COLUMNS_COUNT = 23;

export const PrivacyPage = ({ onNavigate }) => {
  const sections = [
    {
      id: 'collection',
      number: '01',
      title: 'جمع البيانات والمعلومات',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      ),
      paragraphs: [
        'نقوم بجمع المعلومات التي تقدمها لنا طواعية عند التواصل معنا، أو عند طلب استشارة برمجية، أو عند التعاقد لتطوير منتج رقمي.',
        'تشمل هذه المعلومات: الاسم، البريد الإلكتروني، رقم الهاتف، اسم الشركة أو المشروع، وتفاصيل المتطلبات التقنية التي تشاركها معنا.',
      ],
      points: [
        'بيانات الاتصال الأساسية لمعالجة طلباتكم والتواصل الفعّال.',
        'معلومات المشروع والمتطلبات الوظيفية لإعداد العروض الفنية والمالية.',
        'بيانات التصفح التقنية المجهولة لتحسين سرعة وأداء الموقع.',
      ],
    },
    {
      id: 'usage',
      number: '02',
      title: 'كيفية استخدام البيانات',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polygon points="12 6 12 12 16 14" />
        </svg>
      ),
      paragraphs: [
        'نستخدم بياناتك حصرياً للأغراض المشروعة المتعلقة بتقديم وتطوير خدماتنا البرمجية، وتحقيق أعلى مستويات الجودة لعملائنا.',
      ],
      points: [
        'تقديم الاستشارات التقنية وإدارة المشاريع بدقة واحترافية.',
        'إرسال التحديثات الدورية وتقارير مراحل التطوير والإطلاق.',
        'تحسين تجربة تصفح الموقع والرد السريع على الاستفسارات.',
        'الامتثال للالتزامات القانونية والتعاقدية المنظمة للأعمال.',
      ],
    },
    {
      id: 'security',
      number: '03',
      title: 'حماية وتشفير المعلومات',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
      paragraphs: [
        'نطبق في Growtech بروتوكولات أمان متقدمة لحماية بياناتك وأكواد مشاريعك من أي وصول غير مصرح به أو تعديل أو إفشاء.',
        'نستخدم شهادات تشفير SSL/TLS متطورة، وجدران حماية سحابية، مع سياسة صارمة لتحديد الصلاحيات تضمن وصول أعضاء الفريق المعنيين فقط للبيانات المطلوبة.',
      ],
      highlight: 'جميع ملفات المشاريع والاتفاقيات البرمجية تخضع لاتفاقية سرية وعدم إفشاء (NDA) لحماية أفكارك واستثماراتك التجارية.',
    },
    {
      id: 'sharing',
      number: '04',
      title: 'مشاركة البيانات مع أطراف ثالثة',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      paragraphs: [
        'نحن لا نبيع أو نؤجر أو نتاجر ببياناتك الشخصية أو تفاصيل مشاريعك لأي طرف ثالث على الإطلاق لأي غرض تسويقي.',
        'قد تتم مشاركة بعض البيانات التقنية الضرورية فقط مع مزودي الخدمات الموثوقين (مثل خوادم الاستضافة السحابية وبوابات الدفع الرسمية) في الحدود اللازمة لتشغيل وتطوير المنتج.',
      ],
    },
    {
      id: 'cookies',
      number: '05',
      title: 'ملفات تعريف الارتباط (Cookies)',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
          <path d="M2 12h20" />
        </svg>
      ),
      paragraphs: [
        'يستخدم موقعنا ملفات تعريف ارتباط خفيفة لتحسين تجربة التصفح وتذكر تفضيلاتك وتسهيل التنقل داخل الموقع.',
        'يمكنك في أي وقت تعطيل أو تعديل إعدادات الكوكيز من خلال خيارات متصفح الإنترنت الخاص بك دون التأثير على تصفحك للخدمات الرئيسية.',
      ],
    },
    {
      id: 'rights',
      number: '06',
      title: 'حقوقك وخياراتك',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
        </svg>
      ),
      paragraphs: [
        'يحق لك في أي وقت مراجعة أو تصحيح أو طلب حذف أي بيانات شخصية تواصلت بها معنا.',
      ],
      points: [
        'الحق في الاطلاع على البيانات المخزنة وطبيعة استخدامها.',
        'الحق في طلب تحديث أو تصحيح أي معلومات غير دقيقة.',
        'الحق في طلب حذف البيانات بعد انتهاء الغرض التعاقدي منها.',
      ],
    },
  ];

  return (
    <div className={styles.pageRoot} dir="rtl">
      {/* Delicate Tech Mesh & Ambient Floating Aurora Orbs */}
      <div className={styles.techMeshOverlay} aria-hidden="true" />
      <div className={styles.auroraOrb1} aria-hidden="true" />
      <div className={styles.auroraOrb2} aria-hidden="true" />
      <div className={styles.auroraOrb3} aria-hidden="true" />
      <div className={styles.auroraOrb4} aria-hidden="true" />

      {/* Hero Header Area */}
      <section className={styles.heroContainer}>
        <div className={styles.backgroundLayer} aria-hidden="true">
          <div className={styles.gridOverlay}>
            {Array.from({ length: GRID_COLUMNS_COUNT }).map((_, index) => (
              <div key={index} className={styles.gridColumn} />
            ))}
          </div>
          <div className={styles.ellipseLeft} />
          <div className={styles.ellipseRight} />
        </div>

        {/* Global Navbar */}
        <Header activePage="" onNavigate={onNavigate} />

        <div className={styles.container}>
          {/* Top Breadcrumb & Switcher */}
          <div className={styles.topNavRow}>
            <nav className={styles.breadcrumb} aria-label="مسار التنقل">
              <button
                type="button"
                className={styles.breadcrumbLink}
                onClick={() => onNavigate && onNavigate('home')}
              >
                الرئيسية
              </button>
              <span className={styles.breadcrumbDivider}>/</span>
              <span className={styles.breadcrumbActive}>سياسة الخصوصية</span>
            </nav>

            {/* Quick Switcher between Privacy and Terms */}
            <div className={styles.tabSwitcher}>
              <button
                type="button"
                className={`${styles.tabBtn} ${styles.tabBtnActive}`}
              >
                سياسة الخصوصية
              </button>
              <button
                type="button"
                className={styles.tabBtn}
                onClick={() => onNavigate && onNavigate('terms')}
              >
                الشروط والأحكام
              </button>
            </div>
          </div>

          {/* Hero Content */}
          <div className={styles.heroContent}>
            <div className={styles.metaBadge}>
              <span className={styles.badgeDot}></span>
              <span>آخر تحديث: فبراير 2026 • متوافق مع معايير الأمان</span>
            </div>

            <h1 className={styles.heroTitle}>سياسة الخصوصية</h1>

            <p className={styles.heroSubtitle}>
              نحن في Growtech نعتبر حماية خصوصيتك وبياناتك الرقمية أولوية مطلقة، ونلتزم بأعلى معايير الشفافية والأمان البرمجي لضمان سلامة وسرية معلوماتك.
            </p>
          </div>
        </div>
      </section>

      {/* Main Two-Column Content */}
      <main className={styles.container}>
        <div className={styles.mainLayout}>
          {/* Sticky Quick Nav Sidebar */}
          <aside className={styles.sidebarSticky}>
            <h3 className={styles.sidebarTitle}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="8" y1="6" x2="21" y2="6"></line>
                <line x1="8" y1="12" x2="21" y2="12"></line>
                <line x1="8" y1="18" x2="21" y2="18"></line>
                <line x1="3" y1="6" x2="3.01" y2="6"></line>
                <line x1="3" y1="12" x2="3.01" y2="12"></line>
                <line x1="3" y1="18" x2="3.01" y2="18"></line>
              </svg>
              <span>فهرس السياسة</span>
            </h3>

            <ul className={styles.sidebarList}>
              {sections.map((sec) => (
                <li key={sec.id}>
                  <a href={`#${sec.id}`} className={styles.sidebarItemLink}>
                    <span className={styles.sidebarNumber}>{sec.number}</span>
                    <span>{sec.title}</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className={styles.sidebarHelpBox}>
              <h4 className={styles.helpBoxTitle}>لديك استفسار حول الخصوصية؟</h4>
              <p className={styles.helpBoxText}>
                فريقنا القانوني والتقني متواجد لمساعدتك والإجابة على أي تساؤل.
              </p>
              <a
                href="mailto:growtech.official@gmail.com"
                className={styles.helpBoxEmail}
                dir="ltr"
              >
                growtech.official@gmail.com
              </a>
            </div>
          </aside>

          {/* Policy Clauses Cards */}
          <div className={styles.contentArea}>
            {sections.map((sec) => (
              <section key={sec.id} id={sec.id} className={styles.policyCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardIconBox}>{sec.icon}</div>
                  <h2 className={styles.cardTitle}>{sec.title}</h2>
                </div>

                {sec.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className={styles.paragraph}>{p}</p>
                ))}

                {sec.points && (
                  <ul className={styles.pointsList}>
                    {sec.points.map((pt, ptIdx) => (
                      <li key={ptIdx} className={styles.pointItem}>
                        <div className={styles.pointCheck}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {sec.highlight && (
                  <div className={styles.highlightCallout}>
                    <div className={styles.calloutIcon}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="8" x2="12" y2="12" />
                        <line x1="12" y1="16" x2="12.01" y2="16" />
                      </svg>
                    </div>
                    <p className={styles.calloutText}>{sec.highlight}</p>
                  </div>
                )}
              </section>
            ))}
          </div>
        </div>
      </main>

      {/* Global Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default PrivacyPage;
