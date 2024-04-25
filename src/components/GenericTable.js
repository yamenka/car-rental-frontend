import React from 'react';

const GenericTable = ({ columns, data, handleEdit, handleDelete }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col.field}>{col.headerName}</th>
          ))}
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            {columns.map((col) => (
              <td key={`${item.id}-${col.field}`}>{item[col.field]}</td>
            ))}
            <td>
              <button className="btn btn-info" onClick={() => handleEdit(item.id)}>Edit</button>
              <button className="btn btn-warning" onClick={() => handleDelete(item.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default GenericTable;