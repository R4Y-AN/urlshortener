import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import API from '../API';

const api = new API();
const LoadUrl = () => {
  const navigate = useNavigate();
  const { shortId } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.loadUrl(shortId);
        if (res.status === 200) {
          window.location = res.data.longUrl;
        }
      } catch (error) {
        navigate('/');
      }
    };

    fetchData();
  }, []);
}

export default LoadUrl