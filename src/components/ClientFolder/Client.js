import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddClient from './AddClient'; // Ensure this path is correct
import styles from '../../Clients.module.css'; // Importing the CSS module

const Clients = () => {
    const [clients, setClients] = useState([]);
    const [showAddForm, setShowAddForm] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchClients();
    }, []);

    const fetchClients = async () => {
        setLoading(true);
        try {
            const response = await axios.get('http://57.151.121.7:8080/api/Client', {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            });
            setClients(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching clients:', error);
            setError('Failed to fetch clients');
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://57.151.121.7:8080/api/Client/${id}`, {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            });
            fetchClients();  // Refresh the list after deleting
        } catch (error) {
            console.error('Failed to delete client:', error);
        }
    };

    if (loading) return <div className={styles.loading}>Loading...</div>;
    if (error) return <div className={`${styles.error} ${styles.loading}`}>Error: {error}</div>;

    return (
        <div className={styles.clientsContainer}>
            <h2>Clients</h2>
            <button onClick={() => setShowAddForm(!showAddForm)}>
                {showAddForm ? 'Hide Add Form' : 'Add New Client'}
            </button>
            {showAddForm && <AddClient onClientAdded={fetchClients} />}
            <ul className={styles.clientList}>
                {clients.map(client => (
                    <li key={client.ClientId} className={styles.clientItem}>
                        {client.firstName} - Transactions: {client.Transactions?.length || 0}
                        <button onClick={() => handleDelete(client.ClientId)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Clients;
