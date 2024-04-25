import React from 'react';

const CarDetails = ({ car }) => {
  if (!car) {
    return <div>No car selected.</div>;
  }

  return (
    <div>
      <h2>car Details</h2>
      <p>ID: {car.id}</p>
      <p>model: {car.model}</p>
      <p>make: {car.make}</p>
      <p>makeYear: {car.makeYear}</p>
      <p>horsePower: {car.horsePower}</p>
      <p>color: {car.color}</p>
    </div>
  );
};

export default CarDetails;