import "./DragDrop.css"
import { shuffle } from ".";
import Drag from "./Drag";
import Drop from "./Drop";
import { useEffect, useState } from "react";

const GameArea = ({ renderData, setContinueBtn, wordNum }) => {
  const [count, setCount] = useState(0);
  // let dragCom = shuffle(renderData);
  useEffect(() => {
    if (count === wordNum) {
      setContinueBtn("block")
    }
  }, [count, wordNum, setContinueBtn])
  console.log(count);

  return (
    <div className="game-area">
      <div className="definition">
        <div className="board1">
          {renderData.map((info, index) => {
            return <Drop
              key={index}
              value={info}
            />
          })}
        </div>
      </div>
      <div className="Lists">
        {(renderData).map((info, index) => {
          return <Drag
            key={index}
            value={info}
            count={setCount}
          />
        })}
      </div>
    </div>
  );
};

export default GameArea;