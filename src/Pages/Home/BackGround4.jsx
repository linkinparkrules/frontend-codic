import './BackGround.css';
import { Cards, Images, Numbers, Buttons } from './Components';
import exercise1 from "../../Asset/Background/exercise1.jpg";
import exercise2 from "../../Asset/Background/exercise2.jpg";
import exercise3 from "../../Asset/Background/exercise3.jpg";

const BackGround4 = () => {
    return (
        <div className="exercise">
            <div data-aos="zoom-in" data-aos-duration="2000">
                <h1 className="heading1">Bài tập thực hành</h1>
                <Cards className="exercise-number">
                    <Numbers h2="100+" p="Bài tập" />
                    <Numbers h2="100+" p="Đáp án" />
                </Cards>
            </div>
            <div className="exercise-content">
                <Cards className="row1-2 col1-3" dataAos="fade-right" dataAosDuration="2000">
                    <Numbers h2="10 phút/ngày" p="Chỉ với 10 phút/ngày, bạn đã có thể ghi nhớ các thẻ của HTML, CSS, JS" />
                </Cards>
                <Images className="row1-2 col3-4" src={exercise1} alt="Học code" />
                <Images className="row2-3 col1-2" src={exercise2} alt="Học code" />
                <Cards className="row2-3 col2-4" dataAos="fade-left" dataAosDuration="2000">
                    <Numbers h2="Bài tập trò chơi" p="Kết hợp thực hành và giải trí, nâng cao hiệu quả học tập" />
                </Cards>
                <Cards className="row3-4 col1-3 bgr-orange" dataAos="fade-right" dataAosDuration="2000">
                    <Numbers h2="Kiến thức thực tiễn" p="Bài tập sát với kiến thức cần thiết để đi làm" />
                </Cards>
                <Images className="row3-4 col3-4" src={exercise3} alt="Học code" />
            </div>
            <Buttons className="btn-white" dataAos="fade-up" dataAosDuration="1000" to="/exercise">
                Học ngay
                <i className="fa-solid fa-angles-right"></i>
            </Buttons>
        </div>
    );
};

export default BackGround4;