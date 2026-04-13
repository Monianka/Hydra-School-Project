import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import CoursesPage from '../pages/CoursesPage';
import AboutPage from '../pages/AboutPage';
import BlogList from '../pages/BlogList';
import BlogDetail from '../pages/BlogDetail';
import React from 'react';
import CourseDetail from '../pages/CourseDetail';
import DiveLocationsPage from '../pages/DiveLocationsPage';
import DiveLocationDetail from '../pages/DiveLocationDetail';

const LegacyLanguageRedirect = () => {
  const location = useLocation();
  const targetPath = location.pathname.replace(/^\/pl(?=\/|$)/, '') || '/';

  return <Navigate to={targetPath} replace />;
};

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/pl" element={<LegacyLanguageRedirect />} />
        <Route path="/pl/*" element={<LegacyLanguageRedirect />} />
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/courses/:slug" element={<CourseDetail />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="/dive-locations" element={<DiveLocationsPage />} />
        <Route path="/dive-locations/:slug" element={<DiveLocationDetail />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
