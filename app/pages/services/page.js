



import Nav from '../../components/nav.js';
import Footer from '../../pages/footer.js';


import CaregiverList from '../../components/caregiverList.js';


export default function Page() {

    return (
        <>
        
      <div className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-grow flex flex-col items-center justify-center space-y-4">
          <h1 className="text-3xl font-bold">Services</h1>
          <h2 className="text-2xl font-bold">We offer the following services:</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
             
            </li>
            <CaregiverList></CaregiverList>
          </ul>
        </main>
        <Footer />
      </div>

    
    </>
    );
    
};
