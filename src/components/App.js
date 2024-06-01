import React, { useState } from 'react';
import Module from './Module';
import ModuleForm from './ModuleForm';
import ResourceForm from './ResourceForm';
import '../styles/styles.css';

const App = () => {
  const [modules, setModules] = useState([]);

  const addModule = (moduleName) => {
    setModules([...modules, { id: Date.now(), name: moduleName, resources: [] }]);
  };

  const addResource = (moduleId, resource) => {
    setModules(modules.map((module) => {
      if (module.id === moduleId) {
        return { ...module, resources: [...module.resources, resource] };
      }
      return module;
    }));
  };

  return (
    <div className="app">
      <h1>Course Builder</h1>
      <ModuleForm addModule={addModule} />
      {modules.map((module) => (
        <div key={module.id}>
          <Module module={module} setModules={setModules} />
          <ResourceForm moduleId={module.id} addResource={addResource} />
        </div>
      ))}
    </div>
  );
};

export default App;
