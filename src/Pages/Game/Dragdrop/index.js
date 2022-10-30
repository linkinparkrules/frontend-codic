import "./dragdrop.css";
import selection from "../../../Asset/Background/selection.jpg";

const Dragdrop = () => {
    return (
        <>
            {/* <!-- Background lựa kiến thức chơi --> */}
            <div class="selection">
                <div class="content-selection">
                    <h2>Let's play and chill</h2>
                    <p>Hãy cùng giải trí và học tập. Tăng hiệu quả, khả năng tiếp thu.</p>
                    <p>Chơi thôi nào!!!</p>
                    <p class="margin10">Hãy lựa chọn ngôn ngữ bạn muốn luyện tập:</p>
                    <button id="html"><a href="#dragdrop">HTML</a></button>
                    <button id="css"><a href="#dragdrop">CSS</a></button>
                    <button id="js"><a href="#dragdrop">Javacript</a></button>
                </div>
                {/* <!-- <img src="./Asset/Background/element.jpg" alt="Ảnh trò chơi"> --> */}
                <img src={selection} alt="Ảnh trò chơi" />
            </div>

            {/* <!-- Trò chơi --> */}
            <div class="dragdrop-game" id="dragdrop">
                <div class="game-infor">
                    <h1 class="heading1">Kéo và thả - Drag and drop</h1>
                    <p class="center"></p>
                    <div id="time"></div>
                </div>
                <div class="game-area">
                    <div class="definition">
                        <div class="board1">
                            {/* <!-- <p class="meaning"><span class="blank" id="background-color"></span>: màu nền</p> --> */}
                        </div>

                    </div>
                    <div class="Lists">
                        {/* <!-- <p class="css" draggable="true"></p> --> */}
                    </div>
                </div>
                <div class="btn">
                    <button type="button" id="nextStage">Continue</button>
                    <button type="button" id="retry">Retry</button>
                </div>
            </div>
        </>
    )
};

export default Dragdrop;