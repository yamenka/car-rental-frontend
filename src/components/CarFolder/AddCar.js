import React, { useState } from 'react';
import axios from 'axios';

const AddCar = () => {
    const [formData, setFormData] = useState({
        make: '',
        model: '',
        makeYear: '',
        color: '',
        horsePower: ''
    });
    const [submitStatus, setSubmitStatus] = useState('');

    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSubmitStatus('');  // Clear previous status messages
        try {
            const response = await axios.post('http://57.151.121.7:8080/api/Car/', formData);
            console.log('Car added:', response.data);
            setSubmitStatus('Car added successfully!');
            // Reset form data
            setFormData({
                make: '',
                model: '',
                makeYear: '',
                color: '',
                horsePower: ''
            });
        } catch (error) {
            console.error('Failed to add car:', error.response ? error.response.data : 'Unknown error');
            setSubmitStatus('Failed to add car: ' + (error.response ? error.response.data : 'Unknown error'));
        }
    };

    return (
        <div>
            <h2>Add New Car</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="make"
                    value={formData.make}
                    onChange={handleInputChange}
                    placeholder="Make"
                />
                <input
                    type="text"
                    name="model"
                    value={formData.model}
                    onChange={handleInputChange}
                    placeholder="Model"
                />
                <input
                    type="number"
                    name="makeYear"
                    value={formData.makeYear}
                    onChange={handleInputChange}
                    placeholder="Make Year"
                />
                <input
                    type="text"
                    name="color"
                    value={formData.color}
                    onChange={handleInputChange}
                    placeholder="Color"
                />
                <input
                    type="number"
                    name="horsePower"
                    value={formData.horsePower}
                    onChange={handleInputChange}
                    placeholder="Horse Power"
                />
                <button type="submit">Add Car</button>
                {submitStatus && <p>{submitStatus}</p>}
            </form>
        </div>
    );
};

export default AddCar;
