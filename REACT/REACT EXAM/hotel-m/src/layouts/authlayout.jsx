import React, { useEffect } from 'react'
import { Outlet, Navigate } from 'react-router-dom';

const AuthLayout = () => {
  useEffect(async () => {
    const resp = await fetch("http://127.0.0.1:5000/viewUser")

    const result = await resp.json()
    const userType = result.user
    if (!userType) {
      return <Navigate to='/' />;
    }
  })



  return <Outlet />
};

export default AuthLayout