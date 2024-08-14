import React from 'react';
import Nav from '../../components/nav'
import Footer from '../../pages/footer'
import Caregivers from '../caregivers';
import BookedCaregivers from '../bookedCaregivers';



export default function page() {


    return(
        <>
        <div className='min-h-screen'>
        <Nav></Nav>

        <Caregivers/>
        <BookedCaregivers/>
        </div>
        
        <Footer/>
        </>
    )
    
};
