// src/hooks/useDragDrop.js

import { useDrop } from 'react-dnd';

export const useDragDrop = (module, setModules) => {
  const [{ isOver }, dropRef] = useDrop({
    accept: 'RESOURCE',
    drop: (item) => {
      setModules((prev) =>
        prev.map((m) =>
          m.id === module.id
            ? { ...m, resources: [...m.resources, item] }
            : m
        )
      );
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return { dropRef, isOver };
};
