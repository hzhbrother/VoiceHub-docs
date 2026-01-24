import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroContent}>
        <Heading as="h1" className={styles.heroTitle}>
          华青之声点歌台
        </Heading>
        <p className={styles.heroSubtitle}>
          华青之声点歌台 - 校园专属的音乐点歌平台，让音乐陪伴你的校园生活
        </p>
        <div className={styles.heroButtons}>
          <Link
            className={clsx('button button--primary button--lg', styles.heroButton)}
            to="/docs/intro">
            开始使用 📚
          </Link>
          <Link
            className={clsx('button button--secondary button--lg', styles.heroButton)}
            href="https://www.hwfm.online/"
            target="_blank">
            进入点歌台 🎵
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} 使用指南`}
      description="华青之声点歌台使用指南 - 校园专属的音乐点歌平台">
      <HomepageHeader />
    </Layout>
  );
}
