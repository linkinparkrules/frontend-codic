import { useDrop } from 'react-dnd';
import { useState } from 'react';

const Drop = ({ value }) => {
  const [text, setText] = useState();
  const [blankPadding, setBlankPadding] = useState("7px 80px")
  const [collected, drop] = useDrop(() => ({
    accept: value._id,
    drop: (item, monitor) => {
      // console.log(item);
      setText(`${value.name}`);
      setBlankPadding("5px 0px");
      return item;
    },
    hover: (item, monitor) => {
      const check = monitor.isOver({ shallow: true })
      // console.log(check);
    }
    // collect: (monitor) => ({
    //   canDrop: monitor.canDrop()
    // })
  }));
  // console.log(collected);
  return (
    <p className="meaning" ref={drop}>
      <span className='blank' style={{ padding: blankPadding }}>{text}</span>
      : {value.meaning}
    </p>
  );
}

export default Drop;