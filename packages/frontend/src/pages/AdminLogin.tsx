import React, { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginAdmin } from '../services/admin';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './AdminLogin.css';




const AdminLogin: React.FC = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitting(true);

    setError('');
    

    try{
        const data = await loginAdmin(email, password);

        localStorage.setItem('adminToken', data.token);
        localStorage.setItem('adminUser', JSON.stringify(data.admin));
        navigate('/admin/dashboard', { replace: true });
    }catch(err){
        setError('Nie udało się zalogować. Sprawdź e-mail i hasło lub spróbuj ponownie.');
    }finally{
        setSubmitting(false);
    }

    };

    return(
        <div className="admin-login-page" >
            <Header/>

            <main className="admin-login-main">
                <section className="admin-login-card">
                <h1>Admin Login</h1>

                {error && <div className="admin-login-error">{error}</div>}

                <form onSubmit = {handleSubmit} className="admin-login-form">
<div className= "admin-login-field">
    <label htmlFor="admin-email">Email:</label>
    <input
        type="email"
        id="admin-email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
    />
</div>

<div className= "admin-login-field">
    <label htmlFor="admin-password">Password:</label>
    <input
        type="password"
        id="admin-password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        required
    />
</div>
<button type="submit" disabled={submitting}>
    {submitting ? 'Logging in...' : 'Login'}
</button>


                </form>
                </section>
            </main>
            <Footer/>
        </div>
    );
};

export default AdminLogin;
