import React from 'react';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import styles from './LegalPages.module.css';

const GRID_COLUMNS_COUNT = 23;

export const TermsPage = ({ onNavigate }) => {
  const sections = [
    {
      id: 'acceptance',
      number: '01',
      title: 'قبول الشروط والأحكام',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      ),
      paragraphs: [
        'أهلاً بك في شركة Growtech للحلول البرمجية والتحول الرقمي. يمثل استخدامك لموقعنا الإلكتروني أو تعاقدك معنا لتنفيذ أي مشروع برمجي أو تقني موافقة صريحة وكاملة على هذه الشروط والأحكام.',
        'تسري هذه الشروط على جميع العملاء والزوار والمستفيدين من خدماتنا واستشاراتنا الرقمية.',
      ],
    },
    {
      id: 'scope',
      number: '02',
      title: 'نطاق الخدمات البرمجية',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      ),
      paragraphs: [
        'تقدم Growtech حلولاً برمجية متكاملة تشمل: تصميم تجربة وواجهة المستخدم (UI/UX)، تطوير تطبيقات الهواتف الذكية (iOS & Android)، تطوير الأنظمة السحابية والواجهات الأمامية والخلفية، وبناء البوابات والمتاجر الرقمية.',
        'يتم تحديد متطلبات كل مشروع تفصيلياً في وثيقة نطاق العمل (Scope of Work - SOW) المتفق عليها بين الطرفين وتعتبر جزءاً لا يتجزأ من العقد.',
      ],
      points: [
        'تنفيذ المشروع وفق المواصفات والمراحل المحددة بالجدول الزمني.',
        'عقد ورش عمل استشارية واختبارات قبول للمستخدم (UAT).',
        'أي تعديلات جوهرية خارج نطاق العمل المعتمد تخضع لملحق تغيير (Change Request) مستقل.',
      ],
    },
    {
      id: 'intellectual-property',
      number: '03',
      title: 'الملكية الفكرية وحقوق السورس كود',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M14.83 14.83a4 4 0 1 1 0-5.66" />
        </svg>
      ),
      paragraphs: [
        'نحن نحترم حقوق الملكية الفكرية لعملائنا احتراماً كاملاً ونضمن انتقال ملكية الكود المخصص بالكامل للعميل.',
      ],
      points: [
        'تنتقل ملكية الكود المصدري (Source Code) والتصاميم المخصصة للعميل بعد سداد كامل المستحقات المالية المتفق عليها.',
        'تحتفظ Growtech بحق استخدام المكتبات المعيارية العامة وأطر العمل مفتوحة المصدر مع منح العميل رخصة استخدام غير حصرية ودائمة لها.',
        'يحق لـ Growtech الإشارة إلى المشروع ضمن سابقة أعمالها العامة ما لم يُنص على خلاف ذلك في اتفاقية السرية (NDA).',
      ],
      highlight: 'تلتزم Growtech بعدم استخدام أي كود مخصص تم تطويره لمشروع العميل في أي مشروع آخر لأي طرف ثالث.',
    },
    {
      id: 'payments',
      number: '04',
      title: 'شروط الدفع والتعاقد',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
          <line x1="1" y1="10" x2="23" y2="10" />
        </svg>
      ),
      paragraphs: [
        'تعتمد خطط الدفع على مراحل تسليم واضحة (Milestones) يتم الاتفاق عليها مسبقاً قبل بدء التنفيذ لضمان الشفافية والأمان للطرفين.',
      ],
      points: [
        'دفعة مقدمة للبدء في مراحل البحث والتصميم المعماري للمنتج.',
        'دفعات مرحلية مرتبطة باعتماد كل مرحلة برمجية من قبل العميل.',
        'الدفعة النهائية المستحقة عند الإطلاق الرسمي واختبارات الجاهزية.',
      ],
    },
    {
      id: 'commitments',
      number: '05',
      title: 'التزامات العميل وجدول التسليم',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 14 14" />
        </svg>
      ),
      paragraphs: [
        'يلتزم العميل بتوفير المحتوى والمواد والمعلومات وحسابات الربط الخارجية المطلوبة في المواعيد المحددة حتى يتسنى لفريق العمل الالتزام بمواعيد التسليم المتفق عليها.',
        'أي تأخير في تقديم الموافقات أو المواد الضرورية قد يترتب عليه تعديل مواعيد تسليم المراحل اللاحقة بما يتناسب مع مدة التأخير.',
      ],
    },
    {
      id: 'warranty',
      number: '06',
      title: 'الضمان والصيانة الفنية',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
      paragraphs: [
        'تمنح Growtech فترة ضمان مجانية بعد الإطلاق لمعالجة أي خلل برمجي (Bugs) ناتج عن تطوير الكود وفق نطاق العمل المعتمد.',
        'كما نوفر باقات دعم فني وصيانة دورية وتحديثات أمنية مستمرة لضمان بقاء منتجك في أعلى درجات الأداء والاستقرار مع نمو أعمالك.',
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
              <span className={styles.breadcrumbActive}>الشروط والأحكام</span>
            </nav>

            {/* Quick Switcher between Privacy and Terms */}
            <div className={styles.tabSwitcher}>
              <button
                type="button"
                className={styles.tabBtn}
                onClick={() => onNavigate && onNavigate('privacy')}
              >
                سياسة الخصوصية
              </button>
              <button
                type="button"
                className={`${styles.tabBtn} ${styles.tabBtnActive}`}
              >
                الشروط والأحكام
              </button>
            </div>
          </div>

          {/* Hero Content */}
          <div className={styles.heroContent}>
            <div className={styles.metaBadge}>
              <span className={styles.badgeDot}></span>
              <span>آخر تحديث: فبراير 2026 • ساري ومُلزم لجميع التعاملات</span>
            </div>

            <h1 className={styles.heroTitle}>الشروط والأحكام</h1>

            <p className={styles.heroSubtitle}>
              تهدف هذه البنود إلى تنظيم العلاقة المهنية وضمان حقوق الطرفين بكل وضوح وشفافية، بما يضمن بناء منتجات برمجية ناجحة ومستقرة تحقق أهدافكم وطموحاتكم.
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
              <span>فهرس الشروط</span>
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
              <h4 className={styles.helpBoxTitle}>استفسار حول التعاقد؟</h4>
              <p className={styles.helpBoxText}>
                يمكنك مناقشة أي بند أو طلب نسخة مخصصة من عقد تطوير البرمجيات.
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

export default TermsPage;
