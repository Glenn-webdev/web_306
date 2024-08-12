// src/App.js
import React from 'react';

import LoginPage from './components/loginForm';
import Nav from './components/nav';
import Footer from './pages/footer';
import AvailCaregivers from './pages/availCaregivers'

function Page() {
    return (
        <>
        <div className="min-h-screen">
          <Nav></Nav>

          <AvailCaregivers/>
          


           
        </div>
        <Footer></Footer>
      
  </>
    
    );
}

export default Page;
