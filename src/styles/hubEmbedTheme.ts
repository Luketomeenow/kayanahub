export const hubEmbedTheme = `
  :root {
    --black: #f8fafc;
    --white: #0f172a;
    --cream: #ffffff;
    --accent: #ff6b35;
    --accent-light: #ffedd5;
    --accent-mid: #ff6b35;
    --gray-1: #ffffff;
    --gray-2: #e2e8f0;
    --gray-3: #cbd5e1;
    --gray-4: #64748b;
    --gray-5: #475569;
    --gray-6: #f1f5f9;
    --green: #10b981;
    --green-light: #d1fae5;
    --blue: #6366f1;
    --blue-light: #e0e7ff;
    --amber: #c2410c;
    --amber-light: #ffedd5;
    --purple: #4338ca;
    --purple-light: #e0e7ff;
    --font-display: 'Inter', system-ui, sans-serif;
    --font-body: 'Inter', system-ui, sans-serif;
    --font-mono: 'Inter', system-ui, sans-serif;
    --radius: 10px;
    --radius-lg: 16px;
    --shadow-sm: 0 1px 2px rgba(15, 23, 42, 0.04);
    --shadow-md: 0 4px 12px rgba(15, 23, 42, 0.06);
  }

  * {
    -webkit-font-smoothing: antialiased;
  }

  body {
    background: #f8fafc !important;
    color: #0f172a !important;
    font-family: 'Inter', system-ui, sans-serif !important;
    margin: 0 !important;
    padding: 0 !important;
    line-height: 1.5 !important;
  }

  .header,
  .hero,
  .footer {
    display: none !important;
  }

  /* ── Tab navigation ── */
  .nav-tabs {
    position: sticky;
    top: 0;
    z-index: 10;
    display: flex;
    gap: 8px;
    padding: 16px 24px;
    margin: 0;
    background: rgba(248, 250, 252, 0.92);
    backdrop-filter: blur(8px);
    border-bottom: 1px solid #e2e8f0;
    overflow-x: auto;
    scrollbar-width: none;
    -webkit-overflow-scrolling: touch;
  }

  .nav-tabs::-webkit-scrollbar {
    display: none;
  }

  .tab-btn {
    font-family: 'Inter', system-ui, sans-serif !important;
    font-size: 12px !important;
    font-weight: 600 !important;
    letter-spacing: 0.02em !important;
    text-transform: none !important;
    color: #64748b !important;
    background: #ffffff !important;
    border: 1px solid #e2e8f0 !important;
    border-bottom: 1px solid #e2e8f0 !important;
    border-radius: 999px !important;
    padding: 8px 16px !important;
    white-space: nowrap;
    flex-shrink: 0;
    transition: all 0.15s ease !important;
  }

  .tab-btn:hover {
    color: #0f172a !important;
    border-color: #ff6b35 !important;
  }

  .tab-btn.active {
    color: #ff6b35 !important;
    background: rgba(255, 107, 53, 0.1) !important;
    border-color: transparent !important;
  }

  /* ── Section headers ── */
  .section {
    padding: 32px 24px 48px;
    max-width: 1200px;
    margin: 0 auto;
  }

  .section-head {
    margin-bottom: 28px;
  }

  .section-label {
    font-family: 'Inter', system-ui, sans-serif !important;
    font-size: 11px !important;
    font-weight: 700 !important;
    color: #ff6b35 !important;
    letter-spacing: 0.1em !important;
    text-transform: uppercase !important;
    margin-bottom: 8px !important;
  }

  .section-title {
    font-family: 'Inter', system-ui, sans-serif !important;
    font-size: clamp(1.35rem, 3vw, 1.75rem) !important;
    font-weight: 800 !important;
    letter-spacing: -0.03em !important;
    color: #0f172a !important;
    line-height: 1.2 !important;
    margin-bottom: 8px !important;
  }

  .section-sub {
    font-size: 14px !important;
    color: #64748b !important;
    line-height: 1.65 !important;
    max-width: 640px;
  }

  /* ── Pipeline stages ── */
  .pipeline {
    display: flex;
    flex-direction: column;
    gap: 12px !important;
    margin-bottom: 32px;
  }

  .pipeline-stage {
    display: grid;
    grid-template-columns: minmax(180px, 220px) 1fr minmax(160px, 200px);
    gap: 0;
    background: #ffffff !important;
    border: 1px solid #e2e8f0 !important;
    border-radius: 16px !important;
    overflow: hidden;
    box-shadow: var(--shadow-sm);
    transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.15s ease;
  }

  .pipeline-stage:hover {
    border-color: #cbd5e1 !important;
    box-shadow: var(--shadow-md);
    transform: translateY(-1px);
  }

  .stage-num {
    background: #ffffff !important;
    border-right: 1px solid #e2e8f0 !important;
    padding: 20px 22px !important;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .stage-index {
    font-family: 'Inter', system-ui, sans-serif !important;
    font-size: 11px !important;
    font-weight: 600 !important;
    color: #94a3b8 !important;
    letter-spacing: 0.06em !important;
    text-transform: uppercase;
  }

  .stage-name {
    font-size: 15px !important;
    font-weight: 700 !important;
    color: #0f172a !important;
    line-height: 1.3 !important;
    letter-spacing: -0.01em;
  }

  .stage-tool {
    display: inline-flex !important;
    align-self: flex-start;
    font-family: 'Inter', system-ui, sans-serif !important;
    font-size: 10px !important;
    font-weight: 600 !important;
    padding: 5px 10px !important;
    border-radius: 999px !important;
    margin-top: 2px !important;
    letter-spacing: 0.02em;
  }

  .tool-clay { background: #1a2e22 !important; color: #6ee7b7 !important; border: none !important; }
  .tool-apollo { background: #1a1e2e !important; color: #a5b4fc !important; border: none !important; }
  .tool-n8n { background: #2e221a !important; color: #fdba74 !important; border: none !important; }
  .tool-claude { background: #221a2e !important; color: #c4b5fd !important; border: none !important; }
  .tool-make { background: #0f172a !important; color: #7dd3fc !important; border: none !important; }
  .tool-slack { background: #1e293b !important; color: #fde047 !important; border: none !important; }
  .tool-hubspot { background: #2e1a1a !important; color: #fca5a5 !important; border: none !important; }

  .stage-body {
    padding: 20px 22px !important;
    border-right: 1px solid #e2e8f0 !important;
    background: #ffffff !important;
  }

  .stage-desc {
    font-size: 14px !important;
    color: #64748b !important;
    line-height: 1.65 !important;
    margin-bottom: 14px !important;
  }

  .stage-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .action-chip {
    font-size: 12px !important;
    font-weight: 500 !important;
    color: #475569 !important;
    background: #f1f5f9 !important;
    border: 1px solid #e2e8f0 !important;
    border-radius: 999px !important;
    padding: 6px 12px !important;
    line-height: 1.3;
  }

  .stage-output {
    padding: 20px 22px !important;
    min-width: 0 !important;
    background: #f8fafc !important;
    display: flex;
    flex-direction: column;
    gap: 6px;
    justify-content: center;
  }

  .output-label {
    font-family: 'Inter', system-ui, sans-serif !important;
    font-size: 10px !important;
    font-weight: 700 !important;
    color: #94a3b8 !important;
    letter-spacing: 0.1em !important;
    text-transform: uppercase;
  }

  .output-val {
    font-size: 14px !important;
    font-weight: 700 !important;
    color: #0f172a !important;
    letter-spacing: -0.01em;
  }

  .output-sub {
    font-size: 12px !important;
    color: #64748b !important;
    line-height: 1.45 !important;
  }

  /* ── Signal cards ── */
  .signal-grid {
    gap: 14px !important;
  }

  .signal-card {
    background: #ffffff !important;
    border: 1px solid #e2e8f0 !important;
    border-radius: 16px !important;
    box-shadow: var(--shadow-sm);
    transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.15s ease !important;
  }

  .signal-card:hover {
    border-color: #ff6b35 !important;
    box-shadow: var(--shadow-md);
    transform: translateY(-2px) !important;
  }

  .signal-title,
  .icp-table .highlight,
  .msg-subject,
  .stack-tool-name,
  .sprint-title,
  .metric-value,
  .callout-text strong {
    color: #0f172a !important;
  }

  .signal-desc,
  .signal-trigger,
  .icp-table td,
  .msg-text,
  .stack-tool-desc,
  .sprint-task,
  .metric-target,
  .callout-text {
    color: #64748b !important;
  }

  .signal-trigger,
  .sprint-deliverable {
    color: #ff6b35 !important;
  }

  .p-critical { background: #fef2f2 !important; color: #dc2626 !important; border: 1px solid #fecaca !important; }
  .p-high { background: #ffedd5 !important; color: #c2410c !important; border: 1px solid #fed7aa !important; }
  .p-medium { background: #e0e7ff !important; color: #4338ca !important; border: 1px solid #c7d2fe !important; }

  /* ── ICP table ── */
  .icp-table th {
    font-family: 'Inter', system-ui, sans-serif !important;
    font-size: 11px !important;
    font-weight: 700 !important;
    color: #94a3b8 !important;
    background: #f8fafc;
  }

  .icp-table td {
    font-size: 13px !important;
    border-color: #e2e8f0 !important;
  }

  .icp-table tr:hover td {
    background: #f8fafc !important;
  }

  .score-fill {
    background: #ff6b35 !important;
  }

  /* ── Message templates ── */
  .msg-card {
    background: #ffffff !important;
    border: 1px solid #e2e8f0 !important;
    border-radius: 16px !important;
    box-shadow: var(--shadow-sm);
    overflow: hidden;
  }

  .msg-header {
    background: #f8fafc !important;
    border-color: #e2e8f0 !important;
  }

  .persona-pe { background: #e0e7ff !important; color: #4338ca !important; border: none !important; }
  .persona-portco { background: #d1fae5 !important; color: #047857 !important; border: none !important; }

  .msg-text .var {
    color: #ff6b35 !important;
    font-family: 'Inter', system-ui, sans-serif !important;
    font-weight: 600;
    background: #ffedd5;
    padding: 1px 5px;
    border-radius: 4px;
  }

  .copy-btn {
    font-family: 'Inter', system-ui, sans-serif !important;
    font-size: 11px !important;
    font-weight: 600 !important;
    letter-spacing: 0.04em !important;
    color: #0f172a !important;
    border: 1px solid #e2e8f0 !important;
    border-radius: 999px !important;
    padding: 8px 16px !important;
    transition: all 0.15s ease !important;
  }

  .copy-btn:hover {
    border-color: #ff6b35 !important;
    background: rgba(255, 107, 53, 0.04) !important;
    color: #0f172a !important;
  }

  .copy-btn.copied {
    color: #047857 !important;
    border-color: #10b981 !important;
    background: #d1fae5 !important;
  }

  /* ── Tech stack & sprint ── */
  .stack-card,
  .sprint-card,
  .metric-card {
    background: #ffffff !important;
    border: 1px solid #e2e8f0 !important;
    border-radius: 16px !important;
    box-shadow: var(--shadow-sm);
    transition: border-color 0.2s ease, box-shadow 0.2s ease !important;
  }

  .stack-card:hover,
  .sprint-card:hover,
  .metric-card:hover {
    border-color: #cbd5e1 !important;
    box-shadow: var(--shadow-md);
  }

  .task-dot {
    background: #ff6b35 !important;
  }

  .metric-value {
    font-family: 'Inter', system-ui, sans-serif !important;
    font-weight: 800 !important;
    color: #0f172a !important;
  }

  .metric-target span {
    color: #ff6b35 !important;
  }

  /* ── Callout ── */
  .callout {
    background: #ffffff !important;
    border: 1px solid #e2e8f0 !important;
    border-left: 4px solid #ff6b35 !important;
    border-radius: 0 16px 16px 0 !important;
    box-shadow: var(--shadow-sm);
  }

  .callout-label {
    color: #ff6b35 !important;
    font-weight: 700 !important;
  }

  .divider {
    border-color: #e2e8f0 !important;
  }

  /* ── Mobile ── */
  @media (max-width: 900px) {
    .pipeline-stage {
      grid-template-columns: 1fr !important;
    }

    .stage-num,
    .stage-body {
      border-right: none !important;
      border-bottom: 1px solid #e2e8f0 !important;
    }

    .stage-output {
      border-bottom: none !important;
    }

    .signal-grid {
      grid-template-columns: 1fr !important;
    }

    .stack-grid {
      grid-template-columns: repeat(2, 1fr) !important;
    }

    .sprint-grid {
      grid-template-columns: 1fr !important;
    }

    .metrics-grid {
      grid-template-columns: repeat(2, 1fr) !important;
    }

    .msg-grid {
      grid-template-columns: 1fr !important;
    }
  }

  @media (max-width: 768px) {
    .nav-tabs {
      padding: 12px 16px;
      gap: 6px;
    }

    .tab-btn {
      font-size: 11px !important;
      padding: 7px 14px !important;
    }

    .section {
      padding: 24px 16px 40px;
    }

    .stage-num,
    .stage-body,
    .stage-output {
      padding: 16px 18px !important;
    }

    .stage-actions {
      gap: 6px;
    }

    .action-chip {
      font-size: 11px !important;
      padding: 5px 10px !important;
    }

    .stack-grid,
    .metrics-grid {
      grid-template-columns: 1fr !important;
    }

    .icp-table {
      display: block;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
    }
  }

  @media (max-width: 480px) {
    .section-title {
      font-size: 1.25rem !important;
    }
  }
`;

export const hubAutomationTheme = `
  :root {
    --color-text-primary: #0f172a;
    --color-text-secondary: #64748b;
    --color-text-info: #4338ca;
    --color-text-success: #047857;
    --color-text-warning: #c2410c;
    --color-background-primary: #ffffff;
    --color-background-secondary: #f8fafc;
    --color-background-info: #e0e7ff;
    --color-background-success: #d1fae5;
    --color-background-warning: #ffedd5;
    --color-border-tertiary: #e2e8f0;
    --color-border-secondary: #e2e8f0;
    --border-radius-lg: 16px;
    --border-radius-md: 10px;
  }
`;
