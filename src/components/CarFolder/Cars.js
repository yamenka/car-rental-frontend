import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../../apiConfig';
import carList from './CarList';
import carDetails from './CarDetails';
import carForm from './CarForm';
//import Footer from '../Footer'; 

const Cars = () => {
  const [Cars, setCars] = useState([]);
  const [error, setError] = useState('');
  const [selectedcar, setSelectedcar] = useState(null);
  const [editingcar, setEditingcar] = useState(null);

  useEffect(() => {
    // Fetch car data when component mounts
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}Car`);
      setCars(response.data);
      setSelectedcar(null);
      setEditingcar(null);
    } catch (error) {
      console.error('Error fetching car:', error);
    }
  };

const handleEdit = (id) => {
  console.log('Edit button clicked for id:', id);
  const selected = Cars.find((car) => Cars.id === id);
  console.log('Selected car:', selected);
  setSelectedcar(null);

  setEditingcar({ id: selected.id, carName: selected.carName, industry: selected.industry});
};



  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}Car/${id}`);
      fetchCars();
    } catch (error) {
      console.error('Error deleting car:', error);
    }
  };

  /*
  const handleViewDetails = (id) => {
    const selected = Cars.find((car) => car.id === id);
    setSelectedcar(selected);
    setEditingcar(null);
  };
  */

  const handleCreate = () => {
    setSelectedcar(null);
    setEditingcar({ carName: '', industry: ''});
  };

  const handleCancelEdit = () => {
    setEditingcar(null);
  };

const handleFormSubmit = async (event) => {
  event.preventDefault();
  try {
    console.log('Editing car:', editingcar);

    if (editingcar) {
      if (editingcar.cleintId) {
        console.log('Updating existing car:', editingcar);
        await axios.put(`${API_BASE_URL}Car/${editingcar.id}`, editingcar);
		
      } else {
        // Remove the existing id property for new Cars
        const { id, ...newcar } = editingcar;
        console.log('Creating new car:', newcar);
        await axios.post(`${API_BASE_URL}Car`, newcar);
      }
      fetchCars();
    }
  } catch (error) {
    console.error('Error saving Cars:', error);
    setError('Error saving the car, please check the input')
    console.error('Response data:', error.response?.data);
  } finally {
    setEditingcar(null);
  }
};




  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="flex-grow-1">
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <carList Cars={Cars} handleEdit={handleEdit} handleDelete={handleDelete} />
      {selectedcar && <carDetails car={selectedcar} />}
      {editingcar && (
        <carForm
          car={editingcar}
          handleInputChange={(e) => setEditingcar({ ...editingcar, [e.target.name]: e.target.value })}
          handleSubmit={handleFormSubmit}
          handleCancel={handleCancelEdit}
        />
      )}
      {!editingcar && <button onClick={handleCreate} className="btn btn-success">Create New car</button>}
      </div>
    </div>
  );
};

export default Cars;