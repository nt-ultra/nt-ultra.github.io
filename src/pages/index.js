import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import { useState, useRef } from 'react';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className="homepage-grid">
          {/* left side */}
          <div className="homepage-content">
            <Heading as="h1" className="hero__title homepage-title">
              New Tab Ultra . .
            </Heading>
            <p className="hero__subtitle homepage-subtitle">
              . . {siteConfig.tagline}
            </p>
            <div className="homepage-buttons">
              <Link
                className="tofirefox button button--outline button--secondary button--lg"
                to="https://addons.mozilla.org/en-US/firefox/addon/new-tab-ultra-nt-ultra/">
                Firefox
              </Link>
              <Link
                className="tochrome button button--outline button--secondary button--lg"
                to="https://github.com/nt-ultra/nt-ultra">
                Chrome (soon)
              </Link>
              <Link
                className="toedge button button--outline button--secondary button--lg"
                to="https://github.com/nt-ultra/nt-ultra">
                Edge (soon)
              </Link>
            </div>
          </div>

          {/* right side */}
          <div className="homepage-video-wrapper">
            <div className="homepage-video-container">
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className="homepage-video"
              >
                <source src="/demo/ntultra-demo-yt.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* sound overlay */}
              <button
                onClick={toggleMute}
                className="homepage-mute-button"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? '🔇' : '🔊'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
    </Layout>
  );
}