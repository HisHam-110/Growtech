import React from 'react';
import { Header } from '../Header/Header';
import { PortfolioHero } from './PortfolioHero';
import { PortfolioGridSection } from './PortfolioGridSection';
import { Footer } from '../Footer/Footer';

export const PortfolioPage = ({ onNavigate }) => {
  return (
    <div className="portfolio-page-root" dir="rtl">
      {/* Top Header Navigation on White Background */}
      <Header activePage="أعمالنا" onNavigate={onNavigate} />

      {/* 1. Hero Section: 'أفكار تحوّلت إلى تجارب رقمية حقيقية.' with Tilted Cards */}
      <PortfolioHero onNavigate={onNavigate} />

      {/* 2. 'سابقة أعمالنا - أعمال نفخر ببنائها' 3-Cards Section */}
      <PortfolioGridSection onNavigate={onNavigate} />

      {/* 3. Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default PortfolioPage;
