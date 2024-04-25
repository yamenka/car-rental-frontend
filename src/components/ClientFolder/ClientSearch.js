import React, { useState } from 'react';
import ClientDetails from './ClientDetails'; // Ensure the path is correct based on your project structure
import styles from '../../ClientSearch.module.css'; // Importing the CSS module

const ClientSearch = () => {
    const [clientId, setClientId] = useState('');

    const handleInputChange = (event) => {
        setClientId(event.target.value);  // Update clientId when the user types in the input field
    };

    return (
        <div className={styles.searchContainer}>
            <h1 className={styles.searchTitle}>Search for a Client</h1>
            <input
                type="text"
                className={styles.searchInput}
                value={clientId}
                onChange={handleInputChange}
                placeholder="Enter Client ID"
            />
            {clientId && <ClientDetails clientId={clientId} />}  
        </div>
    );
};

export default ClientSearch;
