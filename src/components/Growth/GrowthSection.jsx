import React from 'react';
import styles from './Growth.module.css';
import lineChartImg from '../../assets/images/Line chart 1.png';

export const GrowthSection = ({ onNavigate, allNavy = false }) => {
  const leftCards = [
    {
      id: 'left-1',
      badge: 'نضمن الجودة',
      badgeType: allNavy ? 'navy' : 'orange',
      cardType: 'white',
      text: (
        <>
          نختبر كل ميزة بدقة وأمان
          <br />
          لضمان أداء مستقر وتجربة
          <br />
          استخدام خالية من الأخطاء.
        </>
      ),
    },
    {
      id: 'left-2',
      badge: 'نطلق بنجاح',
      badgeType: 'navy',
      cardType: 'middle',
      text: (
        <>
          ننشر منتجك على أفضل المنصات
          <br />
          بجاهزية تامة وسلاسة كاملة
          <br />
          ليصل لجمهورك المستهدف.
        </>
      ),
    },
    {
      id: 'left-3',
      badge: 'ننمو معك',
      badgeType: allNavy ? 'navy' : 'orange',
      cardType: 'white',
      text: (
        <>
          نتابع الأداء ونحلل التفاعل
          <br />
          لنواصل التحسين والتطوير
          <br />
          المستمر لزيادة نجاحك.
        </>
      ),
    },
  ];

  const rightCards = [
    {
      id: 'right-1',
      badge: 'نفهم فكرتك',
      badgeType: allNavy ? 'navy' : 'orange',
      cardType: 'white',
      text: (
        <>
          نبدأ بالاستماع إلى أهدافك وتحدياتك
          <br />
          لفهم احتياجات مشروعك وتحديد
          <br />
          الاتجاه المناسب للبدء.
        </>
      ),
    },
    {
      id: 'right-2',
      badge: allNavy ? 'نفهم فكرتك' : 'نصمم التجربة',
      badgeType: 'navy',
      cardType: 'middle',
      text: (
        <>
          {allNavy ? (
            <>
              نبدأ بالاستماع إلى أهدافك وتحدياتك
              <br />
              لفهم احتياجات مشروعك وتحديد
              <br />
              الاتجاه المناسب للبدء.
            </>
          ) : (
            <>
              نحوّل الأفكار إلى تجربة مستخدم
              <br />
              واضحة وواجهات سهلة الاستخدام
              <br />
              تعكس أهداف المنتج
            </>
          )}
        </>
      ),
    },
    {
      id: 'right-3',
      badge: allNavy ? 'نفهم فكرتك' : 'نطوّر الحل',
      badgeType: allNavy ? 'navy' : 'orange',
      cardType: 'white',
      text: (
        <>
          {allNavy ? (
            <>
              نبدأ بالاستماع إلى أهدافك وتحدياتك
              <br />
              لفهم احتياجات مشروعك وتحديد
              <br />
              الاتجاه المناسب للبدء.
            </>
          ) : (
            <>
              نبني منتجات رقمية قوية باستخدام
              <br />
              التقنيات المناسبة لضمان الأداء
              <br />
              والجودة وقابلية التطوير.
            </>
          )}
        </>
      ),
    },
  ];

  return (
    <section id="growth" className={styles.growthSection} dir="rtl">
      {/* Ambient background glow */}
      <div className={styles.glowRight} />
      <div className={styles.glowLeft} />

      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>كل ما يحتاجه مشروعك للنمو في مكان واحد</h2>
          <p className={styles.subtitle}>
            نحوّل أفكارك إلى منتجات رقمية متكاملة تجمع بين التصميم والتقنية.
          </p>
        </div>

        <div className={styles.diagramWrapper}>
          {/* Right Column of Cards (in RTL: on the right) */}
          <div className={`${styles.cardsColumn} ${styles.rightColumn}`}>
            {rightCards.map((card) => (
              <div
                key={card.id}
                className={`${styles.card} ${
                  card.cardType === 'middle' ? styles.cardMiddle : styles.cardWhite
                }`}
              >
                <div
                  className={`${styles.badge} ${
                    card.badgeType === 'navy' ? styles.badgeNavy : styles.badgeOrange
                  }`}
                >
                  {card.badge}
                </div>
                <p className={styles.cardText}>{card.text}</p>
              </div>
            ))}
          </div>

          {/* Center Column: Graphic & Connecting Arrows */}
          <div className={styles.centerArea}>
            <div className={styles.graphicWithArrows}>
              {/* Arrows pointing Right */}
              <div className={`${styles.arrowWrapper} ${styles.arrowTopRight}`}>
                <img src="/icons/Arrow 05.svg" alt="arrow" className={styles.arrowImg} />
              </div>

              <div className={`${styles.arrowWrapper} ${styles.arrowMidRight}`}>
                <img src="/icons/Arrow 12.svg" alt="arrow" className={styles.arrowImg} />
              </div>

              <div className={`${styles.arrowWrapper} ${styles.arrowBotRight}`}>
                <img src="/icons/Arrow 6.svg" alt="arrow" className={styles.arrowImg} />
              </div>

              {/* Central 3D Graphic & Glow */}
              <div className={styles.centerGraphicContainer}>
                <div className={styles.centerGraphicGlow} />
                <img
                  src={lineChartImg}
                  alt="Line chart"
                  className={styles.centerGraphic}
                />
              </div>

              {/* Arrows pointing Left (Flipped horizontally) */}
              <div className={`${styles.arrowWrapper} ${styles.arrowTopLeft}`}>
                <img src="/icons/Arrow 05.svg" alt="arrow" className={styles.arrowImg} />
              </div>

              <div className={`${styles.arrowWrapper} ${styles.arrowMidLeft}`}>
                <img src="/icons/Arrow 12.svg" alt="arrow" className={styles.arrowImg} />
              </div>

              <div className={`${styles.arrowWrapper} ${styles.arrowBotLeft}`}>
                <img src="/icons/Arrow 6.svg" alt="arrow" className={styles.arrowImg} />
              </div>
            </div>
          </div>

          {/* Left Column of Cards (in RTL: on the left) */}
          <div className={`${styles.cardsColumn} ${styles.leftColumn}`}>
            {leftCards.map((card) => (
              <div
                key={card.id}
                className={`${styles.card} ${
                  card.cardType === 'middle' ? styles.cardMiddle : styles.cardWhite
                }`}
              >
                <div
                  className={`${styles.badge} ${
                    card.badgeType === 'navy' ? styles.badgeNavy : styles.badgeOrange
                  }`}
                >
                  {card.badge}
                </div>
                <p className={styles.cardText}>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthSection;
