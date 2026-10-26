import React from 'react';
import styles from '../Hero/Hero.module.css';

export const Header = ({ activePage = 'الرئيسية', onNavigate }) => {
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

  return (
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

      {/* Center of Page: Navigation Menu */}
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

      {/* Left Side of Page: Secondary Action Button */}
      <div className={styles.navAction}>
        <button 
          className={styles.navBtnSecondary}
          onClick={(e) => onNavigate && handleClick(e, { id: 'contact' })}
        >
          تواصل معنا الآن
        </button>
      </div>
    </header>
  );
};


