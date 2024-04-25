import React, { useState } from 'react';
import axios from 'axios';

const AddTransaction = ({ onTransactionAdded }) => {
    const [transactionData, setTransactionData] = useState({
        clientId: '',
        carId: ''
    });

    const handleChange = (event) => {
        setTransactionData({
            ...transactionData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('http://57.151.121.7:8080/api/Transaction',{
            headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }}
            );
            onTransactionAdded(); // Callback to refresh the transaction list
        } catch (error) {
            console.error('Failed to add transaction:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="number"
                name="clientId"
                value={transactionData.clientId}
                onChange={handleChange}
                placeholder="Client ID"
            />
            <input
                type="number"
                name="carId"
                value={transactionData.carId}
                onChange={handleChange}
                placeholder="Car ID"
            />
            <button type="submit">Add Transaction</button>
        </form>
    );
};

export default AddTransaction;
