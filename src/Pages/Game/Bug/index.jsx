// import BackGround1 from "./BackGround1";
import "./Bug.css"

const Bug = () => {
    return (
        <div className="gameContainer">
            <h1 className="heading">DA GAME: THIS BUG IS ON FIREEEEEEE</h1>
            <p className="text22"> Trong lúc code, chắc chắn các bạn sẽ gặp những chú bọ rất "đáng yêu".
                <br />CHÚNG PHÁ CHƯƠNG TRÌNH CỦA BẠN. HÃY NÉM CHÚNG VÀO LỬA NÀOOOOOO!!!
            </p>
            <div id="gameScreen">
                <div id="gameArea" style={{ border: `1px solid rgba(0, 0, 0, 0.658)` }}>
                    <div id="bug">
                        {/* <i style="color: red; font-size: calc(25px + 3vw);" className="fa-solid fa-bug"></i> */}
                    </div>
                </div>
                <div id="gameArea2" style={{ border: "1px solid rgba(0, 0, 0, 0.678)" }}>
                    <div id="fire">
                        {/* <!-- <i style="color: red; font-size: calc(55px + 3vw)" className="fa-solid fa-fire"></i> --> */}
                        {/* <i style="color: rgb(247, 102, 102); font-size: calc(55px + 3vw)" className="fa-solid fa-fire-flame-curved"></i> */}
                    </div>
                </div>
            </div>
            <div id="codeScreen">
                <p id="task" className="text22"></p>
                <textarea id="userCode" rows="5" cols="60"></textarea>
                <br />
                <button type="button" id="nextStage">Continue</button>
            </div>
        </div>

    );
};

export default Bug;