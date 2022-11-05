import { useRef, useState, useEffect } from "react";
import "./DragDrop.css"
import selection from '../../../Asset/Background/selection.jpg';
import { Drag, Drop } from './dragNdrop.js'
import http from "../../../Utils/Axios";
import { CountDownClock } from "./CountDownClock";

const DragDrop = () => {
    // lưu trữ data lấy từ database
    const [data, setData] = useState();
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
 
    function scrollToGame() {}
    function displayGame() {}

    if (!data) {
        return (
            <div className="dragdropLoading" style={{ backgroundImage: `linear-gradient(to bottom right, #${Math.floor(Math.random() * 16777215).toString(16)}, #${Math.floor(Math.random() * 16777215).toString(16)})` }}>
                <div>{"Loading... (bạn chờ chút nhé <3)"}</div>
            </div>)
    }
   
    return (
        <>
            {/* Background lựa kiến thức chơi */}
            <div className="selection">
                <div className="content-selection">
                    <h2>Let's play and chill</h2>
                    <p>Hãy cùng giải trí và học tập. Tăng hiệu quả, khả năng tiếp thu.</p>
                    <p>Chơi thôi nào!!!</p>
                    <p className="margin10">Hãy lựa chọn ngôn ngữ bạn muốn luyện tập:</p>
                    <button id="html" onClick={scrollToGame}>HTML</button>
                    <button id="css" onClick={scrollToGame}>CSS</button>
                    <button id="js" onClick={scrollToGame}>Javacript</button>
                </div>
                <img src={selection} alt="Ảnh trò chơi" />
            </div>

            {/* Trò chơi */}
            <div className="dragdrop-game" style={{ display: displayGame }} id="dragdrop">
                <div className="game-infor">
                    <h1 className="heading1">Kéo và thả - Drag and drop</h1>
                    <p className="center"></p>
                    <h3>Số từ ở màn chơi này: {}</h3>
                    {/* <CountDownClock/> */}
                </div>
                <div className="game-area">
                    <div className="definition">
                        <div className="board1">
                            <div>DROP</div>
                        </div>
                    </div>
                    <div className="Lists">
                        <div>DRAG</div>
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

export default DragDrop;
