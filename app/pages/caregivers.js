import { useEffect, useState } from 'react';

export default function Caregivers() {
  const [caregivers, setCaregivers] = useState([]);

  useEffect(() => {
    const fetchCaregivers = async () => {
      try {
        const response = await fetch('/api/available-caregivers');
        const data = await response.json();
        setCaregivers(data);
      } catch (error) {
        console.error('Error fetching caregivers:', error);
      }
    };

    fetchCaregivers();
  }, []);

  return (
    <div>
      <h1>Available Caregivers</h1>
      <ul>
        {caregivers.map(caregiver => (
          <li key={caregiver.caregiver_id}>
            <p>Name: {caregiver.user.f_name} {caregiver.user.l_name}</p>
            <p>Email: {caregiver.user.email}</p>
            <p>Shift: {caregiver.shift_start} - {caregiver.shift_stop}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
