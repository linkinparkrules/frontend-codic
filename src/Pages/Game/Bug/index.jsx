import "./Bug.css"
import { useEffect, useState } from "react";
import GameArea from "./gameArea";
import TextArea from "./textArea";
import { randomDataFlex } from "./randomData";
import AuthAccess from "../../../Context/AuthContext";

const Bug = () => {
    useEffect(() => {
        setBugSetup({
            display: "flex",
            justifyContent: "flex-end",
        })
    }, [])
    let fire = document.getElementById("fire");
    const [bugSetup, setBugSetup] = useState({});
    const [fireSetup, setFireSetup] = useState({});
    const [displayBugFire, setDisplayBugFire] = useState("none")

    function changeBugSetup() {
        console.log("change stage");
        fire.style = "";
        if (displayBugFire === "none") {
            setDisplayBugFire("block");
        }
        setBugSetup({
            display: randomDataFlex.display,
            flexDirection: randomDataFlex.flexDirection[Math.floor(Math.random() * randomDataFlex.flexDirection.length)],
            justifyContent: randomDataFlex.justifyContent[Math.floor(Math.random() * randomDataFlex.justifyContent.length)],
            alignItems: randomDataFlex.alignItems[Math.floor(Math.random() * randomDataFlex.alignItems.length)]
        })
        // console.log(randomDataFlex.flexDirection[Math.floor(Math.random() * randomDataFlex.flexDirection.length)]);
    }

    return (
        // <AuthAccess mode="message">
        <div>
            <div className="gameContainer">
                <h1 className="heading">DA GAME: THIS BUG IS ON FIREEEEEEE</h1>
                <p className="text22"> Trong lúc code, chắc chắn các bạn sẽ gặp những chú bọ rất "đáng yêu".
                    <br />CHÚNG PHÁ CHƯƠNG TRÌNH CỦA BẠN. HÃY NÉM NGỌN LỬA VÀO CHÚNG NÀOOOOOO!!!
                </p>
                <div id="gameScreen">
                    <GameArea id="gameArea" character="bug" style={bugSetup}>
                        <i style={{ color: "rgb(247, 102, 102)" }} className="fa-solid fa-bug"></i>
                        <i style={{ color: "rgb(238, 238, 98)", display: displayBugFire }} className="fa-solid fa-bug"></i>
                        <i style={{ color: "lightgreen", display: displayBugFire }} className="fa-solid fa-bug"></i>
                    </GameArea>
                    <GameArea id="gameArea2" character="fire" style={fireSetup}>
                        <i style={{ color: "red" }} className="fa-solid fa-fire"></i>
                        <i style={{ color: "yellow", display: displayBugFire }} className="fa-solid fa-fire"></i>
                        <i style={{ color: "green", display: displayBugFire }} className="fa-solid fa-fire"></i>
                        {/* <i style={{ color: "rgb(247, 102, 102)" }} className="fa-solid fa-fire-flame-curved"></i> */}
                    </GameArea>
                </div>
                <div id="codeScreen">
                    <p id="task" className="text22"></p>
                    <TextArea fireSetup={setFireSetup} newStageBugSetup={changeBugSetup} bugSetting={bugSetup} />
                </div>
            </div>
        {/* </AuthAccess> */}
        </div>
    );
};

export default Bug;