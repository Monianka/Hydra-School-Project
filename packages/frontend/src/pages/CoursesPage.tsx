import React from 'react';
import Header from '../components/Header';
import Courses from './Courses';
import Footer from '../components/Footer';
import './CoursesPage.css';

const CoursesPage = () => {
  return (
    <div className="courses-page-container">
      <Header />
      <main>
        <section id="courses">
          <Courses layout="grid" includeSeo />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CoursesPage;
