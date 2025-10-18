import React from 'react';
import Header from '../components/Header';
import Courses from './Courses';
import Footer from '../components/Footer';

const CoursesPage = () => {
  return (
    <div className="page-container">
      <Header />
      <main>
        <section id="courses">
          <Courses />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CoursesPage;
