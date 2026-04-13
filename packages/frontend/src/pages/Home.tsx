import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Courses from './Courses';
import About from './About';
import './Home.css';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import BlogSection from '../components/BlogSection';

const homeStructuredData = [
    {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Hydra-Scuba Diving School',
        url: 'https://hydra-scubadiving.com/',
        logo: 'https://hydra-scubadiving.com/logo512.png',
        image: 'https://hydra-scubadiving.com/logo512.png',
        sameAs: [
            'https://www.facebook.com/HydraScubaDiving',
            'https://www.instagram.com/hydra.divers/',
            'https://www.youtube.com/@divinglens'
        ]
    },
    {
        '@context': 'https://schema.org',
        '@type': 'SportsActivityLocation',
        name: 'Hydra-Scuba Diving School',
        description:
            'Hydra-Scuba Diving School offers PADI scuba diving courses in London, Kent, and across England with English and Polish speaking instructors.',
        url: 'https://hydra-scubadiving.com/',
        image: 'https://hydra-scubadiving.com/logo512.png',
        telephone: '+447414724401',
        address: {
            '@type': 'PostalAddress',
            streetAddress: '95 Colyer Drive, Alkerden',
            addressLocality: 'Swanscombe',
            addressRegion: 'Kent',
            postalCode: 'DA10 1GT',
            addressCountry: 'GB'
        },
        areaServed: ['London', 'Kent', 'England', 'UK']
    }
];

const Home=()=>{
    return (
        <div className="home-container">
                        <Helmet>
                                <title>Scuba Diving School in London & Kent | Hydra-Scuba Diving School</title>
                                <meta
                                        name="description"
                                        content="Hydra-Scuba Diving School offers PADI scuba diving courses in London, Kent, and across England, with training available in English and Polish."
                                />
                                <meta
                                        name="keywords"
                                        content="scuba diving school, scuba diving school London, scuba diving school Kent, PADI courses England, diving school UK, polish diving school, Polish diving school in England, polska szkoła nurkowania, polska szkoła nurkowania w Anglii, szkoła nurkowania Londyn, szkoła nurkowania Kent"
                                />
                                <meta name="robots" content="index,follow,max-image-preview:large" />
                                <link rel="canonical" href="https://hydra-scubadiving.com/" />
                                <link rel="alternate" hrefLang="en" href="https://hydra-scubadiving.com/" />
                                <link rel="alternate" hrefLang="x-default" href="https://hydra-scubadiving.com/" />
                                <meta property="og:title" content="Scuba Diving School in London & Kent | Hydra-Scuba Diving School" />
                                <meta
                                        property="og:description"
                                        content="Professional PADI scuba diving courses in London, Kent, and across England. Learn with English and Polish speaking instructors at Hydra-Scuba Diving School."
                                />
                                <meta property="og:type" content="website" />
                                <meta property="og:url" content="https://hydra-scubadiving.com/" />
                                <meta property="og:image" content="https://hydra-scubadiving.com/logo512.png" />
                                <meta property="og:locale" content="en_GB" />
                                <meta name="twitter:card" content="summary_large_image" />
                                <meta name="twitter:title" content="Scuba Diving School in London & Kent | Hydra-Scuba Diving School" />
                                <meta
                                        name="twitter:description"
                                        content="PADI scuba diving courses in London, Kent, and across England with English and Polish speaking instructors."
                                />
                                <meta name="twitter:image" content="https://hydra-scubadiving.com/logo512.png" />
                                <script type="application/ld+json">
                                        {JSON.stringify(homeStructuredData)}
                                </script>
                        </Helmet>
            <Header />
            <main>
                <section id="hero" className='animate-slide-in-left'>
                    <HeroSection />
                </section> 
                <section id="courses" className='animate-slide-in-left'>
                    <Courses />
                </section>
                <section id="about" className='animate-slide-in-left'>
                    <About showSectionHeader />
                </section>
                <section id="blog" className='animate-slide-in-left'>
                    <BlogSection />
                </section>
            </main>
            <Footer />
        </div>
    )
}
export default Home;