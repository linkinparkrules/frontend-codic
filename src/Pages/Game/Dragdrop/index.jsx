import { useRef, useState, useEffect } from "react";
import "./DragDrop.css"
import selection from '../../../Asset/Background/selection.jpg';
import { Drag, Drop } from './dragNdrop.js'
import http from "../../../Utils/Axios";

const DragDrop = () => {
    const [displayGame, setDisplayGame] = useState("none");
    const [data, setData] = useState();
    let timeLimit = useRef(10);
    let time = useRef(timeLimit.current);
    const [countdownTime, setCountdownTime] = useState(time.current);
    const [nextDisplay, setNextDisplay] = useState("none");
    const [retryDisplay, setRetryDisplay] = useState("none");

    let list = [];
    let meaning = [];

    // vieets laij
    const longestDataLength = useRef();
    const gameSelection = useRef([]);
    const draggedItem = useRef(false);
    const initialDroppedIdNum = useRef([]);
    const initialDroppedItem = useRef([]);
    const droppedIdNum = useRef([]);
    const droppedName = useRef("-1");
    const blankPadding = useRef([]);
    const [blankDisplay, setBlankDisplay] = useState([]);
    const [dragDisplay, setDragDisplay] = useState([]);
    const [dropDisplay, setDropDisplay] = useState([]);
    const [dragName, setDragName] = useState([]);
    const [dropInfo, setDropInfo] = useState([]);
    const [droppedItem, setDroppedItem] = useState([])
    const [wordNum, setWordNum] = useState(4);
    const [dragability, setDragability] = useState("true");
    const dragDrop = useRef();
    useEffect(() => {
        http.get("/exercise/element")
            .then((res) => {
                console.log(res.data)
                setData({
                    html: res.data.htmlTag,
                    css: res.data.cssTag,
                    js: res.data.jsTag
                });
                let longest = res.data.htmlTag.length;
                if (longest < res.data.cssTag.length) {
                    longest = res.data.cssTag.length
                } if (longest < res.data.jsTag.length) {
                    longest = res.data.jsTag.length
                }
                longestDataLength.current = longest;
                const newArr = (insert) => {
                    let arr = new Array(longestDataLength.current);
                    for (let i = 0; i < longest; i++) {
                        if (insert === "droppedIdNum") {
                            arr[i] = i;
                            continue;
                        }
                        if (insert === "droppedItem") {
                            arr[i] = { [i]: <span></span> }
                            continue;
                        }
                        arr[i] = insert
                    }
                    return arr
                }

                setDragDisplay(newArr("none"));
                setDropDisplay(newArr("none"));
                initialDroppedItem.current = newArr("droppedItem");
                initialDroppedIdNum.current = newArr("droppedIdNum");
                blankPadding.current = newArr("7px 80px");
            }).catch((err) => {
                console.log(err.message);
            })
    }, [])

    // bấm chọn game thì kéo xuống game và setup các thẻ
    function scrollToGame(event) {
        // console.log(data);
        setDisplayGame("block");
        switch (event.target.id) {
            case "html":
                gameSelection.current = data.html;
                break;
            case "css":
                gameSelection.current = data.css;
                break;
            case "js":
                gameSelection.current = data.js;
                break;
            default:
                break;
        }
        setTimeout(() => {
            dragDrop.current.scrollIntoView();
        }, 1)
        GamePlay();
    }

    function GamePlay() {
        setDragability("true");
        setDroppedItem(initialDroppedItem.current);
        setBlankDisplay(blankPadding.current);
        droppedIdNum.current = initialDroppedIdNum.current;
        shuffleWord();
        stagePlay();
        // countDownClock();
    }

    // shuffle từ lên
    function shuffleWord() {
        // shuffle tất cả các thẻ
        for (let i = gameSelection.current.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [gameSelection.current[i], gameSelection.current[j]] = [gameSelection.current[j], gameSelection.current[i]];
            [droppedIdNum.current[i], droppedIdNum.current[j]] = [droppedIdNum.current[j], droppedIdNum.current[i]];
        }
        // set tên các thẻ vào thẻ drop
        setDropInfo(gameSelection.current.map((info, index) => {
            return { name: info.name, meaning: info.meaning, index: droppedIdNum.current[index]}
        }))
        // shuffle lần nữa số thẻ tương ứng với màn chơi, và idNum để gán vào thẻ drag
        for (let i = wordNum - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [gameSelection.current[i], gameSelection.current[j]] = [gameSelection.current[j], gameSelection.current[i]];
            [droppedIdNum.current[i], droppedIdNum.current[j]] = [droppedIdNum.current[j], droppedIdNum.current[i]];
        }
        // set tên các thẻ vào thẻ drag
        setDragName(gameSelection.current.map((info) => {
            return info.name
        }))
    }

    // hiện các từ tùy theo cấp độ màn chơi (hide display những từ ko thuộc màn chơi)
    function stagePlay() {
        setDragDisplay(dragDisplay.map((info, num) => {
            if (num < wordNum) {
                return "inline"
            } else return info
        }));
        setDropDisplay(dropDisplay.map((info, num) => {
            if (num < wordNum) {
                return "block"
            } else return info
        }));
    }

    function dragStart(event) {
        // sử dụng event.dataTransfer.setData để lưu 1 giá trị của vật được kéo vào bộ nhớ tạm
        event.dataTransfer.setData("texts", event.target.innerText);
        setTimeout(() => {
            setDragDisplay(dragDisplay.map((display, index) => {
                // console.log(typeof +event.target.id, typeof initialDroppedIdNum.current[index]);
                if (+event.target.id === initialDroppedIdNum.current[index]) {
                    return "none"
                } else return display
            }))
        }, 0)
    }
    function dragOver(event) {
        event.preventDefault();
    }
    function dragEnd(event) {
        // nếu gán được vào thẻ cha có tên là blank thì thẻ từ tiếng anh này ko drag được nữa
        const dragEndDisplay = dragDisplay.map((display, index) => {
            console.log("current: " + droppedName.current,"id: " + event.target.id);
            if (droppedName.current === event.target.id) {
                // console.log(draggedItem.current);
                droppedName.current = "-1"
                draggedItem.current = false;
                return "none"
            } else {
                // console.log(draggedItem.current);
                return display
            }
        })
        setTimeout(() => {
            setDragDisplay(dragEndDisplay)
        }, 0)
    }
    function drop(event) {
        // sử dụng event.dataTransfer.getData() để lấy giá trị của vật được thả từ bộ nhớ tạm,
        // event.target. để lấy giá trị của target
        let dropped = event.target.getAttribute("id");
        // console.log(event.target.getAttribute("name"));
        let dragged = event.dataTransfer.getData("texts");
        if (dragged === dropped) {
            const newState = droppedItem.map(item => {
                if (Object.keys(item)[0] === event.target.getAttribute("name")) {
                    draggedItem.current = true;
                    droppedName.current = event.target.getAttribute("name");
                    return { [event.target.getAttribute("name")]: dragged }
                } else {
                    return { ...item }
                }
            })
            setDroppedItem(newState);
            setBlankDisplay(blankDisplay.map((padding, index) => {
                if (index === +event.target.getAttribute("name")) {
                    return "5px 0px"
                } else {
                    return [...padding]
                }
            }))

            // blank.style.padding = "5px 0px 5px 0px";
        }
    }

    // useEffect(() => {
    //     console.log(dragDisplay);
    // },[dragDisplay])
    useEffect(() => {
        console.log(dropInfo[0]);
    },[dropInfo])


    function countDownClock() {
        let dragList = document.querySelector(".Lists");
        // đếm ngược thời gian về 0
        let countDown = setInterval(() => {
            setCountdownTime((prev) => {
                time.current = prev - 1
                // console.log(time.current);
                return prev - 1
            });
            checkTime(time.current);
        }, 1000)
        // check xem thời gian về 0 chưa
        function checkTime(now) {
            if (now === 0) {
                setCountdownTime("HẾT GIỜ !!!");
                for (let i = 0; i < dragList.children.length; i++) {
                    dragList.children[i].setAttribute("draggable", false);
                }
                clearInterval(countDown);
                if (dragList.children.length === 0) {
                    alert("chúc mừng! Bạn đã thắng màn chơi này rồi !");
                    setNextDisplay("block");
                } else {
                    alert("Bạn thua mất rồi.. Hãy cố gắng hơn lần sau nhé ! ");
                    setRetryDisplay("block");
                }
            }
        }
    }

    function nextStage() {
        // setTimeout(() => {
        //     // if (wordNum < gameSelection.current.length) {
        //     //     setWordNum(wordNum + 2);
        //     //     setCountdownTime(timeLimit.current + 2);
        //     // }
        //     // GamePlay();
        // }, 1)

        // console.log(gameSelection);
        // console.log(wordNum);
        // console.log(timeLimit.current);
    }
    function retryStage() {

    }

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
            <div className="dragdrop-game" style={{ display: displayGame }} ref={dragDrop} id="dragdrop">
                <div className="game-infor">
                    <h1 className="heading1">Kéo và thả - Drag and drop</h1>
                    <p className="center"></p>
                    <div id="time">{countdownTime}</div>
                </div>
                <div className="game-area">
                    <div className="definition">
                        <div className="board1">
                            {gameSelection.current.map((info, index) => {
                                return <Drop key={index} display={dropDisplay[index]} id={dropInfo[index].name} padding={blankDisplay[index]}
                                    name={dropInfo[index].index} meaning={dropInfo[index].meaning} dragOver={dragOver} drop={drop}>
                                    {droppedItem[index][index]}
                                </Drop>
                            })}
                        </div>
                    </div>
                    <div className="Lists">
                        {gameSelection.current.map((info, index) => {
                            return <Drag id={droppedIdNum.current[index]} draggable={dragability} key={index} display={dragDisplay[index]} name={dragName[index]} dragStart={dragStart} dragEnd={dragEnd} />
                        })}
                    </div>
                </div>
                <div className="btn">
                    <button type="button" id="nextStage" style={{ display: nextDisplay }} onClick={nextStage}>Continue</button>
                    <button type="button" id="retry" style={{ display: retryDisplay }} onClick={retryStage}>Retry</button>
                </div>
            </div>
        </>
    );
};

export default DragDrop;