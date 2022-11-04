import "./Bug.css"
import { useEffect, useState } from "react";
import GameArea from "./gameArea";
import TextArea from "./textArea";
import { randomDataFlex } from "./randomData";

const Bug = () => {
    useEffect(() => {
        
        // // fire.childNodes[0].style.color = "yellow"
        // console.log(fire.childNodes[0].style);    
        
        setBugSetup({
            display: "flex",
            justifyContent: "flex-end",
        })
    }, [])

    const [bugSetup, setBugSetup] = useState({});
    const [fireSetup, setFireSetup] = useState({});

    function changeBugSetup() {
        console.log("change stage");
        // setBugSetup({

        // })
        console.log(randomDataFlex.flexDirection[Math.floor(Math.random()*randomDataFlex.flexDirection.length)]);
    }

    return (
        <div className="gameContainer">
            <h1 className="heading">DA GAME: THIS BUG IS ON FIREEEEEEE</h1>
            <p className="text22"> Trong lúc code, chắc chắn các bạn sẽ gặp những chú bọ rất "đáng yêu".
                <br />CHÚNG PHÁ CHƯƠNG TRÌNH CỦA BẠN. HÃY NÉM NGỌN LỬA VÀO CHÚNG NÀOOOOOO!!!
            </p>
            <p className="show-in-phone"> HÃY NÉM NHỮNG NGỌN LỬA VÀO CON BUG NÀOOOOOO!!!
            </p>
            <div id="gameScreen">
                <GameArea id="gameArea" character="bug" style={bugSetup}>
                    <i style={{ color: "rgb(247, 102, 102)" }} className="fa-solid fa-bug"></i>
                    <i style={{ color: "rgb(238, 238, 98)" , display: "none"}} className="fa-solid fa-bug"></i>
                    <i style={{ color: "lightgreen" , display: "none"}} className="fa-solid fa-bug"></i>
                </GameArea>
                <GameArea id="gameArea2" character="fire" style={fireSetup}>
                    <i style={{ color: "red" }} className="fa-solid fa-fire"></i>
                    <i style={{ color: "yellow", display: "none" }} className="fa-solid fa-fire"></i>
                    <i style={{ color: "green", display: "none" }} className="fa-solid fa-fire"></i>
                    {/* <i style={{ color: "rgb(247, 102, 102)" }} className="fa-solid fa-fire-flame-curved"></i> */}
                </GameArea>
            </div>
            <div id="codeScreen">
                <p id="task" className="text22"></p>
                <TextArea fireSetup={setFireSetup} bugSetup={changeBugSetup}/>
            </div>
        </div>

    );
};

export default Bug;