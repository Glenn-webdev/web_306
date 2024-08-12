'use client';

import { useEffect, useState } from 'react';

export default function CaregiversList() {
  const [caregivers, setCaregivers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCaregivers = async () => {
      try {
        const response = await fetch('pages/api/caregivers');
        if (!response.ok) {
          throw new Error('Failed to fetch caregivers');
        }
        const data = await response.json();
        setCaregivers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCaregivers();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Unavailable Caregivers</h2>
      {caregivers.length === 0 ? (
        <p>No caregivers found.</p>
      ) : (
        <ul>
          {caregivers.map((caregiver, index) => (
            <li key={index} className="mb-2">
              <p className="text-lg">
                {caregiver.f_name} {caregiver.l_name}
              </p>
              <p className="text-sm text-gray-600">
                Schedule: {caregiver.shift_start} - {caregiver.shift_stop}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
