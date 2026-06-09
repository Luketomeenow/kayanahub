import type { LucideIcon } from 'lucide-react';
import { GitBranch, Home, Map } from 'lucide-react';

export interface NavItem {
  id: string;
  label: string;
  icon: LucideIcon;
  href: string;
}

export const navItems: NavItem[] = [
  { id: 'intro', label: 'Intro', icon: Home, href: '/' },
  {
    id: 'automation-map',
    label: 'AI Automation Map',
    icon: Map,
    href: '/automation-map',
  },
  {
    id: 'pe-pipeline',
    label: 'PE Outbound Pipeline',
    icon: GitBranch,
    href: '/pe-pipeline',
  },
];
