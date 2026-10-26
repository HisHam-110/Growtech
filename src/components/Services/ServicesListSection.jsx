import React from 'react';
import styles from './ServicesList.module.css';

export const ServicesListSection = () => {
  const services = [
    {
      id: 'uiux',
      title: 'تصميم UI/UX',
      description: 'نصمم تجارب رقمية بسيطة، واضحة ومصممة حول احتياجات المستخدم.',
      points: [
        'بحث وفهم احتياجات المستخدم',
        'تصميم واجهات حديثة وسهلة',
        'تجربة متسقة عبر مختلف الأجهزة',
        'تصميم أنظمة قابلة للتوسع',
      ],
      icon: '/icons/figma.svg',
      watermark: '/icons/figma-thin.svg',
    },
    {
      id: 'frontend',
      title: 'تطوير Frontend',
      description: 'نحوّل التصميمات إلى واجهات سريعة، تفاعلية، ومتوافقة مع مختلف الشاشات.',
      points: [
        'تطوير واجهات عالية الأداء',
        'تصميم متجاوب مع جميع الأجهزة',
        'تفاعلات وتجارب استخدام سلسة',
        'كود منظم وقابل للتطوير',
      ],
      icon: '/icons/web-design-02.svg',
      watermark: '/icons/web-design-02-thin.svg',
    },
    {
      id: 'backend',
      title: 'تطوير Backend',
      description: 'نبني أنظمة قوية وآمنة تدير بيانات مشروعك وتدعم نموه.',
      points: [
        'بناء APIs وأنظمة متكاملة',
        'إدارة البيانات وقواعد البيانات',
        'حماية وأمان للبيانات',
        'أنظمة قابلة للتوسع',
      ],
      icon: '/icons/database.svg',
      watermark: '/icons/database-thin.svg',
    },
    {
      id: 'flutter',
      title: 'تطوير تطبيقات Flutter',
      description: 'نطوّر تطبيقات موبايل عالية الجودة تعمل بسلاسة على مختلف المنصات.',
      points: [
        'تطبيقات Android و iOS',
        'أداء سريع وتجربة سلسة',
        'واجهات متوافقة مع التصميم',
        'كود واحد لأكثر من منصة',
      ],
      icon: '/icons/mobile-programming-02.svg',
      watermark: '/icons/mobile-programming-02-thin.svg',
    },
  ];

  return (
    <section className={styles.servicesListSection} dir="rtl">
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <h2 className={styles.mainTitle}>
            خدمات تدفع أعمالك نحو الأمام
          </h2>
          <p className={styles.subtitle}>
            نصمم تجارب رقمية بسيطة، واضحة ومصممة حول احتياجات المستخدم.
          </p>
        </div>

        {/* 4 Cards Horizontal Grid */}
        <div className={styles.cardsGrid}>
          {services.map((service) => (
            <div
              key={service.id}
              className={styles.serviceCard}
            >
              {/* Traveling Icon from Top-Right to Bottom-Left on Hover */}
              <div className={styles.floatingIconContainer}>
                <img
                  src={service.icon}
                  alt={service.title}
                  className={styles.primaryIcon}
                />
                <img
                  src={service.watermark}
                  alt=""
                  className={styles.watermarkIcon}
                />
              </div>

              {/* Card Body Content */}
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDescription}>{service.description}</p>

                {/* Feature Bullet Points */}
                <ul className={styles.featuresList}>
                  {service.points.map((point, pIndex) => (
                    <li key={pIndex} className={styles.featureItem}>
                      <span className={styles.bulletDot}>◆</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesListSection;
