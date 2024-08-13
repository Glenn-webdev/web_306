// src/App.js
import React from 'react';


import Nav from './components/nav';
import Footer from './pages/footer';
import Caregivers from './pages/caregivers';
import BookedCaregivers from './pages/bookedCaregivers';




function Page() {
  
    return (
      <>
      <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-grow flex flex-col items-center justify-center py-11">
        <h1 className="text-3xl font-bold mb-8">Caregivers</h1>
        <div className="flex w-full max-w-6xl space-x-4">
          
          <Caregivers />
          <BookedCaregivers />

        </div>
      
      </main>
      <Footer />
    </div>
  </>
    );
}

export default Page;
