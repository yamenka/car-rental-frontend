import React, { useState } from 'react';
import CarDetails from './CarDetails'; // Make sure the path is correct
import styles from '../../CarSearch.module.css'; // Importing the CSS module

const CarSearch = () => {
    const [carId, setCarId] = useState('');

    const handleInputChange = (event) => {
        setCarId(event.target.value);  // Update carId when the user types in the input field
    };

    return (
        <div className={styles.searchContainer}>
            <h1 className={styles.searchTitle}>Search for a Car</h1>
            <input
                type="text"
                className={styles.searchInput}
                value={carId}
                onChange={handleInputChange}
                placeholder="Enter Car ID"
            />
            {carId && <CarDetails carId={carId} />}  
        </div>
    );
};

export default CarSearch;
