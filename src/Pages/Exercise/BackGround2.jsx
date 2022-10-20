import { Link } from 'react-router-dom';
import "./Exercise.css"
import bug from "../../Asset/Background/bug game img.jpg"
import dragDrop from "../../Asset/Background/drag n drop img.jpg"

const BackGround2 = () => {
    return (
        <div id="game" className="game-container">
            <h1 className="heading1">Bài tập</h1>
            <div className="game">
                <Link to="./bug.html" dataAos="fade-right" dataAosDuration="2000">
                    <h2>Trò chơi diệt Bug</h2>
                </Link>
                <img src={bug} alt="Ảnh trò chơi" dataAos="fade-left"
                    dataAosDuration="2000" />
                <img src={dragDrop} alt="Ảnh trò chơi" dataAos="fade-right"
                    dataAosDuration="2000" />
                <Link to="./dragdrop.html" dataAos="fade-left" dataAosDuration="2000">
                    <h2>Trò chơi kéo thả</h2>
                </Link>
            </div>
        </div>
    )
}

export default BackGround2