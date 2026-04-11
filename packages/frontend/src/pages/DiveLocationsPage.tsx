import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DiveLocationCard from '../components/DiveLocationCard';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import { getDiveLocations } from '../utils/diveLocationsData';
import './DiveLocationsPage.css';

const DiveLocationsPage: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].locations;
  const locations = getDiveLocations(language);

  return (
    <div className="dive-locations-page">
      <Helmet>
        <title>{t.pageTitle}</title>
        <meta name="description" content={t.pageDescription} />
        <link rel="canonical" href="https://hydra-scubadiving.com/dive-locations" />
        <meta property="og:title" content={t.pageTitle} />
        <meta property="og:description" content={t.pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hydra-scubadiving.com/dive-locations" />
      </Helmet>
      <Header />
      <main className="dive-locations-main">
        <section className="dive-locations-hero">
          <p className="dive-locations-kicker">{t.navLabel}</p>
          <h1>{t.pageHeading}</h1>
          <p>{t.pageDescription}</p>
        </section>
        <section className="dive-locations-grid">
          {locations.map((item) => (
            <DiveLocationCard
              key={item.slug}
              location={item}
              detailsLabel={t.viewLocation}
              websiteLabel={t.visitWebsite}
            />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DiveLocationsPage;
