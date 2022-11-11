import "./DragDrop.css"
import { shuffle } from ".";
import Drag from "./Drag";
import Drop from "./Drop";
import { useEffect, useMemo } from "react";

const GameArea = ({ renderData, setContinueBtn, wordNum, count, setCount }) => {
  useEffect(() => {
    if (count === wordNum) {
      setContinueBtn("block")
    }
  }, [count, wordNum, setContinueBtn])
  console.log(count);

  const arrayShuffle = useMemo(() => {
    return shuffle([...Array(renderData.length).keys()]);
  }, [renderData]);
  // console.log(arrayShuffle)

  return (
    <div className="game-area">
      <div className="definition">
        <div className="board1">
          {arrayShuffle.map((item) => (
            <Drop
              key={renderData[item]._id}
              value={renderData[item]}
              setCount={setCount}
            />
          ))}
        </div>
      </div>
      <div className="Lists">
        {renderData.map((info, index) => {
          return <Drag
            key={index}
            value={info}
          />
        })}
      </div>
    </div>
  );
};

export default GameArea;