import { ArrowRight, GitBranch, Map, Sparkles, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader/PageHeader';
import styles from './IntroPage.module.css';

const resources = [
  {
    to: '/automation-map',
    icon: Map,
    label: 'AI Automation Map',
    description:
      'A strategic map of where Kayana should automate operations, revenue, and talent — plus the data to start capturing now.',
    highlights: ['Ops & revenue automations', 'Talent pipeline design', 'Critical data tracking'],
  },
  {
    to: '/pe-pipeline',
    icon: GitBranch,
    label: 'PE Outbound Pipeline',
    description:
      'A signal-triggered outbound system that turns PE deal flow into Kayana pipeline — from acquisition alerts to booked calls.',
    highlights: ['48h post-close outreach', '7-stage automation', 'AI-personalized messaging'],
  },
];

export function IntroPage() {
  return (
    <>
      <PageHeader
        badge="KAYANA STRATEGY HUB"
        title="Kayana"
        titleAccent="Strategy Hub"
        subtitle="Your central workspace for Kayana's growth strategy — outbound pipeline design, AI automation priorities, and the systems to scale in 2026."
        meta={[
          { icon: Sparkles, label: 'Built for the Kayana team' },
          { icon: Target, label: '2 strategic resources' },
        ]}
      />

      <section className={styles.section}>
        <div className={styles.about}>
          <p className={styles.eyebrow}>About this hub</p>
          <h2 className={styles.heading}>What you&apos;ll find here</h2>
          <p className={styles.lead}>
            This hub brings together Kayana&apos;s key strategic playbooks in one place. Each
            resource is designed to be actionable — use them to align on priorities, plan
            automations, and move from strategy to execution.
          </p>
        </div>

        <div className={styles.grid}>
          {resources.map((resource) => {
            const Icon = resource.icon;

            return (
              <Link key={resource.to} to={resource.to} className={styles.card}>
                <div className={styles.cardIcon}>
                  <Icon size={20} strokeWidth={1.75} />
                </div>

                <h3 className={styles.cardTitle}>{resource.label}</h3>
                <p className={styles.cardDescription}>{resource.description}</p>

                <ul className={styles.highlights}>
                  {resource.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <span className={styles.cardCta}>
                  Open resource
                  <ArrowRight size={14} strokeWidth={2} />
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
