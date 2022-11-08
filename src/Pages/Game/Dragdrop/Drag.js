import { useDrag } from 'react-dnd';
import { useState } from 'react';

const Drag = ({ value }) => {
  const [text, setText] = useState(value.name);

  const [collected, drag, dragPreview] = useDrag(() => ({
    type: value._id,
    item: value,
    end: (item, monitor) => {
      // console.log(JSON.stringify(item));
      // console.log(monitor);
      
    }
  }))

  return (
    <p className="css" ref={drag}>
      {text}
    </p>
  );
};

export default Drag;