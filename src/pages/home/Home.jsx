import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';

import Testimonials from '../../components/testimonials/Testimonials';

const Home = () => {
  const navigate = useNavigate();
  

  return (
    <div>
      <div className="home" >
        <div className="home-content">
          <div className="home-background"></div>
          <h1>Welcome to EduVIBE ..</h1>
          <p>
          eduVIBE is an innovative Learning Management System designed to enhance online education with robust course creation and student management tools. </p>
          <button onClick={() => navigate("/courses")} className="common-btn">Get started</button>
        </div>
      </div>
      <Testimonials />
    </div>
  );
};

export default Home;