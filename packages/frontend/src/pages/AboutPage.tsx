import React from 'react';
import Header from '../components/Header';
import About from './About';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <div className="page-container">
      <Header />
      <main>
        <section id="about">
          <About />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
