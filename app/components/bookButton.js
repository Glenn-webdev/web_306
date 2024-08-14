'use client';
import { useRouter } from 'next/navigation';

const BookNowButton = () => {
    const router = useRouter();

    return (
        <button
            className="text-xl bg-orange-500 hover:bg-orange-600 text-white font-serif py-4 px-6 rounded-full mr-32"
            onClick={() => router.push('pages/bookanurse')}
        >
            Book Now
        </button>
    );
};

export default BookNowButton;
