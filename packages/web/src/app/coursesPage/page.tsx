import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';
import Courses from '../courses/page';



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
