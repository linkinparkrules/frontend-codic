import { useDrop } from 'react-dnd';
import { useState } from 'react';

const Drop = ({ value, setCount }) => {
  const [text, setText] = useState();
  const [blankPadding, setBlankPadding] = useState("7px 80px")
  const [collected, drop] = useDrop(() => ({
    accept: value._id,
    drop: (item, monitor) => {
      // console.log(item);
      setCount((prev) => prev + 1);
      setText(`${value.name}`);
      setBlankPadding("7px 5px");
      return item;
    }
  }));
  return (
    <p className="meaning" ref={drop}>
      <span className='blank' style={{ padding: blankPadding }}>{text}</span>
      : {value.meaning}
    </p>
  );
}

export default Drop;