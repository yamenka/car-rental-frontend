import React from 'react';
import CarTable from './CarTable';

const CarList = ({ cars, handleEdit, handleDelete }) => {
  return (
    <div>
      <h2>Cars</h2>
      <CarTable cars={cars} handleEdit={handleEdit} handleDelete={handleDelete} />
    </div>
  );
};

export default CarList;