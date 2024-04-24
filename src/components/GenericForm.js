import React from 'react';

const GenericForm = ({ formData, fields, handleInputChange, handleSubmit, handleCancel }) => {
  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit} className="form">
        {fields.map((field) => (
          <div key={field.name} className="form-group">
            <label>
              {field.label}:
              {field.type === 'select' ? (
                <select
                  className="form-control"
                  name={field.name}
                  value={formData[field.name] || ''}
                  onChange={handleInputChange}
                >
                  {field.options.map((option) => (
                    <option key={option.value} value={option.value}>{option.text}</option>
                  ))}
                </select>
              ) : (
                <input
                  className="form-control"
                  type={field.type}
                  name={field.name}
                  value={formData[field.name] || ''}
                  onChange={handleInputChange}
                  placeholder={field.placeholder || ''}
                />
              )}
            </label>
          </div>
        ))}
        <div className="form-group">
          <button type="submit" className="btn btn-outline-success">Save</button>
          <button type="button" className="btn btn-outline-warning" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default GenericForm;