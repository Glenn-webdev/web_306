'use client';
import React, { useRef } from 'react';
import Nav from '../../components/nav.js';
import Footer from '../../pages/footer.js';

const images = [
    { src: '/images/cardiology.jpg', caption: 'Cardiology Services' },
    { src: '/images/orthopedics.jpg', caption: 'Orthopedics Services' },
    { src: '/images/pediatric.jpg', caption: 'Pediatric Services' },
    { src: '/images/neurology.jpg', caption: 'Neurology Services' },
    { src: '/images/gynecology.jpg', caption: 'Gynecology Services' },
];

export default function Page() {
    const scrollContainerRef = useRef(null);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollContainerRef.current.clientWidth : scrollContainerRef.current.clientWidth,
                behavior: 'smooth',
            });
        }
    };

    return (
        <>
            <div className="min-h-screen flex flex-col">
                <Nav />
                <main className="bg-white flex-grow flex flex-col items-center justify-start p-6 space-y-4">
                    <h1 className="mt-24 text-5xl font-serif text-black font-bold text-center">
                        We offer the following services:
                    </h1>

                    <div className="relative w-full max-w-screen-lg mx-auto mt-8 overflow-hidden">
                        <div
                            ref={scrollContainerRef}
                            className="flex overflow-x-hidden"
                        >
                            {images.map((image, index) => (
                                <div
                                    key={index}
                                    className="flex-shrink-0 w-full h-[500px] relative"
                                >
                                    <img
                                        src={image.src}
                                        alt={`Slide ${index + 1}`}
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                    <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center p-2 rounded-b-lg">
                                        {image.caption}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={() => scroll('left')}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black rounded-full p-3 shadow-lg text-white hover:bg-gray-700 transition"
                        >
                            &#9664;
                        </button>

                        <button
                            onClick={() => scroll('right')}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black rounded-full p-3 shadow-lg text-white hover:bg-gray-700 transition"
                        >
                            &#9654;
                        </button>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
}
