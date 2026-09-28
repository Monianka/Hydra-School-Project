import React from 'react';
import {NavLink} from 'react-router-dom';

const upcomingPages = [
    'Students',
    'Registrations',
    'Schedules',
    'Documents',
    'Payments',
    'Messages',
    'Automations',
    'AI Agents',
    'Courses',
    'Blog',
    'Settings',

];

const AdminSidebar: React.FC = () => {
    return(
<nav aria-label='Administrator menu'>
   <div className = 'admin-brand'>
    <strong>HYDRA</strong>
    <span>SCUBA SCHOOL</span>
    </div>
    <NavLink to = '/admin/dashboard' className = {({isActive}) => isActive ? 'admin-nav-link is-active' : 'admin-nav-link'}>
        Dashboard
    </NavLink>
   {upcomingPages.map((label) => (
    <button key = {label} type = "button" className="admin-nav-link" disabled ><span>{label}</span><small>Coming soon</small></button>
   ))}
    <div className = 'admin-system-status'>
        <strong>System status</strong>
        <span>Not verified</span>
    </div>
</nav>
)
}
export default AdminSidebar;