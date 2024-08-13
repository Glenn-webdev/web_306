import React from 'react';
import Nav from '../../components/nav';
import Footer from '../../pages/footer.js';

export default function Page() {
    return (
        <>
            <div className='min-h-screen flex flex-col'>
                <Nav />
                <div className="relative w-screen h-screen flex items-center justify-center">
                    <img
                        src='/images/doctors.jpg'
                        className="absolute inset-0 w-full h-full object-cover"
                        alt="Doctors"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                    <div className="relative z-10 p-6 mt-48">
                        <div className="border-4 border-white rounded-lg p-8 max-w-screen-lg mx-auto bg-transparent">
                            <div className="mb-8">
                                <h1 className="text-4xl md:text-5xl font-bold text-center text-white">
                                    Get in touch with us!
                                </h1>
                            </div>
                            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8">
                                <div className="flex flex-col items-center  p-4 bg-transparent">
                                    <h2 className="text-2xl font-semibold text-white">Address</h2>
                                    <p className="text-white">123 Health Street, Wellness City</p>
                                </div>
                                <div className="flex flex-col items-center  p-4 bg-transparent">
                                    <h2 className="text-2xl font-semibold text-white">Phone</h2>
                                    <p className="text-white">(123) 456-7890</p>
                                </div>
                                <div className="flex flex-col items-center p-4 bg-transparent">
                                    <h2 className="text-2xl font-semibold text-white">Email</h2>
                                    <p className="text-white">info@healthcare.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}
