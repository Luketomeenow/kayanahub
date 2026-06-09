import { useCallback, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { MobileTopBar } from '../components/MobileTopBar/MobileTopBar';
import { Sidebar } from '../components/Sidebar/Sidebar';
import { navItems } from '../data/navigation';
import { useBodyScrollLock } from '../hooks/useBodyScrollLock';
import styles from './HubLayout.module.css';

const DESKTOP_BREAKPOINT = 769;

function getActiveNavId(pathname: string): string {
  const match = navItems.find((item) =>
    item.href === '/' ? pathname === '/' : pathname.startsWith(item.href),
  );
  return match?.id ?? 'intro';
}

export function HubLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  useBodyScrollLock(sidebarOpen);

  const closeSidebar = useCallback(() => setSidebarOpen(false), []);
  const toggleSidebar = useCallback(() => setSidebarOpen((open) => !open), []);

  useEffect(() => {
    closeSidebar();
  }, [location.pathname, closeSidebar]);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(min-width: ${DESKTOP_BREAKPOINT}px)`);

    const handleChange = (event: MediaQueryListEvent) => {
      if (event.matches) setSidebarOpen(false);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <div className={styles.layout}>
      <Sidebar
        activeId={getActiveNavId(location.pathname)}
        isOpen={sidebarOpen}
        onClose={closeSidebar}
      />

      <div className={styles.content}>
        <MobileTopBar isMenuOpen={sidebarOpen} onMenuToggle={toggleSidebar} />
        <main className={styles.main}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
