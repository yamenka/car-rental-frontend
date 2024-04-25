import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TransactionsList = () => {
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchTransactions();
    }, []);

    const fetchTransactions = async () => {
        setLoading(true);
        try {
            const response = await axios.get('http://57.151.121.7:8080/api/Transaction', {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            console.log(response.data);  // Log the data to see what's actually returned
            setTransactions(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching transactions:', error);
            setError('Failed to fetch transactions');
            setLoading(false);
        }
    };
    const handleDelete = async (id) => {
        try {
            await axios.delete('http://57.151.121.7:8080/api/Transaction',{
            headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }}
            );
            fetchTransactions();  // Refresh the list after deleting
        } catch (error) {
            console.error('Failed to delete transaction:', error);
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h2>Transactions</h2>
            <ul>
                {transactions.map(transaction => (
                    <li key={transaction.TransactionId}>
                        Transaction ID: {transaction.transactionId}, Client ID: {transaction.clientId}, Car ID: {transaction.carId}
                        <button onClick={() => handleDelete(transaction.TransactionId)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TransactionsList;
