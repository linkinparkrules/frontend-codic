import { useDrag } from 'react-dnd';
import { useState } from 'react';

const Drag = ({ value }) => {
  const [display, setDisplay] = useState("inline");

  const [collected, drag] = useDrag(() => ({
    type: value._id,
    item: value,
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        setDisplay("none");
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    })
  }))
  const opacity = collected.isDragging ? 0.4 : 1;
  return (
    <p
      className="css"
      style={{ opacity, cursor: "pointer", display: display }}
      ref={drag}
    >
      {value.name}
    </p>
  );
};

export default Drag;