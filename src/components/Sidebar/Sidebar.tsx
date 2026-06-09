import { useEffect } from 'react';
import { Sparkles, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { navItems } from '../../data/navigation';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import styles from './Sidebar.module.css';

interface SidebarProps {
  activeId?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

export function Sidebar({ activeId = 'intro', isOpen = false, onClose }: SidebarProps) {
  const isMobile = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    if (!isOpen || !onClose) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleNavClick = () => {
    onClose?.();
  };

  return (
    <>
      <button
        type="button"
        className={`${styles.backdrop} ${isOpen ? styles.backdropVisible : ''}`}
        onClick={onClose}
        aria-hidden={!isOpen}
        tabIndex={isOpen ? 0 : -1}
        aria-label="Close menu"
      />

      <aside
        id="main-sidebar"
        className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ''}`}
        aria-hidden={isMobile ? !isOpen : undefined}
      >
        <div className={styles.mobileHeader}>
          <div className={styles.brand}>
            <div className={styles.brandIcon}>
              <Sparkles size={18} strokeWidth={2} />
            </div>
            <div className={styles.brandText}>
              <span className={styles.brandName}>hirekayana</span>
              <span className={styles.brandSub}>Strategy Hub</span>
            </div>
          </div>

          <button
            type="button"
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <div className={styles.desktopBrand}>
          <div className={styles.brand}>
            <div className={styles.brandIcon}>
              <Sparkles size={18} strokeWidth={2} />
            </div>
            <div className={styles.brandText}>
              <span className={styles.brandName}>hirekayana</span>
              <span className={styles.brandSub}>Strategy Hub</span>
            </div>
          </div>
        </div>

        <nav className={styles.nav} aria-label="Main navigation">
          <ul className={styles.navList}>
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = item.id === activeId;

              return (
                <li key={item.id}>
                  <Link
                    to={item.href}
                    className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
                    aria-current={isActive ? 'page' : undefined}
                    onClick={handleNavClick}
                  >
                    <Icon size={18} strokeWidth={1.75} />
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className={styles.footer}>
          <div className={styles.footerBadge}>KAYANA STRATEGY HUB</div>
        </div>
      </aside>
    </>
  );
}
