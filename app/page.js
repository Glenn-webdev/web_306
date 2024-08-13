import React from 'react';
import Nav from './components/nav';
import Footer from './pages/footer';

function Page() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-white">
        <Nav />
        <main className="flex-grow flex flex-col relative">
          <div className="relative h-[600px]">
            <img
              src='/images/homecare.jpg'
              className="absolute inset-0 w-full h-full object-cover"
              alt="Homecare"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute top-0 right-0 p-6">
              <div className="text-right">
                <h1 className="text-6xl font-serif font-bold text-white mb-2 mr-20">
                  Compassionate care,
                </h1>
                <h1 className="text-6xl font-serif font-bold text-white mr-20">
                  healing hearts
                </h1>
                <div className="mt-6">
                  <button className="text-xl bg-orange-500 hover:bg-orange-600 text-white font-serif py-4 px-6 rounded-full mr-32">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-grow flex flex-col items-center justify-end py-11">
            <div className="text-center mb-6">
              <h2 className="text-4xl font-sans font-bold text-black">Our Testimonials</h2>
            </div>
            <div className="flex space-x-4">
              <div className="flex flex-col justify-center items-center text-black w-80 h-40 bg-cyan-200 rounded-md shadow-md p-4">
                <p className="mb-4 text-lg font-bold">John Doe</p>
                <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.</p>
              </div>
              <div className="flex flex-col justify-center items-center text-black w-80 h-40 bg-cyan-200 rounded-md shadow-md p-4">
                <p className="mb-4 text-lg font-bold">John Doe</p>
                <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.</p>
              </div>
              <div className="flex flex-col justify-center items-center text-black w-80 h-40 bg-cyan-200 rounded-md shadow-md p-4">
                <p className="mb-4 text-lg font-bold">John Doe</p>
                <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.</p>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Page;
