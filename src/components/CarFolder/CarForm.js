import React from 'react';
import GenericForm from '../GenericForm';

const CarForm = ({ Car, handleInputChange, handleSubmit, handleCancel }) => {
  return (
    <GenericForm
      formData={Car}
      fields={[
        { name: 'CarName', label: 'Car Name', type: 'text', placeholder: 'Enter the name of the Car' },
        { name: 'industry', label: 'Industry', type: 'text', placeholder: 'Enter the industry market' },
      ]}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
      handleCancel={handleCancel}
    />
  );
};

export default CarForm;