import "./Bug.css"
import { useEffect } from "react";
import GameArea from "./gameArea";
import TextArea from "./textArea";

const Bug = () => {
    useEffect(() => {
        let fire = document.getElementById("fire");
        // fire.childNodes[0].style.color = "yellow"
        console.log(fire.childNodes[0].style.color);    
    }, [])

    return (
        <div className="gameContainer">
            <h1 className="heading">DA GAME: THIS BUG IS ON FIREEEEEEE</h1>
            <p className="text22"> Trong lúc code, chắc chắn các bạn sẽ gặp những chú bọ rất "đáng yêu".
                <br />CHÚNG PHÁ CHƯƠNG TRÌNH CỦA BẠN. HÃY NÉM CHÚNG VÀO LỬA NÀOOOOOO!!!
            </p>
            <div id="gameScreen">
                <GameArea id="gameArea" character="bug">
                    <i style={{ color: "red" }} className="fa-solid fa-bug"></i>
                </GameArea>
                <GameArea id="gameArea2" character="fire">
                    <i style={{color: "rgb(247, 102, 102)"}} className="fa-solid fa-fire"></i>
                    {/* <i style={{ color: "rgb(247, 102, 102)" }} className="fa-solid fa-fire-flame-curved"></i> */}
                </GameArea>
            </div>
            <div id="codeScreen">
                <p id="task" className="text22"></p>
                <TextArea />
            </div>
        </div>

    );
};

export default Bug;