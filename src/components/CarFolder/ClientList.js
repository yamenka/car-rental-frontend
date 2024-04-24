import React from 'react';
import ClientTable from './ClientTable';

const ClientList = ({ clients, handleEdit, handleDelete }) => {
  return (
    <div>
      <h2>Clients</h2>
      <ClientTable clients={clients} handleEdit={handleEdit} handleDelete={handleDelete} />
    </div>
  );
};

export default ClientList;