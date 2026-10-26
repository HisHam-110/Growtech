import React, { useEffect, useRef, useState } from 'react';
import styles from './Process.module.css';

// Import images
import step1Img from '../../assets/images/unsplash_qC2n6RQU4Vw.png';
import step2Img from '../../assets/images/unsplash_QckxruozjRg.png';
import step3Img from '../../assets/images/unsplash_xeEukPZjZi0.png';

export const ProcessSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const steps = [
    {
      id: 1,
      number: '01',
      title: 'نكتشف ونصمم',
      image: step1Img,
      alt: 'اكتشاف وتصميم تجربة المستخدم والتخطيط الرقمي',
      description:
        'نبدأ بفهم أهداف عملك واحتياجات المستخدمين، ثم نحول الأفكار إلى تجربة رقمية واضحة وسهلة الاستخدام.',
      cardClass: styles.cardRight,
      delayClass: styles.delay1,
    },
    {
      id: 2,
      number: '02',
      title: 'نطوّر ونحسّن',
      image: step2Img,
      alt: 'فريق التطوير والبرمجة والتحسين المستمر',
      description:
        'نحول التصميم إلى منتج فعلي باستخدام تقنيات حديثة، مع التركيز على الأداء، الجودة، وقابلية التوسع.',
      cardClass: styles.cardCenter,
      delayClass: styles.delay2,
    },
    {
      id: 3,
      number: '03',
      title: 'نطلق وننمو',
      image: step3Img,
      alt: 'إطلاق المنتج في السوق وتحقيق النمو المستدام',
      description:
        'نختبر المنتج ونتأكد من جاهزيته، ثم نطلقه ونتابع أداءه ونواصل تطويره، ليواكب احتياجات عملك ويحقق نموًا مستمرًا.',
      cardClass: styles.cardLeft,
      delayClass: styles.delay3,
    },
  ];

  return (
    <section
      id="process"
      ref={sectionRef}
      className={`${styles.processSection} ${isVisible ? styles.inView : ''}`}
      dir="rtl"
    >
      {/* Ambient background glow effects */}
      <div className={styles.ambientGlow} />
      <div className={styles.ambientGlowBottom} />

      <div className={styles.container}>
        {/* Section Header */}
        <div className={`${styles.header} ${styles.animateFadeUp}`}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            <span>كيف نعمل</span>
          </div>

          <h2 className={styles.title}>
            من الفكرة إلى منتج رقمي
            <br />
            ناجح
          </h2>

          <p className={styles.subtitle}>
            نعمل معك خطوة بخطوة لتحويل فكرتك إلى حل رقمي واضح، عملي، وقابل للنمو.
          </p>
        </div>

        {/* Cards Container with Connector Arrows */}
        <div className={styles.cardsWrapper}>
          {/* Top Arrow: between Card 01 and Card 02 */}
          <div
            className={`${styles.topArrowWrapper} ${
              activeCard === 1 || activeCard === 2 ? styles.arrowHighlight : ''
            }`}
          >
            <img
              src="/icons/Arrow 02.svg"
              alt="connector arrow"
              className={styles.topArrow}
            />
          </div>

          {/* Bottom Arrow: between Card 02 and Card 03 */}
          <div
            className={`${styles.bottomArrowWrapper} ${
              activeCard === 2 || activeCard === 3 ? styles.arrowHighlight : ''
            }`}
          >
            <img
              src="/icons/Arrow 4.svg"
              alt="connector arrow"
              className={styles.bottomArrow}
            />
          </div>

          {/* The 3 Cards */}
          <div className={styles.cardsGrid}>
            {steps.map((step) => (
              <div
                key={step.number}
                className={`${styles.card} ${step.cardClass} ${step.delayClass} ${
                  activeCard === step.id ? styles.cardActive : ''
                }`}
                onMouseEnter={() => setActiveCard(step.id)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className={styles.cardHeader}>
                  <span className={styles.stepNumber}>{step.number}</span>
                  <h3 className={styles.cardTitle}>{step.title}</h3>
                </div>

                <div className={styles.imageWrapper}>
                  <img
                    src={step.image}
                    alt={step.alt}
                    className={styles.cardImage}
                    loading="lazy"
                  />
                  <div className={styles.imageOverlay} />
                </div>

                <p className={styles.cardDescription}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
