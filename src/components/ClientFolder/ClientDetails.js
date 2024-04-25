import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../../ClientDetails.module.css'; // Importing the CSS module

const ClientDetails = ({ clientId }) => {
    const [client, setClient] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        if (clientId) {
            setLoading(true);
            axios.get(`http://57.151.121.7:8080/api/Client/${clientId}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then(response => {
                setClient(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching client details:', error);
                setError('Failed to fetch client details.');
                setLoading(false);
            });
        }
    }, [clientId]);

    if (loading) return <div className={styles.loading}>Loading...</div>;
    if (error) return <div className={`${styles.error} ${styles.loading}`}>Error: {error}</div>;
    if (!client) return <div>No client data available.</div>;

    return (
        <div className={styles.clientDetailsContainer}>
            <h2 className={styles.title}>Client Details</h2>
            <p className={styles.detailItem}>Id: {client.clientId}</p>
            <p className={styles.detailItem}>First Name: {client.firstName}</p>
            <p className={styles.detailItem}>Second Name: {client.secondName}</p>
            <p className={styles.detailItem}>Email: {client.email}</p>
            <p className={styles.detailItem}>Mobile Number: {client.mobileNumber}</p>
            <div>
                <h3 className={styles.title}>Transactions:</h3>
                {client.transactions && client.transactions.length > 0 ? (
                    <ul className={styles.transactionList}>
                        {client.transactions.map(tx => (
                            <li key={tx.transactionId} className={styles.transactionItem}>
                                Transaction ID: {tx.transactionId}, Car ID: {tx.carId}, 
                                Client ID: {tx.clientId}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No transactions found for this client.</p>
                )}
            </div>
        </div>
    );
};

export default ClientDetails;
