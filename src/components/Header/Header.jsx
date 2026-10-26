import React, { useState, useEffect } from 'react';
import styles from '../Hero/Hero.module.css';

export const Header = ({ activePage = 'الرئيسية', onNavigate }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = [
    { label: 'الرئيسية', id: 'home' },
    { label: 'الخدمات', id: 'services' },
    { label: 'من نحن', id: 'about' },
    { label: 'أعمالنا', id: 'portfolio' },
    { label: 'تواصل معنا', id: 'contact' },
  ];

  const handleClick = (e, item) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(item.id);
    }
  };

  const isItemActive = (item) => {
    return activePage === item.label || activePage === item.id;
  };

  // Close sidebar on Esc key & lock body scroll
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsSidebarOpen(false);
    };

    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isSidebarOpen]);

  return (
    <>
      <header className={styles.navbar}>
        {/* Right Side of Page: Brand Logo */}
        <div 
          className={styles.brandLogo}
          onClick={(e) => onNavigate && handleClick(e, { id: 'home' })}
          style={{ cursor: onNavigate ? 'pointer' : 'default' }}
        >
          <div className={styles.logoIcon}>
            <img src="/icons/Frame 20.svg" alt="Growtech" width="32" height="32" />
          </div>
          <span className={styles.brandName}>Growtech</span>
        </div>

        {/* Center of Page: Navigation Menu (Desktop) */}
        <nav className={styles.navMenu}>
          <ul className={styles.navList}>
            {navItems.map((item, index) => {
              const active = isItemActive(item);
              return (
                <li key={index} className={styles.navItem}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleClick(e, item)}
                    className={`${styles.navLink} ${active ? styles.active : ''}`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Left Side of Page: Secondary Action Button (Desktop) */}
        <div className={styles.navAction}>
          <button 
            className={styles.navBtnSecondary}
            onClick={(e) => onNavigate && handleClick(e, { id: 'contact' })}
          >
            تواصل معنا الآن
          </button>
        </div>

        {/* Hamburger Button for Mobile / Responsive Side Bar */}
        <button
          type="button"
          className={styles.hamburgerBtn}
          onClick={() => setIsSidebarOpen(true)}
          aria-label="فتح القائمة الجانبية"
        >
          <span className={styles.hamburgerBar} />
          <span className={styles.hamburgerBar} />
          <span className={styles.hamburgerBar} />
        </button>
      </header>

      {/* Mobile Sidebar Backdrop Overlay */}
      <div
        className={`${styles.mobileBackdrop} ${isSidebarOpen ? styles.backdropOpen : ''}`}
        onClick={() => setIsSidebarOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Slide-out Sidebar */}
      <aside
        className={`${styles.mobileSidebar} ${isSidebarOpen ? styles.sidebarOpen : ''}`}
        aria-label="القائمة الجانبية"
      >
        <div className={styles.sidebarHeader}>
          <div
            className={styles.brandLogo}
            onClick={(e) => {
              setIsSidebarOpen(false);
              onNavigate && handleClick(e, { id: 'home' });
            }}
            role="button"
            tabIndex={0}
          >
            <div className={styles.logoIcon}>
              <img src="/icons/Frame 20.svg" alt="Growtech" width="28" height="28" />
            </div>
            <span className={styles.brandName}>Growtech</span>
          </div>

          <button
            type="button"
            className={styles.sidebarCloseBtn}
            onClick={() => setIsSidebarOpen(false)}
            aria-label="إغلاق القائمة الجانبية"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <ul className={styles.sidebarNavList}>
          {navItems.map((item, index) => {
            const active = isItemActive(item);
            return (
              <li key={index} className={styles.sidebarNavItem}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    setIsSidebarOpen(false);
                    handleClick(e, item);
                  }}
                  className={`${styles.sidebarNavLink} ${active ? styles.sidebarActive : ''}`}
                >
                  <span>{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>

        <div className={styles.sidebarFooter}>
          <button
            type="button"
            className={styles.sidebarCtaBtn}
            onClick={(e) => {
              setIsSidebarOpen(false);
              onNavigate && handleClick(e, { id: 'contact' });
            }}
          >
            تواصل معنا الآن
          </button>
        </div>
      </aside>
    </>
  );
};



