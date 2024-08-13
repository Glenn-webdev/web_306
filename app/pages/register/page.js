import React from 'react';
import RegistrationForm from "../../components/registrationForm";
import Nav from '../../components/nav';
import Footer from '../../pages/footer';

export default function Page() {
    return (
        <>
            <Nav />
            <div className="relative w-screen min-h-screen flex flex-col">
                <img
                    src='/images/patient.jpg'
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="Doctors"
                />
                <div className="absolute inset-0 bg-green-200 bg-opacity-50"></div>

                <div className="relative z-10 flex-grow flex items-center justify-center">
                    <div className=" p-8 max-w-screen-lg mx-auto">
                        <RegistrationForm />
                    </div>
                </div>

            </div>
            <Footer />
        </>
    );
}
