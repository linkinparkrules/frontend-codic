import { useState, useEffect, useMemo } from "react";
import "./DragDrop.css"
import selection from '../../../Asset/Background/selection.jpg';
import http from "../../../Utils/Axios";
import Game from "./GameTitle";
import { CountDownClock } from "./CountDownClock";
import AuthAccess from "../../../Context/AuthContext";

const DragDrop = () => {
  // lưu trữ data lấy từ database
  const [data, setData] = useState({ html: [], css: [], js: [] });
  const [displayGame, setDisplayGame] = useState(false);
  const [wordNum, setWordNum] = useState(4);
  const [typeGame, setTypeGame] = useState();
  useEffect(() => {
    http.get("/exercise/element")
      .then((res) => {
        // console.log(res.data)
        setData({
          html: res.data.htmlTag,
          css: res.data.cssTag,
          js: res.data.jsTag
        });
      }).catch((err) => {
        console.log(err.message);
      })
  }, [])

  const renderData = useMemo(() => {
    if (!typeGame) {
      return [];
    } else {
      return shuffle(data[typeGame]).slice(0, wordNum);
    }
  }, [data, typeGame, wordNum])

  function showGame(type) {
    setDisplayGame(true);
    setTypeGame(type)
  }

  if (!data) {
    return (
      <div
        className="dragdropLoading"
        style={{
          backgroundImage:
            `linear-gradient(to bottom right, 
              #${Math.floor(Math.random() * 16777215).toString(16)}, 
              #${Math.floor(Math.random() * 16777215).toString(16)})`
        }}>
        <div>
          {"Loading... (bạn chờ chút nhé <3)"}
        </div>
      </div>
    );
  };

  return (
    <AuthAccess mode="message">
      {displayGame ? (
        <Game
          setDisplayGame={setDisplayGame}
          setWordNum={setWordNum}
          renderData={renderData}
          wordNum={wordNum}
        />
      ) : (
        <div className="selection">
          <div className="content-selection">
            <h2>Let's play and chill</h2>
            <p>Hãy cùng giải trí và học tập. Tăng hiệu quả, khả năng tiếp thu.</p>
            <p>Chơi thôi nào!!!</p>
            <p className="margin10">Hãy lựa chọn ngôn ngữ bạn muốn luyện tập:</p>
            <button id="html" onClick={() => showGame("html")}>HTML</button>
            <button id="css" onClick={() => showGame("css")}>CSS</button>
            <button id="js" onClick={() => showGame("js")}>Javacript</button>
          </div>
          <img src={selection} alt="Ảnh trò chơi" />
        </div>
      )}
    </AuthAccess>
  );
};

export default DragDrop;

export function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]
    ]
  }

  return array;
};