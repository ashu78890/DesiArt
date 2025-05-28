import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import './auth.scss'; 
import { API, registerUser } from '../api/axiosConfig';

export default function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async data => {
    try {
      const res = await API.post('/users/register', data);
      localStorage.setItem('token', res.data.token);
    //   alert('Registration successful!');
    //   navigate('/');
    } catch (err) {
    //   alert(err.response?.data?.msg || 'Something went wrong');
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
        <h2>Register</h2>

        <input
          type="text"
          placeholder="Full Name"
          {...register("name", { required: "Full name is required" })}
        />
        {errors.name && <p className="error">{errors.name.message}</p>}

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

        <button type="submit">Register</button>

        <a href="/login" className="link">Already have an account? Login here</a>
      </motion.form>
    </div>
  );
}
