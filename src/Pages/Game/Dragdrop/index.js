import "./dragdrop.module.css";
import selection from "../../../Asset/Background/selection.jpg";

const Dragdrop = () => {
    return (
        <>
            {/* <!-- Background lựa kiến thức chơi --> */}
            <div className="dragdropSelection">
                <div className="content-dragdropSelection">
                    <h2>Let's play and chill</h2>
                    <p>Hãy cùng giải trí và học tập. Tăng hiệu quả, khả năng tiếp thu.</p>
                    <p>Chơi thôi nào!!!</p>
                    <p className="margin10">Hãy lựa chọn ngôn ngữ bạn muốn luyện tập:</p>
                    <button id="html"><a href="#dragdrop">HTML</a></button>
                    <button id="css"><a href="#dragdrop">CSS</a></button>
                    <button id="js"><a href="#dragdrop">Javacript</a></button>
                </div>
                {/* <!-- <img src="./Asset/Background/element.jpg" alt="Ảnh trò chơi"> --> */}
                <img src={selection} alt="Ảnh trò chơi" />
            </div>

            {/* <!-- Trò chơi --> */}
            <div className="dragdrop-game" id="dragdrop">
                <div className="game-infor">
                    <h1 className="heading1">Kéo và thả - Drag and drop</h1>
                    <p className="center"></p>
                    <div id="time"></div>
                </div>
                <div className="game-area">
                    <div className="definition">
                        <div className="board1">
                            {/* <!-- <p className="meaning"><span className="blank" id="background-color"></span>: màu nền</p> --> */}
                        </div>

                    </div>
                    <div className="Lists">
                        {/* <!-- <p className="css" draggable="true"></p> --> */}
                    </div>
                </div>
                <div className="btn">
                    <button type="button" id="nextStage">Continue</button>
                    <button type="button" id="retry">Retry</button>
                </div>
            </div>
        </>
    )
};

export default Dragdrop;