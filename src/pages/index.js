import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Student',
    imageUrl: 'img/undraw_starry_window_ppm0.svg',
    description: (
      <>
        Discovering ways to develop curiosity and learn more. About <code>everything</code>.
      </>
    ),
  },
  {
    title: 'Creator',
    imageUrl: 'img/undraw_code_thinking_1jeh.svg',
    description: (
      <>
        Working on being more creative and finding outlets for expression and communication.
      </>
    ),
  },
  {
    title: 'Enthusiast',
    imageUrl: 'img/undraw_having_fun_iais.svg',
    description: (
      <>
        Bringing excitement and energy into the world. One interaction at a time.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      // title={`Hello from ${siteConfig.title}`}
      title={`Hello from Me!`}
      description="">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{"Hi, I'm Quinton!"}</h1>
          <p className="hero__subtitle">{"Sharing knowledge and experiences from my own life"}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/startHere')}
              style={{ marginLeft: ".5em", width: "216.63px" }}>
              Get Started
            </Link>
            {/* <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}
              style={{ marginLeft: ".5em", width: "216.63px" }}>
              Knowledge Base
            </Link>
            <a
              class="button button--secondary button--outline button--lg"
              href="blog/"
              style={{ marginLeft: ".5em", width: "216.63px" }}
            >
              Blog
            </a> */}
            {/* <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('blog/')}>
              Blog
            </Link> */}
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
