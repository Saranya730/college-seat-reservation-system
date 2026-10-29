import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AdminLoginPage.css';

const AdminLoginPage = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:5000/api/users/login', form);
      if (res.data.role === 'admin') {
        alert('Admin login successful');
        navigate('/admin');
      } else {
        alert('Invalid admin credentials');
      }
    } catch (err) {
      alert(err.response?.data?.error || 'Invalid admin credentials');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-login-wrapper">
      <div className="admin-login-container">
        <h2>Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <input name="email" type="email" placeholder="Admin Email" value={form.email} onChange={handleChange} required />
          <input name="password" type="password" placeholder="Admin Password" value={form.password} onChange={handleChange} required />
          <button type="submit" disabled={loading}>{loading ? 'Logging in…' : 'Login as Admin'}</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginPage;
