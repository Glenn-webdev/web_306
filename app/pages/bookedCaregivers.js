'use client';
import { useEffect, useState } from 'react';



export default function BookedCaregivers() {
  const [caregivers, setCaregivers] = useState([]);


  useEffect(() => {
    const fetchCaregivers = async () => {
      try {
        const response = await fetch('pages/api/bookedCaregivers');
        const data = await response.json();

       if (Array.isArray(data.users)) {
         setCaregivers(data.users); 
       } else {
         console.error('Expected an array but got:', data.users);
         setCaregivers([]); 
       }
     } catch (error) {
       console.error('Error fetching caregivers:', error);
       setCaregivers([]); 
     }
   };

   fetchCaregivers();
 }, []);

 

  return (
    <div className="min-h-screen flex flex-col items-center space-y-4 py-11">
  <h1 className="text-lg font-bold">Booked</h1> 
  <ul className="space-y-4">
    {caregivers.length > 0 ? (
      caregivers.map((caregiver, index) => (
        <li
          key={index}
          className="bg-red-100 p-4 rounded-lg shadow-md flex flex-col space-y-2"
        >
          <p className="text-lg font-semibold">
            {caregiver.first_name} {caregiver.last_name}
          </p>
          <p className="text-sm text-gray-600">
            Shift: {caregiver.schedule_start} - {caregiver.schedule_stop}
          </p>
        </li>
      ))
    ) : (
      <p>No caregivers found.</p>
    )}
  </ul>
</div>

    );
    
}
