

import RegistrationForm from "../../components/registrationForm";
import Nav from '../../components/nav';
import Footer from '../../pages/footer';
export default function Page() {
    return (
        <>
        <Nav></Nav>
        <div className="min-h-screen py-11">
           
        <RegistrationForm/>

        </div>
      
        <Footer/>
        </>

      

        
    )
};
