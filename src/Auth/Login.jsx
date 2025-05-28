import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './auth.scss'; 
import { API } from '../api/axiosConfig';

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate()
  const onSubmit = async data => {
    try {
      const res = await API.post('/users/login', data);
      localStorage.setItem('token', res.data.token);
    //   alert('Login successful!');
      navigate('/');
    } catch (err) {
    //   alert(err.response?.data?.msg || 'Login failed');
    }
  };

  return (
    <div className="auth-container">
      <motion.form
        className="auth-form"
        onSubmit={handleSubmit(onSubmit)}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Email"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && <p className="error">{errors.email.message}</p>}

        <input
          type="password"
          placeholder="Password"
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && <p className="error">{errors.password.message}</p>}

        <button type="submit">Login</button>
        
        <a href="/register" className="link">Don't have an account? Register here</a>
      </motion.form>
    </div>
  );
}
