import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddCar from './AddCar';  // Make sure the path is correct
import styles from '../../CarsList.module.css';  // Importing the CSS module

function CarsList() {
    const [cars, setCars] = useState([]);
    const [showAddForm, setShowAddForm] = useState(false);  // State to toggle AddCar form visibility
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchCars();
    }, []);

    const fetchCars = async () => {
        setLoading(true);
        try {
            const response = await axios.get('http://57.151.121.7:8080/api/Car/');
            setCars(response.data);
            setLoading(false);
        } catch (error) {
            setError('Failed to fetch cars');
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://57.151.121.7:8080/api/Car/${id}`);
            fetchCars();  // Refresh the list after deleting
        } catch (error) {
            console.error('Failed to delete car:', error);
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h2>Cars List</h2>
            <button onClick={() => setShowAddForm(!showAddForm)}>
                {showAddForm ? 'Hide Add Form' : 'Add New Car'}
            </button>
            {showAddForm && <AddCar onCarAdded={fetchCars} />} 
            <ul>
                {cars.map(car => (
                    <li key={car.carId}>
                        {car.model} {car.make} - {car.makeYear} ({car.color})
                        <button onClick={() => handleDelete(car.carId)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CarsList;
