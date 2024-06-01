import React from 'react';

const Resource = ({ resource }) => {
  return (
    <div className="resource">
      <p>{resource.name}</p>
      {resource.type === 'link' && <a href={resource.url} target="_blank" rel="noopener noreferrer">{resource.url}</a>}
      {resource.type === 'pdf' && (
        <embed src={resource.file} type="application/pdf" width="100%" height="500px" />
      )}
    </div>
  );
};

export default Resource;
