import { useRef, useState, useEffect } from "react";
import "./DragDrop.css"
import selection from '../../../Asset/Background/selection.jpg'
import http from "../../../Utils/Axios"

const BackGround1 = () => {
    const [displayGame, setDisplayGame] = useState("none")
    const [data, setData] = useState();
    const [htmlData, setHtmlData] = useState();
    const [cssData, setCssData] = useState();
    const [jsData, setJsData] = useState();
    const dragDrop = useRef();
    useEffect(() => {
        http.get("/exercise/element")
            .then((res) => {
                console.log(res)
                setData(res.data);
            })
    }, [])
    function scrollToHtml() {
        dragDrop.current.scrollIntoView();
        setDisplayGame("block");
        setHtmlData(data.filter((html) => {
            if (html.tagType === "html") {
                return html
            } else { return "" }
        }))
    }

    function scrollToCss() {
        dragDrop.current.scrollIntoView();
        setDisplayGame("block");
        setCssData(data.filter((css) => {
            if (css.tagType === "css") {
                return css
            } else { return "" }
        }))
    };

    function scrollToJs() {
        dragDrop.current.scrollIntoView();
        setDisplayGame("block");
        setJsData(data.filter((js) => {
            if (js.tagType === "js") {
                return js
            } else { return "" }
        }))
    };

    return (
        <>
            {/* Background lựa kiến thức chơi */}
            <div className="selection">
                <div className="content-selection">
                    <h2>Let's play and chill</h2>
                    <p>Hãy cùng giải trí và học tập.</p>
                    <p>Tăng hiệu quả, khả năng tiếp thu.</p>
                    <p>Chơi thôi nào!!!</p>
                    <p className="margin10">Hãy lựa chọn ngôn ngữ bạn muốn luyện tập:</p>
                    <button id="html" onClick={scrollToHtml}>HTML</button>
                    <button id="css" onClick={scrollToCss}>CSS</button>
                    <button id="js" onClick={scrollToJs}>Javacript</button>
                </div>
                <img src={selection} alt="Ảnh trò chơi" />
            </div>

            {/* Trò chơi */}
            <div className="dragdrop-game" style={{ display: displayGame }} ref={dragDrop} id="dragdrop">
                <div className="game-infor">
                    <h1 className="heading1">Kéo và thả - Drag and drop</h1>
                    <p className="center"></p>
                    <div id="time"></div>
                </div>
                <div className="game-area">
                    <div className="definition">
                        <div className="board1">
                        </div>

                    </div>
                    <div className="Lists">
                    </div>
                </div>
                <div className="btn">
                    <button type="button" id="nextStage">Continue</button>
                    <button type="button" id="retry">Retry</button>
                </div>
            </div>
        </>
    )
}

export default BackGround1;