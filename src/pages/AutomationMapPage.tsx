import { useState } from 'react';
import {
  AlertTriangle,
  BarChart3,
  Bot,
  Building2,
  ListChecks,
  CircuitBoard,
  Database,
  Filter,
  GraduationCap,
  Mail,
  RefreshCw,
  Repeat,
  TrendingUp,
  Users,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { PageHeader } from '../components/PageHeader/PageHeader';
import styles from './AutomationMapPage.module.css';

type TabId = 'ops' | 'revenue' | 'talent' | 'data';

const tabs: { id: TabId; label: string }[] = [
  { id: 'ops', label: 'Operations' },
  { id: 'revenue', label: 'Revenue' },
  { id: 'talent', label: 'Talent' },
  { id: 'data', label: 'Data to collect' },
];

interface AutoItem {
  badge: string;
  badgeClass: string;
  text: string;
  sub?: string;
}

interface Pillar {
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  title: string;
  subtitle: string;
  items: AutoItem[];
}

interface DataPillar {
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  title: string;
  subtitle: string;
  metrics: string[];
}

const opsPillars: Pillar[] = [
  {
    icon: Bot,
    iconBg: 'var(--color-status-blue-bg)',
    iconColor: 'var(--color-status-blue-text)',
    title: 'Client intake + scoping',
    subtitle: 'First impression and time-to-placement',
    items: [
      {
        badge: 'n8n / Make',
        badgeClass: styles.badgeBlue,
        text: 'Auto-parse intake forms → score the client brief → route to right ops team lead',
        sub: 'Reduces manual triage from hours to minutes',
      },
      {
        badge: 'Claude API',
        badgeClass: styles.badgeBlue,
        text: "AI that drafts a proposed Remote Ops Stack blueprint from the client's intake answers",
        sub: 'Compresses discovery → proposal from days to same-session',
      },
    ],
  },
  {
    icon: BarChart3,
    iconBg: 'var(--color-status-green-bg)',
    iconColor: 'var(--color-status-green-text)',
    title: 'Performance reporting',
    subtitle: 'Daily visibility + weekly reports — automated',
    items: [
      {
        badge: 'Auto',
        badgeClass: styles.badgeGreen,
        text: 'Pull task completion, response time, and KPI data daily → generate AI-written summaries → deliver to client via Slack/email',
        sub: 'Replaces manual report writing entirely',
      },
      {
        badge: 'Auto',
        badgeClass: styles.badgeGreen,
        text: 'Weekly scorecard auto-generated per operator — tied to SLA thresholds',
        sub: 'Catch performance dips before clients notice them',
      },
    ],
  },
  {
    icon: AlertTriangle,
    iconBg: 'var(--color-status-orange-bg)',
    iconColor: 'var(--color-status-orange-text)',
    title: 'Churn + escalation detection',
    subtitle: 'Proactive, not reactive',
    items: [
      {
        badge: 'AI monitor',
        badgeClass: styles.badgeAmber,
        text: 'Sentiment analysis on client Slack messages + email threads → flag accounts at churn risk',
        sub: 'Surface red accounts to account managers before they cancel',
      },
      {
        badge: 'AI monitor',
        badgeClass: styles.badgeAmber,
        text: 'SLA breach detection → auto-escalate and reassign before client notices',
        sub: 'Same model Kayana built for their PE-backed insurance client — use it internally',
      },
    ],
  },
];

const revenuePillars: Pillar[] = [
  {
    icon: Mail,
    iconBg: 'var(--color-status-blue-bg)',
    iconColor: 'var(--color-status-blue-text)',
    title: 'Outbound pipeline engine',
    subtitle: 'Systematic deal flow, not founder hustle',
    items: [
      {
        badge: 'Apollo + Clay',
        badgeClass: styles.badgeBlue,
        text: 'Auto-enrich PE firm contacts and lower-middle-market portco operators — pull funding rounds, headcount signals, and news triggers',
        sub: 'Prioritize outreach around post-acquisition windows (highest urgency state)',
      },
      {
        badge: 'Claude API',
        badgeClass: styles.badgeBlue,
        text: 'Personalized cold outreach written per prospect using their company context, not a template',
        sub: '1-to-1 quality at 1-to-many volume',
      },
    ],
  },
  {
    icon: Repeat,
    iconBg: 'var(--color-status-green-bg)',
    iconColor: 'var(--color-status-green-text)',
    title: 'Expansion + upsell triggers',
    subtitle: 'Revenue from existing accounts',
    items: [
      {
        badge: 'Auto',
        badgeClass: styles.badgeGreen,
        text: 'Monitor client headcount growth signals → trigger upsell proposal when a portco doubles in size',
      },
      {
        badge: 'Auto',
        badgeClass: styles.badgeGreen,
        text: '90-day client health check flow → auto-propose adding a second operator role before the client thinks to ask',
      },
    ],
  },
  {
    icon: Building2,
    iconBg: '#e0e7ff',
    iconColor: '#4338ca',
    title: 'PE firm relationship layer',
    subtitle: 'Portfolio-wide intelligence',
    items: [
      {
        badge: 'AI agent',
        badgeClass: styles.badgePurple,
        text: 'Track PE firm deal activity → alert the Kayana team when a firm closes a new acquisition → trigger a warm outreach sequence to that portco within 48 hours',
        sub: 'Acquisition + day = highest urgency window for ops staffing',
      },
    ],
  },
];

const talentPillars: Pillar[] = [
  {
    icon: Filter,
    iconBg: 'var(--color-status-blue-bg)',
    iconColor: 'var(--color-status-blue-text)',
    title: 'Candidate screening pipeline',
    subtitle: 'AI-first, human-confirmed',
    items: [
      {
        badge: 'Claude API',
        badgeClass: styles.badgeBlue,
        text: 'Auto-score applications against role criteria → rank and summarize top 10 → only humans review pre-screened shortlist',
      },
      {
        badge: 'Auto',
        badgeClass: styles.badgeBlue,
        text: 'AI voice/text pre-screening agent that qualifies candidates asynchronously before any human call',
        sub: 'Compress recruiter time per hire by 60–70%',
      },
    ],
  },
  {
    icon: ListChecks,
    iconBg: 'var(--color-status-green-bg)',
    iconColor: 'var(--color-status-green-text)',
    title: 'Onboarding automation',
    subtitle: 'Day 1 experience at scale',
    items: [
      {
        badge: 'Auto',
        badgeClass: styles.badgeGreen,
        text: 'Trigger onboarding sequence the moment placement is confirmed — tools access, SOPs, client brief, intro meeting scheduled — zero manual steps',
      },
      {
        badge: 'AI agent',
        badgeClass: styles.badgeGreen,
        text: '30/60/90 day check-in agent that surfaces operator health flags and training gaps automatically',
      },
    ],
  },
  {
    icon: GraduationCap,
    iconBg: 'var(--color-status-orange-bg)',
    iconColor: 'var(--color-status-orange-text)',
    title: 'Continuous upskilling engine',
    subtitle: 'AI training before day one — and after',
    items: [
      {
        badge: 'AI',
        badgeClass: styles.badgeAmber,
        text: 'Personalized AI training paths per operator based on role, client tool stack, and skill gaps detected from performance data',
      },
    ],
  },
];

const dataPillars: DataPillar[] = [
  {
    icon: Users,
    iconBg: 'var(--color-status-blue-bg)',
    iconColor: 'var(--color-status-blue-text)',
    title: 'Client health score',
    subtitle: 'Leading indicator of churn and expansion',
    metrics: [
      'Response time (client → ops)',
      'Slack/email sentiment trend',
      'Weekly task completion rate',
      'NPS at 30/60/90 days',
    ],
  },
  {
    icon: RefreshCw,
    iconBg: 'var(--color-status-green-bg)',
    iconColor: 'var(--color-status-green-text)',
    title: 'Operator performance fingerprint',
    subtitle: 'What makes a top performer — at the data level',
    metrics: [
      'Time-to-autonomy per role',
      'SLA breach frequency',
      'Proactive action rate (vs reactive)',
      'Client-rated quality score',
    ],
  },
  {
    icon: CircuitBoard,
    iconBg: '#e0e7ff',
    iconColor: '#4338ca',
    title: 'Placement match data',
    subtitle: 'The "fit model" that gets smarter over time',
    metrics: [
      'Operator × client industry match',
      'Tool stack overlap at hire',
      'Retention rate by match type',
      'First 30-day performance score',
    ],
  },
  {
    icon: TrendingUp,
    iconBg: 'var(--color-status-orange-bg)',
    iconColor: 'var(--color-status-orange-text)',
    title: 'Revenue intelligence',
    subtitle: 'Where the money actually comes from',
    metrics: [
      'Revenue per operator deployed',
      'CAC by channel',
      'LTV by client segment',
      'Expansion revenue %',
    ],
  },
];

function PillarCard({ pillar }: { pillar: Pillar }) {
  const Icon = pillar.icon;

  return (
    <article className={styles.pillar}>
      <div className={styles.pillarHeader}>
        <div
          className={styles.pillarIcon}
          style={{ background: pillar.iconBg, color: pillar.iconColor }}
        >
          <Icon size={16} strokeWidth={1.75} />
        </div>
        <div>
          <h3 className={styles.pillarTitle}>{pillar.title}</h3>
          <p className={styles.pillarSub}>{pillar.subtitle}</p>
        </div>
      </div>
      <ul className={styles.automationList}>
        {pillar.items.map((item) => (
          <li key={item.text} className={styles.autoItem}>
            <span className={`${styles.autoBadge} ${item.badgeClass}`}>{item.badge}</span>
            <div>
              <p className={styles.autoText}>{item.text}</p>
              {item.sub ? <p className={styles.autoSub}>{item.sub}</p> : null}
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
}

function DataPillarCard({ pillar }: { pillar: DataPillar }) {
  const Icon = pillar.icon;

  return (
    <article className={styles.pillar}>
      <div className={styles.pillarHeader}>
        <div
          className={styles.pillarIcon}
          style={{ background: pillar.iconBg, color: pillar.iconColor }}
        >
          <Icon size={16} strokeWidth={1.75} />
        </div>
        <div>
          <h3 className={styles.pillarTitle}>{pillar.title}</h3>
          <p className={styles.pillarSub}>{pillar.subtitle}</p>
        </div>
      </div>
      <div className={styles.dataGrid}>
        {pillar.metrics.map((metric) => (
          <div key={metric} className={styles.dataCard}>
            <p className={styles.dataLabel}>Track</p>
            <p className={styles.dataMetric}>{metric}</p>
          </div>
        ))}
      </div>
    </article>
  );
}

export function AutomationMapPage() {
  const [activeTab, setActiveTab] = useState<TabId>('ops');

  return (
    <>
      <PageHeader
        badge="STRATEGY MAP"
        title="AI Automation"
        titleAccent="Map"
        subtitle="Kayana AI automation and data strategy for scaling in 2026 — operations, revenue, talent, and the data to capture now."
        meta={[
          { icon: Bot, label: '4 automation pillars' },
          { icon: Database, label: 'Critical data tracking' },
          { icon: TrendingUp, label: '2026 scaling roadmap' },
        ]}
      />

      <section className={styles.section}>
        <div className={styles.tabRow} role="tablist" aria-label="Automation map sections">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.id}
              className={`${styles.tabBtn} ${activeTab === tab.id ? styles.tabBtnActive : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === 'ops' && (
          <div role="tabpanel">
            <p className={styles.sectionTitle}>Internal operations automation</p>
            {opsPillars.map((pillar) => (
              <PillarCard key={pillar.title} pillar={pillar} />
            ))}
          </div>
        )}

        {activeTab === 'revenue' && (
          <div role="tabpanel">
            <p className={styles.sectionTitle}>Revenue + growth automation</p>
            {revenuePillars.map((pillar) => (
              <PillarCard key={pillar.title} pillar={pillar} />
            ))}
          </div>
        )}

        {activeTab === 'talent' && (
          <div role="tabpanel">
            <p className={styles.sectionTitle}>Talent operations automation</p>
            {talentPillars.map((pillar) => (
              <PillarCard key={pillar.title} pillar={pillar} />
            ))}
          </div>
        )}

        {activeTab === 'data' && (
          <div role="tabpanel">
            <p className={styles.sectionTitle}>Critical data Kayana must start capturing now</p>
            {dataPillars.map((pillar) => (
              <DataPillarCard key={pillar.title} pillar={pillar} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
