import React, { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

type ProtectedAdminRouteProps = {
  children: ReactNode;
};

const ProtectedAdminRoute: React.FC<ProtectedAdminRouteProps> = ({ children }) => {
  const location = useLocation();
  const adminToken = localStorage.getItem('adminToken');

  if (!adminToken) {
    return <Navigate to="/admin/login" replace state={{ from: location }} />;
  }

  return <>{children}</>;
};

export default ProtectedAdminRoute;
