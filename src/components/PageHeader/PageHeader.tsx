import type { LucideIcon } from 'lucide-react';
import styles from './PageHeader.module.css';

export interface PageHeaderMeta {
  icon: LucideIcon;
  label: string;
}

interface PageHeaderProps {
  badge: string;
  title: string;
  titleAccent?: string;
  subtitle: string;
  meta?: PageHeaderMeta[];
}

export function PageHeader({
  badge,
  title,
  titleAccent,
  subtitle,
  meta,
}: PageHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.badge}>{badge}</div>

      <h1 className={styles.title}>
        {title}
        {titleAccent ? (
          <>
            {' '}
            <span className={styles.titleAccent}>{titleAccent}</span>
          </>
        ) : null}
      </h1>

      <p className={styles.subtitle}>{subtitle}</p>

      {meta && meta.length > 0 ? (
        <div className={styles.meta}>
          {meta.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className={styles.metaItem}>
                <Icon size={15} strokeWidth={1.75} />
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>
      ) : null}
    </header>
  );
}
