import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../apiConfig';  // Adjust the path based on your project structure

function CarList() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get(`${API_BASE_URL}Car`)
      .then(response => {
        setCars(response.data);
      })
      .catch(error => {
        console.error('Error fetching cars:', error);
      });
  }, []);

  return (
    <div>
      <h1>Cars Available</h1>
      <ul>
        {cars.map(car => (
          <li key={car.carId}>{car.make} {car.model} - {car.year}</li>
        ))}
      </ul>
    </div>
  );
}

export default CarList;
