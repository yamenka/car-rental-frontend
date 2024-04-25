import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../../CarDetails.module.css'; // Importing the CSS module

const CarDetails = ({ carId }) => {
    const [car, setCar] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        if (carId) {
            axios.get(`http://57.151.121.7:8080/api/Car/${carId}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}` // Make sure your API requires authorization
                }
            })
            .then(response => {
                setCar(response.data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching car details:', err);
                setError('Failed to fetch car details.');
                setLoading(false);
            });
        }
    }, [carId]);

    if (loading) return <div className={styles.loading}>Loading...</div>;
    if (error) return <div className={`${styles.error} ${styles.loading}`}>Error: {error}</div>;
    if (!car) return <div>No car data available.</div>;

    return (
        <div className={styles.carDetailsContainer}>
            <h2 className={styles.title}>Car Details</h2>
            <p className={styles.detailItem}>ID: {car.carId}</p>
            <p className={styles.detailItem}>Make: {car.make}</p>
            <p className={styles.detailItem}>Model: {car.model}</p>
            <div>
                <h3 className={styles.title}>Transactions:</h3>
                {car.transactions && car.transactions.length > 0 ? (
                    <ul className={styles.transactionList}>
                        {car.transactions.map(tx => (
                            <li key={tx.transactionId} className={styles.transactionItem}>
                                Transaction ID: {tx.transactionId}, Client ID: {tx.clientId}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No transactions found for this car.</p>
                )}
            </div>
        </div>
    );
};

export default CarDetails;
