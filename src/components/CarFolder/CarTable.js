import GenericTable from '../GenericTable'; 

const columns = [
  { field: 'id', headerName: 'ID' },
  { field: 'carModel', headerName: 'Car Model' },
  { field: 'carMake', headerName: 'make' },
  { field: 'makeYear', headerName: 'makeYear' },
  { field: 'horsePower', headerName: 'horsePower' },
  { field: 'color', headerName: 'color' },
];

const CarTable = ({ cars, handleEdit, handleDelete }) => {
  return <GenericTable columns={columns} data={cars} handleEdit={handleEdit} handleDelete={handleDelete} />;
};

export default CarTable;