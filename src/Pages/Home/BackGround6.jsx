import './BackGround.css';
import { Cards, Sections } from './Components';

const BackGround6 = () => {
    return (
        <div className="start-learning">
            <h1 className="heading1">Bắt đầu thôi nào!</h1>
            <div className="learning-process">
                <Cards className="learning-section" dataAos="flip-left" dataAosDuration="2000">
                    <Sections className="list" classNameLink="learning-section-name" content="Tra từ mới" to="/dictionary"/>
                </Cards>
                <Cards className="learning-section" dataAos="flip-left" dataAosDuration="2000">
                    <Sections className="list" classNameLink="learning-section-name" content="Tra thẻ" to="/element"/>
                </Cards>
                <Cards className="learning-section" dataAos="flip-left" dataAosDuration="2000">
                    <Sections className="list" classNameLink="learning-section-name" content="Bài tập"  to="exercise"/>
                </Cards>
            </div>
        </div>
    );
};

export default BackGround6;