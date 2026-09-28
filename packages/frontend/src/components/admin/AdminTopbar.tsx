import React from "react";
import { useNavigate } from "react-router-dom";


function readAdminProfile():{ name: string, email:string

}{
    try {
        const storedUser = localStorage.getItem("adminUser");
        const user = storedUser ? JSON.parse(storedUser) : null;

        return{
             name: typeof user?.name === 'string' ? user.name : 'Administrator',
      email: typeof user?.email === 'string' ? user.email : '',
    };
  } catch {
    return { name: 'Administrator', email: '' };
  };
}


const AdminTopbar: React.FC = () => {
    const navigate = useNavigate();
    const admin = readAdminProfile();

    const handleLogout = () => {
        localStorage.removeItem("adminToken");

        localStorage.removeItem("adminUser");

        navigate("/admin/login", {replace: true});

    };
    

    return (
        <header className = 'admin-topbar'>
            <input
            type = 'search'
            className = 'admin-search'
            aria-label = 'Search - coming soon'
            placeholder = 'Search - coming soon'
            disabled
            />
            <div className = 'admin-topbar-actions'>
                <button type = "button" disabled>
                    Notifications (coming soon)
                </button>
                <div className = 'admin-profile'>
                    <strong>{admin.name}</strong>
                    <span>{admin.email}</span>
                </div>
                <button type = "button" onClick = {handleLogout}>
                    Log out
                </button>
            </div>
        </header>
    )
}

export default AdminTopbar;