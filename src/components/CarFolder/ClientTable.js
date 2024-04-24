import GenericTable from '../GenericTable'; 

const columns = [
  { field: 'id', headerName: 'ID' },
  { field: 'clientName', headerName: 'Client Name' },
  { field: 'industry', headerName: 'Industry' }
];

const ClientTable = ({ clients, handleEdit, handleDelete }) => {
  return <GenericTable columns={columns} data={clients} handleEdit={handleEdit} handleDelete={handleDelete} />;
};

export default ClientTable;