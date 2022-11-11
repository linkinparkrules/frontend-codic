import { useState } from "react";
import GameArea from "./GameArea";

const Game = ({ setDisplayGame, setWordNum, renderData, wordNum }) => {
  const [continueBtn, setContinueBtn] = useState("none");
  const [retryBtn, setRetryBtn] = useState("none");
  const [count, setCount] = useState(0);

  function continueClick() {
    setWordNum((prev) => prev + 2)
    setCount(0);
    setContinueBtn("none");
    setDisplayGame(false);
  }

  return (
    <>
      {/* Trò chơi */}
      <div className="dragdrop-game" id="dragdrop">
        <div className="game-infor">
          {/* nút quay lại màn hình chọn trò chơi */}
          <button
            type="button"
            id="backToChoose"
            onClick={() => {
              setDisplayGame(false);
              setWordNum(4);
            }}
          >
            <i class="fa-solid fa-angles-left"></i> Back
          </button>
          {/* TIÊU ĐỀ */}
          <h1 className="heading1">Kéo và thả - Drag and drop</h1>
          <h3>Số từ ở màn chơi này: {wordNum}</h3>
          {/* <CountDownClock/> */}
        </div>
        {/* MÀN HÌNH GAME */}
        <GameArea
          renderData={renderData}
          setContinueBtn={setContinueBtn}
          wordNum={wordNum}
          count={count}
          setCount={setCount}
        />
        <div className="btn">
          {/* NÚT CHUYỂN MÀN CHƠI */}
          <button
            type="button"
            id="nextStage"
            style={{ display: continueBtn }}
            onClick={continueClick}
          >
            Continue <i class="fa-solid fa-angles-right"></i>
          </button>
          {/* NÚT CHƠI lẠI */}
          <button
            type="button"
            id="retry"
            style={{ display: retryBtn }}
          >
            Retry
          </button>
        </div>
      </div>
    </>
  );
};

export default Game;