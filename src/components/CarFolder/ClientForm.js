import React from 'react';
import GenericForm from '../GenericForm';

const ClientForm = ({ client, handleInputChange, handleSubmit, handleCancel }) => {
  return (
    <GenericForm
      formData={client}
      fields={[
        { name: 'clientName', label: 'Client Name', type: 'text', placeholder: 'Enter the name of the client' },
        { name: 'industry', label: 'Industry', type: 'text', placeholder: 'Enter the industry market' },
      ]}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
      handleCancel={handleCancel}
    />
  );
};

export default ClientForm;