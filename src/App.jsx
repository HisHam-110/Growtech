import React, { useState, useEffect } from 'react';
import { HeroSection } from './components/Hero/HeroSection';
import { ServicesSection } from './components/Services/ServicesSection';
import { GrowthSection } from './components/Growth/GrowthSection';
import { ProcessSection } from './components/Process/ProcessSection';
import { PortfolioSection } from './components/Portfolio/PortfolioSection';
import { CtaSection } from './components/Cta/CtaSection';
import { Footer } from './components/Footer/Footer';
import { ContactPage } from './components/Contact/ContactPage';
import { AboutPage } from './components/About/AboutPage';
import { ServicesPage } from './components/Services/ServicesPage';
import { PortfolioPage } from './components/Portfolio/PortfolioPage';
import { PortfolioAllProjectsPage } from './components/Portfolio/PortfolioAllProjectsPage';
import { ProjectDetailsPage } from './components/Portfolio/ProjectDetailsPage';
import { TestimonialsSection } from './components/Testimonials/TestimonialsSection';
import { LocationMapSection } from './components/Contact/LocationMapSection';
import { FloatingActions } from './components/common/FloatingActions';
import { PrivacyPage } from './components/Legal/PrivacyPage';
import { TermsPage } from './components/Legal/TermsPage';
import { NotFoundPage } from './components/NotFound/NotFoundPage';
import { allProjects } from './data/projectsData';
import './App.css';

const resolveRoute = (rawHash) => {
  if (typeof rawHash !== 'string') return { page: 'home', projectId: null };
  const clean = rawHash.replace(/^#/, '').trim();
  const lower = decodeURIComponent(clean).toLowerCase();

  // Home / empty
  if (lower === '' || lower === 'home') {
    return { page: 'home', projectId: null };
  }

  // Project details route: project/:id, project-details/:id, project-:id
  if (lower.startsWith('project/') || lower.startsWith('project-details/') || (lower.startsWith('project-') && lower !== 'project-details')) {
    let pId = '';
    if (lower.includes('/')) {
      pId = lower.split('/')[1] || '';
    } else if (lower.startsWith('project-')) {
      pId = lower.replace('project-', '');
    }

    const matched = allProjects.find((p) => p.id.toLowerCase() === pId.toLowerCase());
    if (matched) {
      return { page: 'project-details', projectId: matched.id };
    }
    // Unrecognized project ID -> 404
    return { page: '404', projectId: null };
  }

  // Standalone pages
  if (lower === 'contact' || lower === 'contact-us' || lower === 'تواصل-معنا' || lower === 'تواصل معنا') {
    return { page: 'contact', projectId: null };
  }
  if (lower === 'about' || lower === 'about-us' || lower === 'من نحن' || lower === 'من-نحن') {
    return { page: 'about', projectId: null };
  }
  if (lower === 'services' || lower === 'الخدمات') {
    return { page: 'services', projectId: null };
  }
  if (lower === 'all-projects' || lower === 'portfolio-all' || lower === 'عرض-الكل' || lower === 'عرض الكل' || lower === 'مشاريعنا') {
    return { page: 'all-projects', projectId: null };
  }
  if (lower === 'portfolio' || lower === 'أعمالنا' || lower === 'اعمالنا' || lower === 'projects') {
    return { page: 'portfolio', projectId: null };
  }
  if (lower === 'privacy' || lower === 'privacy-policy' || lower === 'سياسة-الخصوصية' || lower === 'سياسة الخصوصية') {
    return { page: 'privacy', projectId: null };
  }
  if (lower === 'terms' || lower === 'terms-and-conditions' || lower === 'الشروط-والأحكام' || lower === 'الشروط والاحكام') {
    return { page: 'terms', projectId: null };
  }

  // Home section anchors
  const homeSections = ['growth', 'process', 'testimonials', 'location-map', 'cta'];
  if (homeSections.includes(lower)) {
    return { page: 'home', sectionId: lower, projectId: null };
  }

  // Any other URL hash is invalid -> 404
  return { page: '404', projectId: null };
};

function App() {
  const [routeState, setRouteState] = useState(() => {
    if (typeof window !== 'undefined') {
      return resolveRoute(window.location.hash);
    }
    return { page: 'home', projectId: null };
  });

  useEffect(() => {
    const handleHashChange = () => {
      const resolved = resolveRoute(window.location.hash);
      setRouteState(resolved);

      if (resolved.sectionId) {
        setTimeout(() => {
          const el = document.getElementById(resolved.sectionId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 50);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (pageId, extraParam) => {
    if (pageId === 'home') {
      window.location.hash = '#home';
    } else if (pageId === 'project-details' || pageId === 'project') {
      const pId = extraParam || 'east-symbol';
      window.location.hash = `#project/${pId}`;
    } else if (pageId === 'all-projects' || pageId === 'portfolio-all') {
      window.location.hash = '#all-projects';
    } else if (pageId === 'portfolio') {
      window.location.hash = '#portfolio';
    } else if (pageId === 'contact') {
      window.location.hash = '#contact';
    } else if (pageId === 'about') {
      window.location.hash = '#about';
    } else if (pageId === 'services') {
      window.location.hash = '#services';
    } else if (pageId === 'privacy') {
      window.location.hash = '#privacy';
    } else if (pageId === 'terms') {
      window.location.hash = '#terms';
    } else {
      window.location.hash = `#${pageId}`;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentPage = () => {
    if (routeState.page === '404') {
      return <NotFoundPage onNavigate={handleNavigate} />;
    }

    if (routeState.page === 'project-details') {
      return <ProjectDetailsPage projectId={routeState.projectId || 'east-symbol'} onNavigate={handleNavigate} />;
    }

    if (routeState.page === 'contact') {
      return <ContactPage onNavigate={handleNavigate} />;
    }

    if (routeState.page === 'about') {
      return <AboutPage onNavigate={handleNavigate} />;
    }

    if (routeState.page === 'services') {
      return <ServicesPage onNavigate={handleNavigate} />;
    }

    if (routeState.page === 'portfolio') {
      return <PortfolioPage onNavigate={handleNavigate} />;
    }

    if (routeState.page === 'all-projects') {
      return <PortfolioAllProjectsPage onNavigate={handleNavigate} />;
    }

    if (routeState.page === 'privacy') {
      return <PrivacyPage onNavigate={handleNavigate} />;
    }

    if (routeState.page === 'terms') {
      return <TermsPage onNavigate={handleNavigate} />;
    }

    return (
      <div className="app-root">
        <HeroSection onNavigate={handleNavigate} />
        <ServicesSection onNavigate={handleNavigate} />
        <GrowthSection onNavigate={handleNavigate} />
        <ProcessSection />
        <PortfolioSection onNavigate={handleNavigate} />
        <TestimonialsSection />
        <LocationMapSection />
        <CtaSection />
        <Footer onNavigate={handleNavigate} />
      </div>
    );
  };

  return (
    <>
      {renderCurrentPage()}
      <FloatingActions phoneNumber="201027545022" />
    </>
  );
}

export default App;