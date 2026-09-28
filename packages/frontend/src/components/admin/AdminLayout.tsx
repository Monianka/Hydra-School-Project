import React from "react";
import AdminTopbar from "./AdminTopbar";
import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import './AdminLayout.css';

const AdminLayout: React.FC = () => {
    return (
        <div className = "admin-layout">
            <AdminSidebar />
            <div className = "admin-workspace">
               <AdminTopbar />

                <main className = "admin-content">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;