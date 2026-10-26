import React from 'react';
import { ServicesHero } from './ServicesHero';
import { ServicesListSection } from './ServicesListSection';
import { ProcessSection } from '../Process/ProcessSection';
import { ProjectStagesSection } from './ProjectStagesSection';
import { Footer } from '../Footer/Footer';

export const ServicesPage = ({ onNavigate }) => {
  return (
    <div className="services-page-root">
      {/* 1. Services Hero Banner matching Figma */}
      <ServicesHero onNavigate={onNavigate} />

      {/* 2. Process Section: 'كيف نعمل - من الفكرة إلى منتج رقمي ناجح' */}
      <ProcessSection />

      {/* 3. Detailed Services Grid with Hover Watermark Animation */}
      <ServicesListSection />

      {/* 4. Project Stages Section: 'مهما كانت مرحلة مشروعك، نحن هنا لنساعدك.' */}
      <ProjectStagesSection onNavigate={onNavigate} />

      {/* 5. Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default ServicesPage;
