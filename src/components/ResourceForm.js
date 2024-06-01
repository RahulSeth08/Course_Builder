import React, { useState } from 'react';

const ResourceForm = ({ moduleId, addResource }) => {
  const [resourceType, setResourceType] = useState('link');
  const [resource, setResource] = useState({ name: '', url: '' });
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (resourceType === 'pdf' && file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        addResource(moduleId, { ...resource, type: 'pdf', file: reader.result, id: Date.now() });
        setResource({ name: '', url: '' });
        setFile(null);
      };
      reader.readAsDataURL(file);
    } else {
      addResource(moduleId, { ...resource, type: resourceType, id: Date.now() });
      setResource({ name: '', url: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <select value={resourceType} onChange={(e) => setResourceType(e.target.value)}>
        <option value="link">Link</option>
        <option value="pdf">PDF</option>
      </select>
      <input
        type="text"
        value={resource.name}
        onChange={(e) => setResource({ ...resource, name: e.target.value })}
        placeholder="Resource name"
        required
      />
      {resourceType === 'link' ? (
        <input
          type="text"
          value={resource.url}
          onChange={(e) => setResource({ ...resource, url: e.target.value })}
          placeholder="Resource URL"
          required
        />
      ) : (
        <input
          type="file"
          accept="application/pdf"
          onChange={(e) => setFile(e.target.files[0])}
          required
        />
      )}
      <button type="submit">Add Resource</button>
    </form>
  );
};

export default ResourceForm;
