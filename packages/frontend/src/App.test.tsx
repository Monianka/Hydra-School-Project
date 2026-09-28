import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ProtectedAdminRoute from './routes/ProtectedAdminRoute';

const renderAdminRoute = () => {
  render(
    <MemoryRouter initialEntries={['/admin/dashboard']}>
      <Routes>
        <Route path="/admin/login" element={<h1>Admin Login</h1>} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedAdminRoute>
              <h1>Dashboard administratora</h1>
            </ProtectedAdminRoute>
          }
        />
      </Routes>
    </MemoryRouter>
  );
};

beforeEach(() => {
  localStorage.clear();
});

test('redirects a visitor without an admin token to the admin login page', () => {
  renderAdminRoute();

  expect(screen.getByRole('heading', { name: /admin login/i })).toBeInTheDocument();
});

test('renders the admin dashboard when an admin token exists', () => {
  localStorage.setItem('adminToken', 'test-admin-token');
  renderAdminRoute();

  expect(
    screen.getByRole('heading', { name: /dashboard administratora/i })
  ).toBeInTheDocument();
});
