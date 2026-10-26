import React, { useState } from 'react';
import { ContactHero } from './ContactHero';
import { LocationMapSection } from './LocationMapSection';
import { CtaSection } from '../Cta/CtaSection';
import { Footer } from '../Footer/Footer';
import styles from './Contact.module.css';

export const ContactPage = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(0); // First item open by default like in Figma screenshot

  const faqItems = [
    {
      question: 'هل يجب أن أعرف كل تفاصيل المشروع؟',
      answer: 'لا، يكفي أن تخبرنا بفكرتك وسنساعدك في تحديد الخطوات المناسبة.',
    },
    {
      question: 'ماذا لو لم أعرف الخدمة التي أحتاجها؟',
      answer: 'يمكنك التواصل معنا لمناقشة أهدافك، وسيقوم فريقنا الاستشاري بتحليل متطلباتك واقتراح أفضل مسار تقني مناسب لمشروعك.',
    },
    {
      question: 'هل يمكن تنفيذ أكثر من خدمة؟',
      answer: 'بالتأكيد، نحن نقدم حلولاً رقمية متكاملة تشمل تصميم واجهات وتجربة المستخدم وتطوير الواجهات والأنظمة الخلفية وتطبيقات الهواتف.',
    },
    {
      question: 'هل تعملون مع المشاريع الناشئة؟',
      answer: 'نعم، نعمل مع الشركات الناشئة ورواد الأعمال في مختلف المراحل لبناء النماذج الأولية (MVP) والمنتجات القابلة للنمو السريع.',
    },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? -1 : index);
  };

  return (
    <div className="contact-page-root">
      {/* 1. Hero Section matching Figma design */}
      <ContactHero onNavigate={onNavigate} />

      {/* 2. Contact Information & Form Section */}
      <section className={styles.contactMainSection}>
        {/* Section Heading & Subheading */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionHeading}>
            {'عندك فكــرة؟\nلنحوّلها إلى واقع.'}
          </h2>
          <p className={styles.sectionSubheading}>
            أخبرنا عن مشروعك واحتياجاتك، ودعنا نكتشف معًا كيف يمكن لـ Growtech أن تساعدك في بناء الحل الرقمي المناسب.
          </p>
        </div>

        <div className={styles.container}>
          <div className={styles.cardsWrapper}>
            {/* 1. Dark Blue Info Card (Right Side in RTL) */}
            <div className={styles.infoCard}>
              {/* Background Decorative Rings (Compact Sized Concentric Arcs) */}
              <svg 
                className={styles.cardBgPattern} 
                viewBox="0 0 300 300" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="0" cy="300" r="65" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.4" />
                <circle cx="0" cy="300" r="120" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.4" />
              </svg>

              <div className={styles.infoContentTop}>
                <h3 className={styles.infoTitle}>
                  {'سنساعدك في إيجاد '}
                  <span className={styles.highlightText}>الحل الأنسب</span>
                  <br />
                  {'لمشروعك'}
                </h3>

                <p className={styles.infoDesc}>
                  أخبرنا عن مشروعك واحتياجاتك، ودعنا نكتشف معًا كيف يمكن لـ Growtech أن تساعدك في بناء الحل الرقمي المناسب.
                </p>

                {/* Contact items */}
                <div className={styles.contactList}>
                  {/* Email */}
                  <div className={styles.contactItem}>
                    <div className={styles.contactIconCircle}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="16" rx="2"></rect>
                        <polyline points="22 6 12 13 2 6"></polyline>
                      </svg>
                    </div>
                    <div className={styles.contactTextCol}>
                      <span className={styles.contactLabel}>البريد الإلكتروني</span>
                      <a href="mailto:growtech@gmail.com" className={styles.contactValue} dir="ltr">
                        growtech@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className={styles.contactItem}>
                    <div className={styles.contactIconCircle}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <div className={styles.contactTextCol}>
                      <span className={styles.contactLabel}>رقم الهاتف</span>
                      <a href="tel:+201027545022" className={styles.contactValue} dir="ltr">
                        +20 102 754 5022
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className={styles.contactItem}>
                    <div className={styles.contactIconCircle}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div className={styles.contactTextCol}>
                      <span className={styles.contactLabel}>المقر الرئيسي</span>
                      <a
                        href="#location-map"
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById('location-map')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className={styles.contactValue}
                        style={{ textDecoration: 'none', color: '#FFFFFF' }}
                        title="الانتقال إلى خريطة الموقع"
                      >
                        حي الجامعة، المنصورة، الدقهلية، مصر.
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social links row */}
              <div className={styles.socialRow}>
                <a href="#twitter" aria-label="Twitter" className={styles.socialBtn}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="#linkedin" aria-label="LinkedIn" className={styles.socialBtn}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                </a>
                <a href="#instagram" aria-label="Instagram" className={styles.socialBtn}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>

            {/* 2. Form Card (Left Side in RTL) */}
            <div className={styles.formCard}>
              {submitted ? (
                <div className={styles.successMessage}>
                  شكراً لتواصلك معنا! سنقوم بالرد عليك في أقرب وقت ممكن.
                </div>
              ) : (
                <form className={styles.form} onSubmit={handleSubmit}>
                  {/* Row 1: First Name & Last Name */}
                  <div className={styles.formRow}>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="الاسم الأول"
                      required
                      className={styles.input}
                    />
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="الاسم الأخير"
                      required
                      className={styles.input}
                    />
                  </div>

                  {/* Row 2: Email & Phone */}
                  <div className={styles.formRow}>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="البريد الإلكتروني"
                      required
                      dir="rtl"
                      className={styles.input}
                    />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="رقم الهاتف"
                      dir="rtl"
                      className={styles.input}
                    />
                  </div>

                  {/* Row 3: Service Selection Dropdown */}
                  <div className={styles.selectWrapper}>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={`${styles.select} ${formData.service ? styles.hasValue : ''}`}
                    >
                      <option value="" disabled hidden>
                        الخدمة المطلوبة
                      </option>
                      <option value="uiux">تصميم واجهات وتجربة المستخدم (UI/UX)</option>
                      <option value="frontend">تطوير واجهات أمامية (Frontend)</option>
                      <option value="backend">تطوير أنظمة خلفية (Backend)</option>
                      <option value="mobile">تطوير تطبيقات الهواتف (Flutter / React Native)</option>
                      <option value="fullstack">حلول برمجية متكاملة (Full Stack)</option>
                    </select>
                    <div className={styles.selectIcon}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  </div>

                  {/* Row 4: Message */}
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="اكتب نبذة بسيطة عن فكرتك أو احتياجات مشروعك..."
                    required
                    className={styles.textarea}
                  ></textarea>

                  {/* Submit Button */}
                  <button type="submit" className={styles.submitBtn}>
                    <span>إرسال رسالة</span>
                    <div className={styles.submitIconCircle}>
                      <svg
                        width="20"
                        height="20"
                        viewBox="10 10 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.6503 23C14.6503 23 14.1076 16.0617 15.0846 15.0846C16.0617 14.1076 23 14.6504 23 14.6504M15.5 15.5L25.5 25.5"
                          stroke="#062E88"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Location & Google Map Section */}
      <LocationMapSection />

      {/* 4. FAQ Section (أسئلة شائعة) */}
      <section className={styles.faqSection}>
        <div className={styles.faqHeader}>
          <div className={styles.faqBadge}>
            <span>• قبل أن نبدأ</span>
          </div>
          <h2 className={styles.faqHeading}>أسئلة شائعة</h2>
        </div>

        <div className={styles.faqList}>
          {faqItems.map((item, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className={`${styles.faqItem} ${isOpen ? styles.active : ''}`}
                onClick={() => toggleFaq(index)}
              >
                <div className={styles.faqQuestionRow}>
                  <h3 className={styles.faqQuestion}>{item.question}</h3>
                  <div className={styles.faqToggleIcon}>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.25s ease',
                      }}
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>

                {isOpen && (
                  <p className={styles.faqAnswer}>{item.answer}</p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. CTA Section */}
      <CtaSection />

      {/* 5. Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default ContactPage;
