import { useEffect, useRef, useState } from 'react';
import { hubEmbedTheme } from '../../styles/hubEmbedTheme';
import styles from './EmbeddedHtmlFrame.module.css';

interface EmbeddedHtmlFrameProps {
  src: string;
  title: string;
  hideSelectors?: readonly string[];
}

const DEFAULT_HIDE_SELECTORS = ['.header', '.hero', '.footer'] as const;

const INTER_FONT =
  '<link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />';

function prepareHtml(
  html: string,
  hideSelectors: readonly string[],
  extraTheme = '',
): string {
  const parsed = new DOMParser().parseFromString(html, 'text/html');

  hideSelectors.forEach((selector) => {
    parsed.querySelector(selector)?.remove();
  });

  if (!parsed.querySelector('meta[name="viewport"]')) {
    const viewport = document.createElement('meta');
    viewport.name = 'viewport';
    viewport.content = 'width=device-width, initial-scale=1.0';
    parsed.head.prepend(viewport);
  }

  const themeStyle = document.createElement('style');
  themeStyle.textContent = `${hubEmbedTheme}\n${extraTheme}`;
  parsed.head.appendChild(themeStyle);

  const fontWrapper = document.createElement('div');
  fontWrapper.innerHTML = INTER_FONT;
  Array.from(fontWrapper.childNodes).forEach((node) => {
    parsed.head.appendChild(node);
  });

  return `<!DOCTYPE html>\n${parsed.documentElement.outerHTML}`;
}

export function EmbeddedHtmlFrame({
  src,
  title,
  hideSelectors = DEFAULT_HIDE_SELECTORS,
}: EmbeddedHtmlFrameProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [srcdoc, setSrcdoc] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setReady(false);

    fetch(src)
      .then((response) => response.text())
      .then((html) => {
        if (cancelled) return;
        setSrcdoc(prepareHtml(html, hideSelectors));
        setLoading(false);
      })
      .catch(() => {
        if (cancelled) return;
        setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [src, hideSelectors]);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe || !srcdoc) return;

    const resize = () => {
      const doc = iframe.contentDocument;
      if (!doc?.body) return;
      const height = Math.max(
        doc.documentElement.scrollHeight,
        doc.body.scrollHeight,
      );
      iframe.style.height = `${height}px`;
    };

    const handleLoad = () => {
      resize();
      requestAnimationFrame(() => setReady(true));
    };

    iframe.addEventListener('load', handleLoad);

    const doc = iframe.contentDocument;
    const body = doc?.body;
    const observer =
      body && typeof ResizeObserver !== 'undefined'
        ? new ResizeObserver(resize)
        : null;

    if (body) observer?.observe(body);

    return () => {
      iframe.removeEventListener('load', handleLoad);
      observer?.disconnect();
    };
  }, [srcdoc]);

  return (
    <div className={styles.wrapper}>
      {loading ? (
        <div className={styles.skeleton} aria-hidden="true">
          <div className={styles.skeletonTabs} />
          <div className={styles.skeletonCard} />
          <div className={styles.skeletonCard} />
          <div className={styles.skeletonCard} />
        </div>
      ) : null}

      {!loading && !srcdoc ? (
        <div className={styles.error}>Unable to load content.</div>
      ) : null}

      {srcdoc ? (
        <iframe
          ref={iframeRef}
          className={`${styles.frame} ${ready ? styles.frameReady : ''}`}
          title={title}
          srcDoc={srcdoc}
          scrolling="no"
        />
      ) : null}
    </div>
  );
}
