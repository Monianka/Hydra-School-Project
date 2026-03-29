import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import CoursesPage from '../pages/CoursesPage';
import AboutPage from '../pages/AboutPage';
import BlogList from '../pages/BlogList';
import BlogDetail from '../pages/BlogDetail';
import React from 'react';
import CourseDetail from '../pages/CourseDetail';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/courses/:slug" element={<CourseDetail />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
