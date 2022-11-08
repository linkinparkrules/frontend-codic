import "./DragDrop.css"
import { shuffle } from ".";
import Drag from "./Drag";
import Drop from "./Drop";

const Game = ({ setDisplayGame, setWordNum, renderData }) => {
  return (
    <>
      {/* Trò chơi */}
      <div
        className="dragdrop-game"
        id="dragdrop"
      >
        <div className="game-infor">
          <button
            type="button"
            id="backToChoose"
            onClick={() => {
              setDisplayGame(false);
              setWordNum(4);
            }}
          >
            Back
          </button>
          <h1 className="heading1">Kéo và thả - Drag and drop</h1>
          <p className="center"></p>
          <h3>Số từ ở màn chơi này: { }</h3>
          {/* <CountDownClock/> */}
        </div>
        <div className="game-area">
          <div className="definition">
            <div className="board1">
              {renderData.map((info, index) => {
                return <Drop key={index} value={info} />
              })}
            </div>
          </div>
          <div className="Lists">
            {shuffle(renderData).map((info, index) => {
              return <Drag key={index} value={info} />
            })}
          </div>
        </div>
        <div className="btn">
          <button type="button" id="nextStage">Continue</button>
          <button type="button" id="retry">Retry</button>
        </div>
      </div>
    </>
  );
};

export default Game;