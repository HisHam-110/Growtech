import React, { useState } from 'react';
import { AboutHero } from './AboutHero';
import { Footer } from '../Footer/Footer';
import officeImg from '../../assets/images/unsplash_iprE_0Fkg5g.png';
import planningImg from '../../assets/images/unsplash_bERr2keccpc.png';
import styles from './About.module.css';

export const AboutPage = ({ onNavigate }) => {
  const [activeAccordion, setActiveAccordion] = useState('mission');

  const accordionData = [
    {
      id: 'mission',
      title: 'مهمتنا',
      content: 'نساعد الشركات على تحويل أفكارها إلى منتجات رقمية فعّالة، من خلال الجمع بين التصميم والتقنية لبناء حلول تحقق قيمة حقيقية وقابلة للنمو.',
    },
    {
      id: 'vision',
      title: 'رؤيتنا',
      content: 'أن نكون الشريك التكنولوجي الأول للشركات والمشاريع الطامحة للريادة الرقمية والابتكار المستمر في الشرق الأوسط والعالم.',
    },
    {
      id: 'philosophy',
      title: 'فلسفتنا',
      content: 'نؤمن بأن البساطة تصنع القوة، وأن فهم احتياجات المستخدم الحقيقية هو جوهر بناء أي منتج رقمي ناجح ومستدام.',
    },
  ];

  const handleToggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? '' : id);
  };

  return (
    <div className="about-page-root">
      {/* 1. Hero Section matching Figma Screenshot */}
      <AboutHero onNavigate={onNavigate} />

      {/* 2. Values Section: 'القيم التي تقود طريقة عملنا' */}
      <section className={styles.valuesSection}>
        <div className={styles.container}>
          {/* Section Header */}
          <div className={styles.valuesHeader}>
            <h2 className={styles.sectionHeading}>
              القيم التي تقود طريقة عملنا
            </h2>
            <p className={styles.sectionSubheading}>
              نؤمن أن بناء منتجات رقمية ناجحة لا يعتمد على التقنية وحدها، بل يبدأ بمجموعة من المبادئ التي توجه قراراتنا وطريقة تعاوننا مع عملائنا في كل خطوة من الرحلة.
            </p>
          </div>

          {/* 2x2 Values Cards Grid */}
          <div className={styles.valuesGrid}>
            {/* Card 1: الخطوة - 01 (Top-Right in RTL) */}
            <div className={styles.valueCard}>
              <img src="/icons/Ellipse 6.svg" alt="" className={styles.cornerPatternTop} />
              <img src="/icons/Ellipse 6.svg" alt="" className={styles.cornerPatternBottom} />

              <span className={styles.stepLabel}>الخطوة - 01</span>
              <h3 className={styles.cardTitle}>
                {'سنساعدك في إيجاد '}
                <span className={styles.orangeText}>الحل الأنسب</span>
                <br />
                {'لمشروعك'}
              </h3>
              <p className={styles.cardDesc}>
                أخبرنا عن مشروعك واحتياجاتك، ودعنا نكتشف معًا كيف يمكن لـ Growtech أن تساعدك في بناء الحل الرقمي المناسب.
              </p>
            </div>

            {/* Card 2: 02 - نهتم بالتفاصيل (Top-Left in RTL) */}
            <div className={styles.valueCard}>
              <img src="/icons/Ellipse 6.svg" alt="" className={styles.cornerPatternTop} />
              <img src="/icons/Ellipse 6.svg" alt="" className={styles.cornerPatternBottom} />

              <h3 className={styles.cardTitle}>02 - نهتم بالتفاصيل</h3>
              <p className={styles.cardDesc}>
                نؤمن أن الحل الجيد يبدأ بفهم المشكلة بشكل صحيح. لذلك نأخذ الوقت الكافي لفهم أهداف عملك واحتياجات المستخدمين والتحديات التي تواجه مشروعك قبل البدء في تصميم أو تطوير أي حل.
              </p>
            </div>

            {/* Card 3: 03 - نبني للنمو (Bottom-Right in RTL) */}
            <div className={styles.valueCard}>
              <img src="/icons/Ellipse 6.svg" alt="" className={styles.cornerPatternTop} />
              <img src="/icons/Ellipse 6.svg" alt="" className={styles.cornerPatternBottom} />

              <h3 className={styles.cardTitle}>03 - نبني للنمو</h3>
              <p className={styles.cardDesc}>
                لا نبني حلولاً للحاضر فقط، بل نفكر في المستقبل أيضًا. نعمل على تصميم وتطوير منتجات مرنة وقابلة للتوسع لتواكب نمو أعمالك واحتياجاتك المتغيرة مع الوقت.
              </p>
            </div>

            {/* Card 4: 04 - ننجح معًا (Bottom-Left in RTL) */}
            <div className={styles.valueCard}>
              <img src="/icons/Ellipse 6.svg" alt="" className={styles.cornerPatternTop} />
              <img src="/icons/Ellipse 6.svg" alt="" className={styles.cornerPatternBottom} />

              <h3 className={styles.cardTitle}>04 - ننجح معًا</h3>
              <p className={styles.cardDesc}>
                نؤمن بأن أفضل النتائج تأتي من الشراكة الحقيقية. نعمل مع عملائنا كفريق واحد، نشاركهم الأفكار والتحديات ونسعى معًا لبناء منتجات تحقق أهدافًا وقيمة حقيقية.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision Section (نؤمن بفكرة، ونبني لها مستقبلاً) */}
      <section className={styles.missionSection}>
        <div className={styles.container}>
          {/* Section Header */}
          <div className={styles.missionHeader}>
            <h2 className={styles.missionHeading}>
              نؤمن بفكرة، ونبني لها مستقبلاً
            </h2>
            <p className={styles.missionSubheading}>
              أفكارنا ومبادئنا هي الأساس الذي نبني عليه كل منتج وكل شراكة.
            </p>
          </div>

          {/* Grid Layout: Right Accordion, Left Overlapping Photos */}
          <div className={styles.missionGrid}>
            {/* Right Column: Accordion */}
            <div className={styles.accordionList}>
              {accordionData.map((item) => {
                const isActive = activeAccordion === item.id;
                return (
                  <div
                    key={item.id}
                    className={`${styles.accordionItem} ${isActive ? styles.active : styles.collapsed}`}
                    onClick={() => handleToggleAccordion(item.id)}
                  >
                    <div className={styles.accordionHeaderRow}>
                      <h3 className={styles.accordionTitle}>{item.title}</h3>
                      <div className={styles.accordionIcon}>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{
                            transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.25s ease',
                          }}
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </div>
                    </div>
                    {isActive && (
                      <p className={styles.accordionContent}>{item.content}</p>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Left Column: Overlapping Images Gallery */}
            <div className={styles.galleryWrapper}>
              <div className={styles.imageTopWrapper}>
                <img
                  src={officeImg}
                  alt="Growtech Office"
                  className={styles.imageTopOffice}
                />
              </div>
              <div className={styles.imageBottomWrapper}>
                <img
                  src={planningImg}
                  alt="Growtech Strategy & Planning"
                  className={styles.imageBottomPlanning}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default AboutPage;
