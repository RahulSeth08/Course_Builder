import React, { useState } from 'react';

const ModuleForm = ({ addModule }) => {
  const [moduleName, setModuleName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addModule(moduleName);
    setModuleName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={moduleName}
        onChange={(e) => setModuleName(e.target.value)}
        placeholder="Add module"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default ModuleForm;
