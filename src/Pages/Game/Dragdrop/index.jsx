import { useRef, useState, useEffect } from "react";
import "./DragDrop.css"
import selection from '../../../Asset/Background/selection.jpg';
import { Drag, Drop } from './dragNdrop.js'
import http from "../../../Utils/Axios";
import { CountDownClock } from "./CountDownClock";

const DragDrop = () => {
    // lưu trữ data lấy từ database
    const [data, setData] = useState();
    // // check xem người dùng có thắng ko, giá trị ban đầu là true
    const checkWin = useRef(true);
    // check xem người dùng đã hoàn thành màn chơi chưa, hoàn thành thì count = wordNum
    const [count, setCount] = useState(0);
    // hiển thị nút sang màn chơi mới
    const [nextDisplay, setNextDisplay] = useState("none");
    // hiển thị nút chơi lại
    const [retryDisplay, setRetryDisplay] = useState("none");
    // hiển thị màn hình trò chơi
    const [displayGame, setDisplayGame] = useState("none");
    // // đây là thời gian limit ban đầu
    // let timeLimit = useRef(10);
    // // đây là thời gian sẽ thay đổi theo từng giây đếm ngược
    // let time = useRef(timeLimit.current);
    // đây là chiều dài array của dữ liệu dài nhất trong 3 loại là html, css, js
    const longestDataLength = useRef();
    // đây là dữ liệu loại trò chơi. có 3 loại là html, css, js
    const gameSelection = useRef([]);
    // đây là giá trị ban đầu nằm trong ô trống blank (là một thẻ rỗng span)
    const initialDroppedItem = useRef([]);
    // thay đổi hiển thị các thẻ drop tùy vào màn chơi
    const [droppedItem, setDroppedItem] = useState([])
    // đây là số thứ tự của các thẻ drag-drop tương ứng
    const initialDroppedIdNum = useRef([]);
    // đây là số thứ tự của các thẻ drop tương ứng sau khi shuffle
    const droppedIdNum = useRef([]);
    // đây là số thứ tự của các thẻ drag tương ứng sau khi shuffle (shuffle lần nữa sau drop)
    const draggedIdNum = useRef([]);
    // đây là id của thẻ drop mà event đang target đến (event.target.id) (chưa target thì giá trị bằng -1)
    const droppedName = useRef(-1);
    // đây là dữ liệu ban đầu của kích thước ô trống blank (7px 80px)
    const blankPadding = useRef([]);
    // thay đổi dữ liệu của kích thước ô trống blank
    const [blankDisplay, setBlankDisplay] = useState([]);
    // thay đổi hiển thị các thẻ drag
    const [dragDisplay, setDragDisplay] = useState([]);
    // thay đổi hiển thị các thẻ drop
    const [dropDisplay, setDropDisplay] = useState([]);
    // thay đổi tên các thẻ drag
    const [dragName, setDragName] = useState([]);
    // thay đổi thông tin các thẻ drop gồm name, meaning, index(vị trí)
    const [dropInfo, setDropInfo] = useState([]);
    // thay đổi sổ thẻ hiển thị tùy vào màn chơi
    const [wordNum, setWordNum] = useState(4);
    // thay đổi khả năng kéo drag các thẻ
    const [dragability, setDragability] = useState("true");
    // chọn màn chơi thì kéo giao diện ng dùng vào màn hình game
    const dragDrop = useRef();
    useEffect(() => {
        http.get("/exercise/element")
            .then((res) => {
                // console.log(res.data)
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
                draggedIdNum.current = newArr(-1);
            }).catch((err) => {
                console.log(err.message);
            })
    }, [])

    // bấm chọn game thì kéo xuống game và setup các thẻ
    function scrollToGame(event) {
        // console.log(data);
        setDragDisplay(dragDisplay.map((display, index) => {
            if (display !== "none") { console.log(index + ": " + display); return "none" } else return display
        }))
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
        setDisplayGame("block");
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
        // checkTime(time.current);
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

            return { name: info.name, meaning: info.meaning, index: droppedIdNum.current[index] }
        }))
        // shuffle lần nữa số thẻ tương ứng với màn chơi, và idNum để gán vào thẻ drag
        for (let i = wordNum - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [gameSelection.current[i], gameSelection.current[j]] = [gameSelection.current[j], gameSelection.current[i]];
            [droppedIdNum.current[i], droppedIdNum.current[j]] = [droppedIdNum.current[j], droppedIdNum.current[i]];
        }
        // set tên các thẻ vào thẻ drag
        setDragName(gameSelection.current.map((info, index) => {
            draggedIdNum.current[index] = droppedIdNum.current[index];
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
            // console.log(+droppedName.current, +draggedIdNum.current[index], +event.target.id, event.target.style.display);
            // chúng ta chỉ xử lý những dragDisplay trong màn chơi
            if (index < wordNum) {
                // nếu đã thả đúng ô
                if (+droppedName.current !== -1) {
                    // với thẻ thả đúng ô
                    if (+droppedName.current === +draggedIdNum.current[index]) {
                        droppedName.current = -1
                        return display;
                        // với các thẻ còn lại
                    } else if (display === "none") {
                        // nếu đã có thẻ điền vào ô trống rồi thì vẫn để giá trị thẻ đó như vậy
                        return display;
                    } else {
                        // các thẻ chưa điền thì để hiển thị
                        return "inline"
                    }
                    // nếu chưa thả đúng ô
                } else {
                    if (+draggedIdNum.current[index] === +event.target.id) {
                        // nếu thẻ đang được trỏ trùng với id đang chạy trong map()
                        // tức nếu thẻ đc trỏ đc drag sai chỗ
                        return "inline"
                    } else {
                        // những thẻ còn lại
                        if (display === "none") {
                            // nếu đã có thẻ điền vào ô trống rồi thì vẫn để giá trị thẻ đó như vậy
                            return display;
                        } else {
                            return "inline";
                        };
                    };
                }
            } else {
                // những thẻ chưa có hiển thị trong màn chơi thì để mặc định như ban đầu
                return display;
            };
        })
        setDragDisplay(dragEndDisplay);

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
                    droppedName.current = event.target.getAttribute("name")
                    return { [event.target.getAttribute("name")]: dragged }
                } else {
                    return { ...item }
                }
            })
            setDroppedItem(newState);
            setBlankDisplay(blankDisplay.map((padding, index) => {
                // BUG ABOUT JS DISPLAY LENGTH DIFFERENCE
                // console.log(dropInfo[index].index, +event.target.getAttribute("name"));
                if (dropInfo[index].index === +event.target.getAttribute("name")) {
                    return "5px 0px"
                } else {
                    return padding
                }
            }))
        }
    }

    // check xem thời gian về 0 chưa
    function checkTime(now) {
        if (now === 0) {
            // set các thẻ ko drag kéo đc nữa
            setDragability("false")

            // nếu trong các thẻ drag có thẻ vẫn để display inline thì người chơi sẽ thua
            for (let i = 0; i < wordNum; i++) {
                console.log(dragDisplay[i]);
                if (dragDisplay[i] === 'inline') {
                    console.log("you lose");
                    checkWin.current = false
                }
            }
            console.log(dragDisplay);
            console.log(checkWin.current);
            if (checkWin.current) {
                alert("chúc mừng! Bạn đã thắng màn chơi này rồi !");
                setNextDisplay("block");
            } else {
                alert("Bạn thua mất rồi.. Hãy cố gắng hơn lần sau nhé ! ");
                setRetryDisplay("block");
            };
        };
    };

    // nếu điền hết thì hiện nút continue chuyển màn chơi tiếp
    useEffect(() => {
        let count = 0;
        for (let i = 0; i < wordNum; i++) {
            if (dragDisplay[i] === "none") {
                setCount(count++)
            } else if (count === 0) {
                setCount(0);
            } else {
                setCount(count--);
            };
        };
        if (count === wordNum) {
            setNextDisplay("block");
        } else {
            setNextDisplay("none");
        }
    }, [dragDisplay, wordNum, count])

    useEffect(() => {
        console.log(wordNum);
    }, [wordNum])

    function nextStage() {
        if (wordNum < longestDataLength.current - 2) {
            // setWordNum((prev) => prev + 2 );
            GamePlay();
        } else {
            alert("Bạn đã hoàn thành xuất sắc trò chơi này rồi!");
        }

    }
    function retryStage() {

    }
    // useEffect(() => {
    //     console.log(dragDisplay);
    // }, [dragDisplay])

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
                    <h3>Số từ ở màn chơi này: {wordNum}</h3>
                    {/* <CountDownClock/> */}
                </div>
                <div className="game-area">
                    <div className="definition">
                        <div className="board1">
                            {gameSelection.current.map((info, index) => {
                                return <Drop key={dropInfo[index].index} display={dropDisplay[index]} id={dropInfo[index].name} padding={blankDisplay[index]}
                                    name={dropInfo[index].index} meaning={dropInfo[index].meaning} dragOver={dragOver} drop={drop}>
                                    {droppedItem[dropInfo[index].index][dropInfo[index].index]}
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