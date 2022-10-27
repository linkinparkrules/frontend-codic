import "./Exercise.css";
import StudyStep from "./Components";
import study from "../../Asset/Background/study.jpg";
import book from "../../Asset/Icon/book.png";
import element from "../../Asset/Icon/element.png";
import bug from "../../Asset/Icon/code with bug.png";
import { Link } from 'react-router-dom';
import bugGame from "../../Asset/Background/bug game img.jpg"
import dragDrop from "../../Asset/Background/drag n drop img.jpg"
import { useRef } from "react";


const BackGround1 = () => {
    const game = useRef();
    console.log(game.current);
    function scrollToGame() {
        game.current.scrollIntoView();
    }
    return (
        <>
            <div className="studying-container">
                <img src={study} alt="Team study" />
                <div className="studying-list" data-aos="fade-down" data-aos-duration="2000">
                    <StudyStep className="studying-item" linkTo="./dictionary" src={book} alt="Từ điển" content="Từ điển" />
                    <StudyStep className="studying-item" linkTo="./element" src={element} alt="Các loại thẻ" content="Các loại thẻ" />
                    <StudyStep className="studying-item" onClick={scrollToGame} src={bug} alt="Trò chơi" content="Trò chơi" />
                </div>
            </div>
            <div id="game" ref={game} className="game-container">
                <h1 className="heading1">Bài tập</h1>
                <div className="game">
                    <Link to="./bug" data-aos="fade-right" data-aos-duration="2000">
                        <h2>Trò chơi diệt Bug</h2>
                    </Link>
                    <img src={bugGame} alt="Ảnh trò chơi" data-aos="fade-left"
                        data-aos-duration="2000" />
                    <img src={dragDrop} alt="Ảnh trò chơi" data-aos="fade-right"
                        data-aos-duration="2000" />
                    <Link to="./dragdrop" data-aos="fade-left" data-aos-duration="2000">
                        <h2>Trò chơi kéo thả</h2>
                    </Link>
                </div>
            </div>

        </>
    )
}

export default BackGround1