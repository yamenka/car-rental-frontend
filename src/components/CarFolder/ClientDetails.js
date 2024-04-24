import React from 'react';

const ClientDetails = ({ client }) => {
  if (!client) {
    return <div>No client selected.</div>;
  }

  return (
    <div>
      <h2>Client Details</h2>
      <p>ID: {client.id}</p>
      <p>Client Name: {client.clientName}</p>
      <p>Industry: {client.industry}</p>
    </div>
  );
};

export default ClientDetails;