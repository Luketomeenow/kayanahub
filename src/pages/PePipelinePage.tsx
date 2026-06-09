import { Clock, GitBranch, Target, Zap } from 'lucide-react';
import { EmbeddedHtmlFrame } from '../components/EmbeddedContent/EmbeddedHtmlFrame';
import { PageHeader } from '../components/PageHeader/PageHeader';

export function PePipelinePage() {
  return (
    <>
      <PageHeader
        badge="PE OUTBOUND SYSTEM"
        title="PE Outbound"
        titleAccent="Pipeline"
        subtitle="A signal-triggered, AI-personalized outbound system that turns PE deal flow into Kayana pipeline — fully automated from signal detection to booked call."
        meta={[
          { icon: Clock, label: '48h post-close outreach target' },
          { icon: Zap, label: '5× personalization at scale' },
          { icon: Target, label: '3 ICP tiers' },
          { icon: GitBranch, label: '7-stage automated pipeline' },
        ]}
      />
      <EmbeddedHtmlFrame
        src="/kayana_pe_outbound_pipeline.html"
        title="PE Outbound Pipeline System"
      />
    </>
  );
}
