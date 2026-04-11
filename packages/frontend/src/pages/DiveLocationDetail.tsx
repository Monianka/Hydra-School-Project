import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import { getDiveLocationBySlug } from '../utils/diveLocationsData';
import './DiveLocationDetail.css';

const DiveLocationDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();
  const t = translations[language].locations;
  const location = slug ? getDiveLocationBySlug(slug, language) : null;

  if (!location) {
    return (
      <div className="dive-location-detail-page">
        <Header />
        <div className="dive-location-detail-state">Not found</div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="dive-location-detail-page">
      <Helmet>
        <title>{`${location.name} | ${t.navLabel}`}</title>
        <meta name="description" content={location.seoDescription} />
        <link rel="canonical" href={`https://hydra-scubadiving.com/dive-locations/${location.slug}`} />
        <meta property="og:title" content={`${location.name} | ${t.navLabel}`} />
        <meta property="og:description" content={location.seoDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://hydra-scubadiving.com/dive-locations/${location.slug}`} />
      </Helmet>
      <Header />
      <main className="dive-location-detail-main">
        <article className="dive-location-article">
          <Link to="/dive-locations" className="dive-location-back-link">
            {t.backToLocations}
          </Link>
          <div className="dive-location-hero">
            <div className="dive-location-copy">
              <p className="dive-location-category">{location.area}</p>
              <h1>{location.name}</h1>
              <p className="dive-location-intro">{location.intro}</p>
              <a href={location.websiteUrl} target="_blank" rel="noreferrer" className="dive-location-website-link">
                {t.visitWebsite}
              </a>
            </div>
            <div className="dive-location-map-wrap">
              <iframe
                title={`${location.name} map`}
                src={location.mapEmbedUrl}
                className="dive-location-map"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div className="dive-location-body-layout">
            <div className="dive-location-body">
              {location.description.map((paragraph, index) => (
                <p key={`${location.slug}-${index}`}>{paragraph}</p>
              ))}
            </div>
            <aside className="dive-location-aside">
              <div className="dive-location-aside-card">
                <h3>{t.quickFacts}</h3>
                <p>{t.region}: {location.area}</p>
                <p>{t.website}: <a href={location.websiteUrl} target="_blank" rel="noreferrer">{location.name}</a></p>
                <div className="dive-location-highlights">
                  {location.highlights.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default DiveLocationDetail;
