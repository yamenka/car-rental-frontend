import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../../apiConfig';
import ClientList from './Clients';
import ClientDetails from './ClientDetails';
import ClientForm from './ClientForm';
//import Footer from '../Footer'; 

const Clients = () => {
  const [clients, setClients] = useState([]);
  const [error, setError] = useState('');
  const [selectedClient, setSelectedClient] = useState(null);
  const [editingClient, setEditingClient] = useState(null);

  useEffect(() => {
    // Fetch Client data when component mounts
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}Car`);
      setClients(response.data);
      setSelectedClient(null);
      setEditingClient(null);
    } catch (error) {
      console.error('Error fetching car:', error);
    }
  };

const handleEdit = (id) => {
  console.log('Edit button clicked for id:', id);
  const selected = Clients.find((client) => Clients.id === id);
  console.log('Selected car:', selected);
  setSelectedClient(null);

  setEditingClient({ id: selected.id, clientName: selected.clientName, industry: selected.industry});
};



  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}Car/${id}`);
      fetchClients();
    } catch (error) {
      console.error('Error deleting client:', error);
    }
  };

  /*
  const handleViewDetails = (id) => {
    const selected = clients.find((client) => client.id === id);
    setSelectedClient(selected);
    setEditingClient(null);
  };
  */

  const handleCreate = () => {
    setSelectedClient(null);
    setEditingClient({ clientName: '', industry: ''});
  };

  const handleCancelEdit = () => {
    setEditingClient(null);
  };

const handleFormSubmit = async (event) => {
  event.preventDefault();
  try {
    console.log('Editing Client:', editingClient);

    if (editingClient) {
      if (editingClient.cleintId) {
        console.log('Updating existing client:', editingClient);
        await axios.put(`${API_BASE_URL}Car/${editingClient.id}`, editingClient);
		
      } else {
        // Remove the existing id property for new clients
        const { id, ...newClient } = editingClient;
        console.log('Creating new client:', newClient);
        await axios.post(`${API_BASE_URL}Car`, newClient);
      }
      fetchClients();
    }
  } catch (error) {
    console.error('Error saving clients:', error);
    setError('Error saving the client, please check the input')
    console.error('Response data:', error.response?.data);
  } finally {
    setEditingClient(null);
  }
};




  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="flex-grow-1">
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ClientList clients={clients} handleEdit={handleEdit} handleDelete={handleDelete} />
      {selectedClient && <ClientDetails client={selectedClient} />}
      {editingClient && (
        <ClientForm
          client={editingClient}
          handleInputChange={(e) => setEditingClient({ ...editingClient, [e.target.name]: e.target.value })}
          handleSubmit={handleFormSubmit}
          handleCancel={handleCancelEdit}
        />
      )}
      {!editingClient && <button onClick={handleCreate} className="btn btn-success">Create New Client</button>}
      </div>
    </div>
  );
};

export default Clients;