import React from 'react';
import Nav from '../../components/nav';
import Footer from '../../pages/footer.js';
import CaregiversList from '../../components/caregiverList.js';


export default function Page() {

    return (

        <>
        <div className='min-h-screen'>
            <Nav></Nav>
           
            <h1 className='text-3xl'>Contact us</h1>

            <p>Phone: 123-456-7890</p>
            <p>Email: 6g8vI@example.com</p> 
          <CaregiversList></CaregiversList>  

       
        </div>
        <Footer/>
        </>
    );
    
};
