import { Menu, Sparkles, X } from 'lucide-react';
import styles from './MobileTopBar.module.css';

interface MobileTopBarProps {
  isMenuOpen: boolean;
  onMenuToggle: () => void;
}

export function MobileTopBar({ isMenuOpen, onMenuToggle }: MobileTopBarProps) {
  return (
    <header className={styles.bar}>
      <div className={styles.brand}>
        <div className={styles.brandIcon}>
          <Sparkles size={16} strokeWidth={2} />
        </div>
        <div className={styles.brandText}>
          <span className={styles.brandName}>hirekayana</span>
          <span className={styles.brandSub}>Strategy Hub</span>
        </div>
      </div>

      <button
        type="button"
        className={styles.menuBtn}
        onClick={onMenuToggle}
        aria-expanded={isMenuOpen}
        aria-controls="main-sidebar"
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
      >
        {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
    </header>
  );
}
