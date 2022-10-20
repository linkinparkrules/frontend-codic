import "./Exercise.css";
import StudyStep from "./Components";


import study from "../../Asset/Background/study.jpg";
import book from "../../Asset/Icon/book.png";
import element from "../../Asset/Icon/element.png";
import bug from "../../Asset/Icon/code with bug.png";

const BackGround1 = () => {
    return (
        <div className="studying-container">
            <img src={study} alt="Team study"/>
                <div className="studying-list" dataAos="fade-down" dataAosDuration="2000">
                    <StudyStep className="studying-item" linkTo="./dictionary" src={book} alt="Từ điển" content="Từ điển"/>
                    <StudyStep className="studying-item" linkTo="./element" src={element} alt="Các loại thẻ" content="Các loại thẻ"/>
                    <StudyStep className="studying-item" linkTo="#game" src={bug} alt="Trò chơi" content="Trò chơi"/>
                </div>
        </div>
    )
}

export default BackGround1