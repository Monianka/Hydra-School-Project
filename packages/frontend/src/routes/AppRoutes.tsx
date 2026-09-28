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
import CustomerConsent from '../pages/CustomerConsent';
import AdminLogin from '../pages/AdminLogin';
import AdminDashboard from '../pages/AdminDashboard';
import ProtectedAdminRoute from './ProtectedAdminRoute';
import AdminLayout from '../components/admin/AdminLayout';

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
        <Route path= "/customer-consent/:token" element={<CustomerConsent />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin"
          element={
            <ProtectedAdminRoute>
              <AdminLayout />
            </ProtectedAdminRoute>
          }
        >
          <Route index element={<Navigate to="dashboard" replace />} />
        <Route
        path = "dashboard"
        element = {<AdminDashboard/>}
        />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
