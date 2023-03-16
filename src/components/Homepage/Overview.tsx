import React from 'react';
import './Overview.scss';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';

function Overview(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  const getTodaysJournalPath = (): string => {
    const year = new Date().getFullYear();
    const month = String(new Date().getMonth() + 1).padStart(2, '0');
    const day = String(new Date().getDate()).padStart(2, '0');
    return `/docs/${year}/${month}/${day}`;
  }

  return (
    <div className={'Overview'}>
      <div className="container padding-vert--xl">
        <img className="Overview-logo" src="img/logo.png" alt="Daniel Brandl Logo" width="150" />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={'buttons'}>
          <Link className="button button--secondary button--lg" to={getTodaysJournalPath()}>
            📅 Today
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Overview;
