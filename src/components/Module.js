import React from 'react';
import { useDragDrop } from '../hooks/useDragDrop';
import Resource from './Resource';

const Module = ({ module, setModules, addResource }) => {
  const { name, resources } = module;
  const { dropRef, isOver } = useDragDrop(module, setModules);

  const handleDelete = () => {
    setModules((prev) => prev.filter((m) => m.id !== module.id));
  };

  return (
    <div ref={dropRef} className={`module ${isOver ? 'over' : ''}`}>
      <h2>{name}</h2>
      <button onClick={handleDelete}>Delete Module</button>
      {resources.map((resource) => (
        <Resource key={resource.id} resource={resource} />
      ))}
    </div>
  );
};

export default Module;
